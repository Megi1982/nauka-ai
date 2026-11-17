// ④ DATABASE ACCESS LAYER
// The only file that reads and writes the JSON "database" files in /data.
// If we ever switched to a real database (e.g. PostgreSQL), only this file would change.

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');

function readJson(fileName) {
  const text = fs.readFileSync(path.join(DATA_DIR, fileName), 'utf8');
  return JSON.parse(text);
}

function writeJson(fileName, data) {
  fs.writeFileSync(path.join(DATA_DIR, fileName), JSON.stringify(data, null, 2) + '\n');
}

module.exports = {
  getInstruments: () => readJson('instruments.json'),
  getTrades: () => readJson('trades.json'),

  addOrder(order) {
    const orders = readJson('orders.json');
    orders.push(order);
    writeJson('orders.json', orders);
    return order;
  },
};
