🇬🇧 [English version](README.md)

# Demo Deal Ticket

Małe demo do nauki: ekran składania zleceń („deal ticket”) dla **fikcyjnej** platformy tradingowej. Ceny są wymyślone, nie ma prawdziwych pieniędzy ani prawdziwego tradingu. Zlecenia są tylko zapisywane do pliku JSON.

Celem jest pokazanie obok siebie czterech części aplikacji webowej.

## Demo online

**Link wkrótce.** Demo działa na darmowym planie Render, dlatego:
- po 15 minutach bez odwiedzin aplikacja zasypia, a pierwsze wejście po przerwie trwa około minuty,
- zlecenia nie są zapisywane trwale: znikają przy każdym restarcie albo uśpieniu aplikacji.

## Cztery części

| Część | Gdzie | Co robi |
|---|---|---|
| ① Frontend | `frontend/index.html`, `styles.css`, `app.js` | Ekran w przeglądarce: formularz, przełącznik Buy/Sell, dolna szuflada z sugestią Trade default |
| ② API | `backend/server.js` | „Umowa” między frontendem a backendem: trzy endpointy (poniżej) |
| ③ Backend | `backend/tradeDefault.js`, `backend/db.js` | Logika na serwerze: liczy sugestię, sprawdza i zapisuje zlecenia |
| ④ Baza danych | `data/*.json` | Instrumenty, 16 wymyślonych historycznych transakcji i zapisane zlecenia |

### Endpointy API

| Metoda | Adres | Zwraca |
|---|---|---|
| GET | `/api/instruments` | Instrumenty z fikcyjnymi „żywymi” cenami bid/ask |
| GET | `/api/trade-default/:symbol` | Sugestię wyliczoną z historii (404, gdy nie ma historii, np. USD/JPY) |
| POST | `/api/orders` | Sprawdza zlecenie i dopisuje je do `data/orders.json` |

### Jak liczony jest Trade default

Dla wybranego instrumentu backend przegląda historię transakcji i bierze:
- **kierunek:** najczęstszy (dominanta),
- **wielkość:** medianę (żeby jedna nietypowo duża transakcja nie zawyżała wyniku),
- **odległość stop lossa i take profitu w pipsach:** medianę, przeliczoną na ceny względem aktualnej ceny.

## Przepływ danych: od wyboru instrumentu do zastosowania sugestii

1. Po otwarciu strony `app.js` wywołuje `GET /api/instruments` → `server.js` → `db.js` czyta `instruments.json` → lista rozwijana się wypełnia.
2. Wybierasz instrument → `app.js` wywołuje `GET /api/trade-default/XAUUSD`.
3. `server.js` → `db.js` czyta `trades.json` → `tradeDefault.js` liczy sugestię → JSON wraca do przeglądarki.
4. `app.js` wkłada sugestię do szuflady i ją wysuwa.
5. Klikasz **Apply to ticket** → `app.js` wpisuje wartości do formularza. Ten krok dzieje się tylko w przeglądarce, bez nowego zapytania.
6. **Place order** → `POST /api/orders` → walidacja → `db.js` dopisuje zlecenie do `orders.json`.

## Uruchomienie

Wymaga [Node.js](https://nodejs.org).

```sh
cd projects/deal-ticket
npm install   # pobiera Express do node_modules/
npm start     # uruchamia serwer
```

Potem otwórz http://localhost:3000.

Żeby wyczyścić zapisane zlecenia, zastąp zawartość `data/orders.json` przez `[]`.
