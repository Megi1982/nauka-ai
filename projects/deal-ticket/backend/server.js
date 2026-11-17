// ② API + server entry point
// Express listens for HTTP requests. Each app.get / app.post below is one API endpoint:
// the "contract" that tells the frontend what it can ask for.

const path = require('path');
const express = require('express');
const db = require('./db');
const { calculateTradeDefault } = require('./tradeDefault');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // lets us read JSON sent in POST requests
app.use(express.static(path.join(__dirname, '..', 'frontend'))); // serves the ① frontend files

// --- Fake live prices (kept in memory, never real market data) ---
const instruments = db.getInstruments();
const mids = Object.fromEntries(instruments.map((i) => [i.symbol, i.basePrice]));

setInterval(() => {
  for (const i of instruments) {
    const step = i.basePrice * 0.0001 * (Math.random() - 0.5); // tiny random move
    const next = mids[i.symbol] + step;
    // stay within ±0.3% of the base price
    mids[i.symbol] = Math.min(i.basePrice * 1.003, Math.max(i.basePrice * 0.997, next));
  }
}, 1000);

function priceFor(instrument) {
  const half = instrument.spread / 2;
  const d = instrument.decimals;
  return {
    bid: Number((mids[instrument.symbol] - half).toFixed(d)),
    ask: Number((mids[instrument.symbol] + half).toFixed(d)),
  };
}

function findInstrument(symbol) {
  return instruments.find((i) => i.symbol === symbol);
}

// GET /api/instruments -> list of instruments with current fake prices
app.get('/api/instruments', (req, res) => {
  res.json(
    instruments.map((i) => ({
      symbol: i.symbol,
      name: i.name,
      decimals: i.decimals,
      pipSize: i.pipSize,
      ...priceFor(i),
    }))
  );
});

// GET /api/trade-default/:symbol -> suggestion calculated from trade history
app.get('/api/trade-default/:symbol', (req, res) => {
  const instrument = findInstrument(req.params.symbol);
  if (!instrument) return res.status(404).json({ error: 'Unknown instrument' });

  const suggestion = calculateTradeDefault(instrument, db.getTrades(), priceFor(instrument));
  if (!suggestion) return res.status(404).json({ error: 'No trade history for this instrument' });

  res.json(suggestion);
});

// POST /api/orders -> validate and save an order (only written to a file, no real trading)
app.post('/api/orders', (req, res) => {
  const { symbol, side, size, stopLoss, takeProfit } = req.body || {};
  const instrument = findInstrument(symbol);
  const errors = [];

  if (!instrument) errors.push('Unknown instrument');
  if (side !== 'buy' && side !== 'sell') errors.push('Side must be "buy" or "sell"');
  if (!(typeof size === 'number' && size > 0 && size <= 100)) errors.push('Size must be between 0 and 100 lots');

  let price = null;
  if (instrument && errors.length === 0) {
    price = priceFor(instrument);
    const entry = side === 'buy' ? price.ask : price.bid;
    const isBuy = side === 'buy';
    if (stopLoss != null && (isBuy ? stopLoss >= entry : stopLoss <= entry)) {
      errors.push(`Stop loss must be ${isBuy ? 'below' : 'above'} the entry price`);
    }
    if (takeProfit != null && (isBuy ? takeProfit <= entry : takeProfit >= entry)) {
      errors.push(`Take profit must be ${isBuy ? 'above' : 'below'} the entry price`);
    }
  }

  if (errors.length) return res.status(400).json({ errors });

  const order = db.addOrder({
    id: 'O-' + Date.now(),
    createdAt: new Date().toISOString(),
    symbol,
    side,
    size,
    entryPrice: side === 'buy' ? price.ask : price.bid,
    stopLoss: stopLoss ?? null,
    takeProfit: takeProfit ?? null,
    status: 'accepted',
  });

  res.status(201).json(order);
});

app.listen(PORT, () => {
  console.log(`Deal Ticket demo running at http://localhost:${PORT}`);
});
