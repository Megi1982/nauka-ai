🇵🇱 [Wersja polska](README.pl.md)

# Deal Ticket demo

A small learning demo of an order entry screen ("deal ticket") for a **fictional** trading platform. Prices are made up and no real money or trading is involved: orders are only saved to a JSON file.

The goal is to show the four parts of a web application side by side.

## Live demo

**Link coming soon.** The demo is hosted on Render's free plan, so:
- after 15 minutes without visitors the app goes to sleep, and the first visit after that takes about a minute to load,
- orders are not saved permanently: they disappear whenever the app restarts or goes to sleep.

## The four parts

| Part | Where | What it does |
|---|---|---|
| ① Frontend | `frontend/index.html`, `styles.css`, `app.js` | The screen in the browser: form, Buy/Sell toggle, bottom drawer with the Trade default suggestion |
| ② API | `backend/server.js` | The "contract" between frontend and backend: three endpoints (see below) |
| ③ Backend | `backend/tradeDefault.js`, `backend/db.js` | Logic on the server: calculates the suggestion, validates and saves orders |
| ④ Database | `data/*.json` | Instruments, 16 fictional past trades, and saved orders |

### API endpoints

| Method | Address | Returns |
|---|---|---|
| GET | `/api/instruments` | Instruments with fake live bid/ask prices |
| GET | `/api/trade-default/:symbol` | Suggestion calculated from past trades (404 if there is no history, e.g. USD/JPY) |
| POST | `/api/orders` | Validates the order and appends it to `data/orders.json` |

### How Trade default is calculated

For the selected instrument, the backend looks at past trades and takes:
- **direction:** the most frequent one (mode),
- **size:** the median (so a single unusually large trade doesn't skew it),
- **stop loss and take profit distance in pips:** the median, converted into prices from the current price.

## Data flow: from choosing an instrument to applying the suggestion

1. On page load `app.js` calls `GET /api/instruments` → `server.js` → `db.js` reads `instruments.json` → the dropdown is filled.
2. You choose an instrument → `app.js` calls `GET /api/trade-default/XAUUSD`.
3. `server.js` → `db.js` reads `trades.json` → `tradeDefault.js` calculates the suggestion → JSON goes back to the browser.
4. `app.js` puts the suggestion in the drawer and slides it open.
5. You click **Apply to ticket** → `app.js` fills in the form. This step happens only in the browser, with no new request.
6. **Place order** → `POST /api/orders` → validation → `db.js` appends to `orders.json`.

## Run it

Requires [Node.js](https://nodejs.org).

```sh
cd projects/deal-ticket
npm install   # downloads Express into node_modules/
npm start     # starts the server
```

Then open http://localhost:3000.

To reset saved orders, replace the contents of `data/orders.json` with `[]`.
