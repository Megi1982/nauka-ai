// ③ BACKEND BUSINESS LOGIC
// Calculates a "Trade default" suggestion from the user's past trades.
// A pure function: data in, result out. It doesn't read files or know about HTTP.

// Most frequent value, e.g. ["buy", "buy", "sell"] -> "buy"
function mode(values) {
  const counts = {};
  for (const v of values) counts[v] = (counts[v] || 0) + 1;
  return Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];
}

// Middle value after sorting. Ignores one-off outliers better than an average.
function median(values) {
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

function round(value, decimals) {
  return Number(value.toFixed(decimals));
}

/**
 * @param instrument  one item from instruments.json
 * @param trades      all items from trades.json
 * @param price       current { bid, ask } for the instrument
 * @returns suggestion object, or null if there is no history
 */
function calculateTradeDefault(instrument, trades, price) {
  const history = trades.filter((t) => t.symbol === instrument.symbol);
  if (history.length === 0) return null;

  const side = mode(history.map((t) => t.side));
  const size = median(history.map((t) => t.size));
  const stopLossPips = median(history.map((t) => t.stopLossPips));
  const takeProfitPips = median(history.map((t) => t.takeProfitPips));

  // Buy opens at ask: SL below, TP above. Sell opens at bid: the other way round.
  const entry = side === 'buy' ? price.ask : price.bid;
  const direction = side === 'buy' ? 1 : -1;
  const stopLoss = entry - direction * stopLossPips * instrument.pipSize;
  const takeProfit = entry + direction * takeProfitPips * instrument.pipSize;

  return {
    symbol: instrument.symbol,
    side,
    size,
    stopLossPips,
    takeProfitPips,
    stopLoss: round(stopLoss, instrument.decimals),
    takeProfit: round(takeProfit, instrument.decimals),
    basedOn: history.length,
  };
}

module.exports = { calculateTradeDefault, mode, median };
