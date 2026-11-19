// ① FRONTEND: behaviour of the screen.
// Talks to the ② API with fetch() and updates the page. It never touches the data files directly.

const state = {
  instruments: [],
  side: 'buy',
  suggestion: null,
};

const $ = (id) => document.getElementById(id);
const els = {
  instrument: $('instrument'),
  bid: $('bid'),
  ask: $('ask'),
  size: $('size'),
  stopLoss: $('stopLoss'),
  takeProfit: $('takeProfit'),
  submit: $('submit'),
  message: $('form-message'),
  form: $('order-form'),
  drawer: $('drawer'),
  drawerHandle: $('drawer-handle'),
  suggestion: $('suggestion'),
};

function currentInstrument() {
  return state.instruments.find((i) => i.symbol === els.instrument.value);
}

// ---------- API calls ----------
async function fetchInstruments() {
  const res = await fetch('/api/instruments');
  return res.json();
}

async function fetchTradeDefault(symbol) {
  const res = await fetch(`/api/trade-default/${symbol}`);
  if (res.status === 404) return null; // no history -> empty state
  return res.json();
}

async function postOrder(order) {
  const res = await fetch('/api/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order),
  });
  return { ok: res.ok, body: await res.json() };
}

// ---------- Rendering ----------
function renderPrices() {
  const inst = currentInstrument();
  if (!inst) return;
  els.bid.textContent = inst.bid.toFixed(inst.decimals);
  els.ask.textContent = inst.ask.toFixed(inst.decimals);
}

function setSide(side) {
  state.side = side;
  document.querySelectorAll('.side').forEach((btn) => {
    const active = btn.dataset.side === side;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-checked', String(active));
  });
  els.submit.className = `submit ${side}`;
  els.submit.textContent = `Place ${side === 'buy' ? 'Buy' : 'Sell'} order`;
}

function setDrawer(open) {
  els.drawer.classList.toggle('is-open', open);
  els.drawerHandle.setAttribute('aria-expanded', String(open));
}

function renderSuggestion() {
  const s = state.suggestion;
  if (!s) {
    els.suggestion.innerHTML =
      '<p class="empty">No trade history for this instrument yet, so there is no suggestion.</p>';
    return;
  }
  const inst = currentInstrument();
  els.suggestion.innerHTML = `
    <div class="suggestion-grid">
      <div class="suggestion-item"><span>Direction</span><strong class="${s.side}">${s.side.toUpperCase()}</strong></div>
      <div class="suggestion-item"><span>Size</span><strong>${s.size} lots</strong></div>
      <div class="suggestion-item"><span>Stop loss (${s.stopLossPips} pips)</span><strong>${s.stopLoss.toFixed(inst.decimals)}</strong></div>
      <div class="suggestion-item"><span>Take profit (${s.takeProfitPips} pips)</span><strong>${s.takeProfit.toFixed(inst.decimals)}</strong></div>
    </div>
    <p class="based-on">Based on your last ${s.basedOn} ${inst.name} trades.</p>
    <button type="button" class="apply" id="apply">Apply to ticket</button>
  `;
  $('apply').addEventListener('click', applySuggestion);
}

function showMessage(text, type) {
  els.message.textContent = text;
  els.message.className = `message ${type || ''}`;
}

// Values typed or applied for one instrument make no sense for another (e.g. Gold SL 2313 vs GBP/USD ~1.27).
// Clear them; the new suggestion waits in the drawer until the user clicks "Apply to ticket".
function clearTicketFields() {
  els.size.value = '';
  els.stopLoss.value = '';
  els.takeProfit.value = '';
}

// ---------- Actions ----------
async function onInstrumentChange() {
  renderPrices();
  clearTicketFields();
  showMessage('');
  state.suggestion = await fetchTradeDefault(els.instrument.value);
  renderSuggestion();
  setDrawer(true);
}

// Clicking "Apply" happens fully in the browser: no new request to the server.
function applySuggestion() {
  const s = state.suggestion;
  setSide(s.side);
  els.size.value = s.size;
  els.stopLoss.value = s.stopLoss;
  els.takeProfit.value = s.takeProfit;

  for (const field of [els.size, els.stopLoss, els.takeProfit]) {
    field.classList.add('just-filled');
    setTimeout(() => field.classList.remove('just-filled'), 900);
  }
  setDrawer(false);
  showMessage('Trade default applied. Review and place your order.');
}

// Quick check in the browser for fast feedback. The server checks again (never trust the client).
function validate(order, inst) {
  const entry = order.side === 'buy' ? inst.ask : inst.bid;
  const isBuy = order.side === 'buy';
  if (!(order.size > 0)) return 'Size must be greater than 0.';
  if (order.stopLoss != null && (isBuy ? order.stopLoss >= entry : order.stopLoss <= entry)) {
    return `Stop loss must be ${isBuy ? 'below' : 'above'} ${entry.toFixed(inst.decimals)}.`;
  }
  if (order.takeProfit != null && (isBuy ? order.takeProfit <= entry : order.takeProfit >= entry)) {
    return `Take profit must be ${isBuy ? 'above' : 'below'} ${entry.toFixed(inst.decimals)}.`;
  }
  return null;
}

async function onSubmit(event) {
  event.preventDefault();
  const inst = currentInstrument();
  const toNumber = (input) => (input.value === '' ? null : Number(input.value));
  const order = {
    symbol: inst.symbol,
    side: state.side,
    size: Number(els.size.value),
    stopLoss: toNumber(els.stopLoss),
    takeProfit: toNumber(els.takeProfit),
  };

  const error = validate(order, inst);
  if (error) return showMessage(error, 'error');

  els.submit.disabled = true;
  const { ok, body } = await postOrder(order);
  els.submit.disabled = false;

  if (ok) {
    showMessage(`Order ${body.id} accepted at ${body.entryPrice}. (Saved to orders.json, not a real trade.)`, 'success');
  } else {
    showMessage(body.errors.join(' '), 'error');
  }
}

// ---------- Start ----------
async function init() {
  state.instruments = await fetchInstruments();
  els.instrument.innerHTML = state.instruments
    .map((i) => `<option value="${i.symbol}">${i.name}</option>`)
    .join('');

  els.instrument.addEventListener('change', onInstrumentChange);
  els.form.addEventListener('submit', onSubmit);
  els.drawerHandle.addEventListener('click', () => setDrawer(!els.drawer.classList.contains('is-open')));
  document.querySelectorAll('.side').forEach((btn) =>
    btn.addEventListener('click', () => setSide(btn.dataset.side))
  );

  await onInstrumentChange();

  // Refresh fake prices every 2 seconds
  setInterval(async () => {
    state.instruments = await fetchInstruments();
    renderPrices();
  }, 2000);
}

init();
