// Automated tests for backend/tradeDefault.js
// Run with: npm test   (uses Node's built-in test runner, no extra dependencies)

const { test, describe } = require('node:test');
const assert = require('node:assert/strict');

const { calculateTradeDefault, mode, median } = require('../backend/tradeDefault');
const db = require('../backend/db');

const instruments = db.getInstruments();
const trades = db.getTrades();
const bySymbol = (symbol) => instruments.find((i) => i.symbol === symbol);

// Fixed prices: live prices move, but a test must give the same result every time.
const PRICES = {
  EURUSD: { bid: 1.085, ask: 1.0851 },
  GBPUSD: { bid: 1.27, ask: 1.2702 },
  USDJPY: { bid: 151.5, ask: 151.52 },
  XAUUSD: { bid: 2330.0, ask: 2330.4 },
};

const suggest = (symbol) => calculateTradeDefault(bySymbol(symbol), trades, PRICES[symbol]);

describe('mode', () => {
  test('returns the most frequent value', () => {
    assert.equal(mode(['buy', 'buy', 'sell']), 'buy');
  });
});

describe('median', () => {
  test('returns the middle value for an odd number of items', () => {
    assert.equal(median([3, 1, 2]), 2);
  });

  test('returns the average of the two middle values for an even number of items', () => {
    assert.equal(median([1, 2, 3, 4]), 2.5);
  });

  test('ignores one unusually large trade (outlier)', () => {
    // GBP/USD sizes from trades.json. The average would be ~1.06; the median stays 0.5.
    assert.equal(median([0.5, 0.8, 0.5, 0.5, 3.0]), 0.5);
  });

  test('does not change the original array', () => {
    const values = [3, 1, 2];
    median(values);
    assert.deepEqual(values, [3, 1, 2]);
  });
});

describe('calculateTradeDefault with data from trades.json', () => {
  test('EUR/USD: buy 1.0 lot, SL 20 / TP 40 pips, based on 6 trades', () => {
    assert.deepEqual(suggest('EURUSD'), {
      symbol: 'EURUSD',
      side: 'buy',
      size: 1.0,
      stopLossPips: 20,
      takeProfitPips: 40,
      stopLoss: 1.0831, // buy opens at ask 1.0851, SL below
      takeProfit: 1.0891, // TP above
      basedOn: 6,
    });
  });

  test('GBP/USD: sell 0.5 lot, SL 30 / TP 60 pips, based on 5 trades', () => {
    assert.deepEqual(suggest('GBPUSD'), {
      symbol: 'GBPUSD',
      side: 'sell',
      size: 0.5, // the one-off 3.0 lot trade (T-016) is ignored
      stopLossPips: 30,
      takeProfitPips: 60,
      stopLoss: 1.273, // sell opens at bid 1.2700, SL above
      takeProfit: 1.264, // TP below
      basedOn: 5,
    });
  });

  test('Gold: buy 0.2 lot, SL 160 / TP 320 pips, based on 5 trades', () => {
    assert.deepEqual(suggest('XAUUSD'), {
      symbol: 'XAUUSD',
      side: 'buy',
      size: 0.2, // the one-off 1.5 lot trade (T-014) is ignored
      stopLossPips: 160,
      takeProfitPips: 320,
      stopLoss: 2314.4, // ask 2330.40 - 160 pips * 0.1
      takeProfit: 2362.4, // ask 2330.40 + 320 pips * 0.1
      basedOn: 5,
    });
  });

  test('USD/JPY: no history, so no suggestion (null)', () => {
    assert.equal(suggest('USDJPY'), null);
  });
});
