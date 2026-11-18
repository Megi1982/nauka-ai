🇬🇧 [English version](GLOSSARY.md)

# Słowniczek

Pojęcia, które poznałam, ucząc się software developmentu z AI.
Pojęcia są pogrupowane w kategorie, a w każdej kategorii ułożone alfabetycznie.

- [Terminal](#terminal)
- [Git](#git)
- [GitHub](#github)
- [Dokumentacja](#dokumentacja)
- [Claude Code](#claude-code)
- [Web development](#web-development)
- [Trading](#trading)

---

## Terminal

### Command
Polecenie, które wpisujesz w terminalu i zatwierdzasz Enterem. Zwykle składa się z nazwy programu, opcji (zaczynających się od `-`) i argumentów.
- **Analogia z designu:** Jak skrót klawiszowy, tylko zapisany w całości: precyzyjny i powtarzalny.
- **Przykład:** `ls -la` (pokaż wszystkie pliki w bieżącym folderze, także ukryte)

### Command Line Tools
Pakiet narzędzi deweloperskich od Apple dla macOS. Zawiera między innymi `git`. Bez niego wiele poleceń w terminalu nie zadziała.
- **Analogia z designu:** Jak instalacja paczki fontów, zanim użyjesz tych krojów w projekcie.
- **Przykład:** `xcode-select --install`

### curl
Program w terminalu, który wysyła zapytania HTTP i wyświetla odpowiedź. Przydaje się do testowania API bez otwierania przeglądarki.
- **Analogia z designu:** Jak testowanie pojedynczego komponentu w izolacji, zanim wstawisz go na ekran.
- **Przykład:** `curl localhost:3000/api/instruments`

### Home directory (~)
Twój osobisty folder na komputerze (`/Users/<twoja-nazwa>`). Znak `~` to jego skrót.
- **Analogia z designu:** Jak Twoje prywatne Drafts w Figmie: własne miejsce, oddzielone od innych.
- **Przykład:** `cd ~` (przejdź do folderu domowego)

### PATH
Lista folderów, w których shell szuka programów, gdy wpisujesz polecenie. Jeśli programu nie ma w żadnym z nich, pojawia się błąd `command not found`.
- **Analogia z designu:** Jak biblioteki włączone w pliku Figmy: możesz używać tylko komponentów z włączonych bibliotek.
- **Przykład:** `echo $PATH`

### Shell (bash, zsh)
Program działający w terminalu, który odczytuje Twoje polecenia i je wykonuje. **zsh** to dziś domyślny shell w macOS, a **bash** to starszy, bardzo popularny. Większość poleceń działa w obu tak samo.
- **Analogia z designu:** Terminal to okno, a shell to tłumacz za nim, który zamienia Twoje słowa na działania.
- **Przykład:** `echo $SHELL` (pokazuje, jakiego shella używasz)

### Terminal
Aplikacja, w której pracujesz z komputerem za pomocą poleceń tekstowych zamiast klikania.
- **Analogia z designu:** Jak wpisywanie dokładnych wartości w panelu właściwości zamiast przeciągania myszką: mniej wizualne, ale precyzyjniejsze i szybsze, gdy już się wprawisz.
- **Przykład:** Otwórz przez Cmd + Spacja, wpisz „Terminal”, naciśnij Enter.

---

## Git

### .gitignore
Plik z listą plików i folderów, które Git ma pomijać: nie śledzi ich i nie proponuje dodania ich do commita. Przydaje się dla prywatnych ustawień, haseł i plików tymczasowych.
- **Analogia z designu:** Jak ukrycie warstw pomocniczych przed eksportem: są w Twoim pliku, ale nie trafiają do oddawanych materiałów.
- **Przykład:** Linia `.claude/settings.local.json` w pliku `.gitignore`

### Branch
Gałąź, czyli osobna linia pracy w repozytorium. Na gałęzi możesz eksperymentować bez ruszania głównej wersji.
- **Analogia z designu:** Dokładnie jak branching w Figmie: pracujesz na kopii, a potem łączysz ją z głównym plikiem.
- **Przykład:** `git switch -c nowy-pomysl` (utwórz nową gałąź i przejdź na nią)

### Commit
Zapisany stan zmian z krótkim opisem tego, co zostało zrobione.
- **Analogia z designu:** Nazwana wersja w historii wersji Figmy.
- **Przykład:** `git commit -m "Dodaj README"`

### Commit hash
Unikalny identyfikator commita: długi ciąg liter i cyfr, zwykle skracany do pierwszych 7 znaków (np. `62ed60c`).
- **Analogia z designu:** Jak numer wersji, tylko nadawany automatycznie i zawsze unikalny.
- **Przykład:** `git show 62ed60c` (pokaż, co zmienił ten commit)

### Diff
Porównanie, które pokazuje, co się zmieniło między dwiema wersjami: linie dodane (`+`) i usunięte (`-`).
- **Analogia z designu:** Jak ułożenie ekranów „przed” i „po” obok siebie.
- **Przykład:** `git diff`

### Git
System kontroli wersji, czyli program, który pamięta pełną historię zmian w plikach projektu. Działa lokalnie, na Twoim komputerze.
- **Analogia z designu:** Historia wersji z Figmy, tylko dla dowolnych plików i w pełni pod Twoją kontrolą.
- **Przykład:** `git --version`

### git add (staging)
Wybiera, które zmiany trafią do następnego commita. **Staging** to rodzaj poczekalni dla zmian.
- **Analogia z designu:** Jak zaznaczanie frame'ów przed eksportem: wyeksportują się tylko zaznaczone.
- **Przykład:** `git add README.md`

### git log
Pokazuje historię commitów: kto, kiedy, co i dlaczego zmienił.
- **Analogia z designu:** Panel historii wersji w Figmie.
- **Przykład:** `git log --oneline`

### git status
Pokazuje bieżący stan repozytorium: na jakiej gałęzi jesteś, które pliki się zmieniły i które są w stagingu.
- **Analogia z designu:** Szybki rzut oka na status pliku przed handoffem: co jest gotowe, a co jeszcze w toku.
- **Przykład:** `git status`

### HEAD
Znacznik „jesteś tutaj”, który wskazuje commit, na którym teraz pracujesz.
- **Analogia z designu:** Wersja aktualnie otwarta w historii wersji.
- **Przykład:** `git show HEAD`

### main
Domyślna, główna gałąź repozytorium: „oficjalna” wersja projektu.
- **Analogia z designu:** Główny plik w Figmie, w odróżnieniu od jego branchy.
- **Przykład:** `git switch main`

### Merge
Połączenie zmian z jednej gałęzi z inną.
- **Analogia z designu:** Scalenie brancha z głównym plikiem w Figmie.
- **Przykład:** `git merge nowy-pomysl`

### origin
Przyjęta nazwa głównego remote'u. To tylko etykieta dla długiego adresu.
- **Analogia z designu:** Nazwanie warstwy „Header” zamiast „Rectangle 47”.
- **Przykład:** `git remote -v` (pokaż remote'y i ich adresy)

### pull
Pobiera nowe zmiany z remote'u i łączy je z Twoją lokalną gałęzią.
- **Analogia z designu:** Zaakceptowanie aktualizacji biblioteki, żeby mieć najnowszą wersję komponentów.
- **Przykład:** `git pull`

### push
Wysyła Twoje lokalne commity na remote (np. na GitHuba).
- **Analogia z designu:** Kliknięcie „Publish” w bibliotece komponentów: Twoje zmiany stają się widoczne dla innych.
- **Przykład:** `git push`

### remote
Kopia repozytorium na serwerze (np. na GitHubie), zapisana w Twoim repozytorium jako adres.
- **Analogia z designu:** Wspólny plik w chmurze, w odróżnieniu od pliku, który jest tylko na Twoim dysku.
- **Przykład:** `git remote add origin git@github.com:Megi1982/nauka-ai.git`

### Repository
Repozytorium, czyli folder projektu śledzony przez Gita, razem z pełną historią zmian (zapisaną w ukrytym folderze `.git`).
- **Analogia z designu:** Projekt w Figmie ze wszystkimi plikami i ich historią.
- **Przykład:** `git init` (zamień bieżący folder w repozytorium)

### Untracked file
Nieśledzony plik, czyli plik w folderze repozytorium, którego Git jeszcze nie śledzi, bo nigdy nie został dodany do commita. `git status --short` oznacza go symbolem `??`.
- **Analogia z designu:** Nowy frame na canvasie, który nie należy jeszcze do żadnej opublikowanej wersji.
- **Przykład:** `git status --short` → `?? GLOSSARY.md`

---

## GitHub

### Code review
Inna osoba czyta Twoje zmiany, zanim zostaną połączone z gałęzią główną, komentuje je i proponuje poprawki.
- **Analogia z designu:** Design critique albo design review.
- **Przykład:** Odbywa się w pull requeście na GitHubie, w zakładce „Files changed”.

### Fingerprint
Krótki „odcisk” klucza, który pozwala sprawdzić, czy to właściwy klucz. Przy pierwszym połączeniu z serwerem przez SSH pojawia się prośba o potwierdzenie jego fingerprintu.
- **Analogia z designu:** Jak porównanie kodów HEX, żeby upewnić się, że dwa kolory są identyczne.
- **Przykład:** `ssh-keygen -lf ~/.ssh/id_ed25519.pub` (pokaż fingerprint swojego klucza publicznego)

### GitHub
Serwis internetowy, który przechowuje repozytoria Gita i dodaje narzędzia do współpracy: pull requesty, code review, zgłoszenia (issues). **Git** to narzędzie, a **GitHub** to miejsce, w którym dzielisz się pracą.
- **Analogia z designu:** Jeśli Git to historia wersji, to GitHub jest chmurą Figmy z udostępnianiem i komentarzami.
- **Przykład:** https://github.com/Megi1982/nauka-ai

### Pull request (PR)
Propozycja na GitHubie, żeby połączyć zmiany z Twojej gałęzi z inną (zwykle z `main`). To miejsce na dyskusję i code review.
- **Analogia z designu:** Pokazanie brancha do review, zanim scalisz go z głównym plikiem.
- **Przykład:** `gh pr create` (za pomocą narzędzia GitHub CLI)

### SSH key (public and private)
Para plików do bezpiecznego logowania bez hasła. **Klucz publiczny** przekazujesz GitHubowi, a **klucz prywatny** zostaje na Twoim komputerze i nigdy nie wolno go nikomu udostępniać.
- **Analogia z designu:** Karta dostępu do biura: czytnik (GitHub) zna Twoją kartę, a sama karta (klucz prywatny) zostaje u Ciebie.
- **Przykład:** `ssh -T git@github.com` (sprawdź, czy GitHub rozpoznaje Twój klucz)

---

## Dokumentacja

### Frontmatter
Blok ustawień na samej górze pliku Markdown, między dwiema liniami `---`. Programy czytają go jako konfigurację; nie jest wyświetlany jako część tekstu.
- **Analogia z designu:** Jak właściwości warstwy w Figmie: niewidoczne na canvasie, ale decydują, jak element się zachowuje.
- **Przykład:** `---` / `name: dziennik` / `---` na górze pliku `SKILL.md`

### Markdown
Prosty sposób formatowania tekstu za pomocą znaków: `#` to nagłówek, `-` to punkt listy, a `**tekst**` to pogrubienie.
- **Analogia z designu:** Jak style tekstu, tylko nadawane wpisanymi znakami zamiast wyboru z menu.
- **Przykład:** `## Nagłówek` / `- punkt listy` / `**pogrubienie**`

### README
„Strona główna” repozytorium. GitHub automatycznie wyświetla plik `README.md` na stronie głównej repozytorium.
- **Analogia z designu:** Okładka pliku w Figmie: to pierwsze, co ludzie widzą.
- **Przykład:** `README.md` (angielski) i `README.pl.md` (polski) w tym repozytorium

---

## Claude Code

### allowed-tools
Ustawienie we frontmatterze skilla, które wymienia polecenia, jakie Claude może uruchamiać bez pytania mnie o zgodę, dopóki działa ten skill. Wszystko spoza listy wciąż wymaga mojej zgody. Dlatego w `/dziennik` celowo nie ma tam `git push`.
- **Analogia z designu:** Jak dostęp „can edit” vs. „can view”: dajesz dokładnie te uprawnienia, których zadanie potrzebuje, a publikację zostawiasz sobie.
- **Przykład:** `allowed-tools: Bash(git add:*), Bash(git commit:*)`

### Claude memory
Notatki, które Claude zapisuje między sesjami: fakty o mnie i moje preferencje (np. „zawsze twórz wersję angielską”). Są przechowywane w plikach na moim komputerze, poza repozytorium.
- **Analogia z designu:** Jak dokument onboardingowy zespołu, który nowa osoba czyta przed rozpoczęciem pracy.
- **Przykład:** Poproś Claude'a: „Zapamiętaj, że…”

### CLAUDE.md
Plik w repozytorium z instrukcjami dla Claude'a. Claude czyta go na początku każdej sesji. W odróżnieniu od pamięci jest częścią repozytorium i każdy może go zobaczyć.
- **Analogia z designu:** Brief projektu albo zestaw zasad designu (design principles).
- **Przykład:** `cat CLAUDE.md` (wyświetl zawartość pliku)

### Co-Authored-By
Linia na końcu opisu commita, która oznacza współautora. GitHub pokazuje przy commicie wszystkich współautorów.
- **Analogia z designu:** Wymienienie współpracowników w case study.
- **Przykład:** `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`

### Permission modes
Tryby uprawnień, które decydują, ile Claude może zrobić bez pytania mnie o zgodę. Przełączam je skrótem **Shift + Tab**; aktualny tryb widać na dole ekranu.
- **manual:** pyta przed każdą edycją pliku i każdym poleceniem. *Kiedy używać:* gdy uczę się czegoś nowego i chcę widzieć i rozumieć każdy krok.
- **accept edits:** edytuje pliki bez pytania, ale przed uruchomieniem poleceń wciąż pyta. *Kiedy używać:* gdy ufam kierunkowi i nie chcę zatwierdzać każdej drobnej zmiany w plikach, ale chcę zachować kontrolę nad poleceniami.
- **plan:** tylko czyta i przygotowuje plan, niczego nie zmienia, dopóki go nie zatwierdzę. *Kiedy używać:* przy większych zadaniach z wieloma plikami i decyzjami (zob. [Plan mode](#plan-mode)).
- **auto:** działa samodzielnie, z zabezpieczeniami, i zatrzymuje się przed ryzykownymi działaniami. *Kiedy używać:* przy dobrze określonych, powtarzalnych zadaniach, gdy wiem już, jak ma wyglądać efekt.
- **Analogia z designu:** Poziomy samodzielności członka zespołu: od zatwierdzania każdej decyzji po pełne delegowanie zadania.
- **Przykład:** Shift + Tab → manual → accept edits → plan → …

### Permission prompt
Prośba o zgodę, którą Claude wyświetla przed działaniem, które nie zostało wcześniej dozwolone, np. przed uruchomieniem polecenia albo edycją pliku. Pokazuje dokładnie, co się stanie, a ja wybieram, czy się zgadzam (jednorazowo albo na stałe), czy odmawiam. Przed zatwierdzeniem warto przeczytać polecenie i wyjaśnienie Claude'a.
- **Analogia z designu:** Jak okno „Publish library changes?” w Figmie: ostatnia chwila, żeby sprawdzić, co wychodzi, zanim to się stanie.
- **Przykład:** „Do you want to proceed?” → Yes / Yes, and don't ask again / No

### Plan mode
Tryb uprawnień, w którym Claude najpierw tylko czyta pliki i przygotowuje plan. Mogę go zatwierdzić albo poprawić („Tell Claude what to change”), a zmiany zaczynają się dopiero po moim zatwierdzeniu. Warto go używać przy większych zadaniach z wieloma plikami i decyzjami, a nie przy drobnych poprawkach.
- **Analogia z designu:** Kickoff z zespołem: najpierw wspólnie uzgadniamy podejście, a dopiero potem ktoś zaczyna pracę.
- **Przykład:** Naciskaj Shift + Tab, aż zobaczysz „plan mode”, a potem opisz zadanie.

### settings.local.json
Plik ustawień Claude Code w folderze `.claude/` z moimi osobistymi, lokalnymi ustawieniami dla tego projektu, np. jakie polecenia Claude może uruchamiać bez pytania. Nie jest udostępniany, dlatego jest wpisany do `.gitignore`.
- **Analogia z designu:** Twoje osobiste preferencje aplikacji (np. poziom zoomu albo krok przesuwania strzałkami): wpływają na Twoją pracę, ale nie są częścią wspólnego pliku.
- **Przykład:** `.claude/settings.local.json`

### Skill (slash command)
Plik Markdown z instrukcjami krok po kroku, które Claude wykonuje, gdy wpiszę `/nazwa`. To nie program, tylko spisana procedura. Skille dla jednego projektu leżą w `.claude/skills/<nazwa>/SKILL.md` i są zapisywane w Gicie jak każdy inny plik.
- **Analogia z designu:** Jak master component w Figmie: raz projektujesz przepis, potem wstawiasz go jednym ruchem i zawsze działa tak samo.
- **Przykład:** `/dziennik` uruchamia `.claude/skills/dziennik/SKILL.md`

### Tools (Bash, Read, Edit, Write)
Narzędzia, czyli „ręce”, którymi Claude działa. Każdy krok na ekranie jest podpisany nazwą narzędzia i tym, na czym działa:
- **Bash:** uruchamia polecenie w terminalu (np. `git status`, `date`).
- **Read:** otwiera plik i czyta jego zawartość; niczego nie zmienia.
- **Edit:** zmienia fragment istniejącego pliku (zamienia stary tekst na nowy).
- **Write:** tworzy nowy plik albo nadpisuje cały plik.
- **Analogia z designu:** Jak narzędzia na pasku w Figmie (Move, Frame, Text, Pen): etykieta mówi, jaki rodzaj działania się dzieje, zanim spojrzysz na szczegóły.
- **Przykład:** `Bash(date +%F)` (sprawdź dzisiejszą datę) / `Read(JOURNAL.md)` (otwórz dziennik)

---

## Web development

### API
Uzgodniony zestaw „okienek”, przez które frontend może o coś poprosić backend: jakie adresy istnieją, co wysłać i co wróci. Frontend nie musi wiedzieć, jak backend działa w środku.
- **Analogia z designu:** Menu w restauracji: mówi, co możesz zamówić, ale nie pokazuje, jak kuchnia to przygotowuje.
- **Przykład:** `GET /api/trade-default/EURUSD` w demo deal ticket

### Backend
Część aplikacji działająca na serwerze: logika biznesowa, obliczenia, walidacja i dostęp do danych. Użytkownik nigdy nie widzi jej bezpośrednio.
- **Analogia z designu:** Kuchnia w restauracji: goście widzą tylko danie.
- **Przykład:** `projects/deal-ticket/backend/tradeDefault.js` (liczy Trade default)

### Database
Baza danych, czyli miejsce, w którym aplikacja trwale przechowuje dane. Zwykle to osobny program (np. PostgreSQL), a w demo to po prostu pliki JSON.
- **Analogia z designu:** Spiżarnia: tam leżą składniki, a kuchnia sięga po nie, gdy są potrzebne.
- **Przykład:** `projects/deal-ticket/data/trades.json`

### Dependency
Zależność, czyli cudzy, gotowy kod, z którego korzysta Twój projekt, np. biblioteka. Jest wpisana do `package.json` i pobierana przez `npm install`.
- **Analogia z designu:** Biblioteka komponentów podpięta do pliku, zamiast rysowania każdego przycisku samodzielnie.
- **Przykład:** `express` w demo deal ticket (jedyna zależność)

### Endpoint
Jeden konkretny adres w API razem z metodą HTTP, np. `GET /api/instruments`. Każdy endpoint robi jedną rzecz.
- **Analogia z designu:** Jedna pozycja w menu.
- **Przykład:** `app.get('/api/instruments', ...)` w `server.js`

### Express
Popularna, mała biblioteka dla Node.js do budowania serwerów i API. Pozwala powiedzieć w jednej linijce: „gdy ktoś poprosi o ten adres, zrób to”.
- **Analogia z designu:** Gotowy szablon ekranu: uzupełniasz tylko to, co specyficzne dla Twojego projektu.
- **Przykład:** `const app = express();`

### fetch
Wbudowana funkcja przeglądarki, która wysyła zapytanie HTTP do serwera i czeka na odpowiedź. Tak frontend rozmawia z API.
- **Analogia z designu:** Kelner, który zanosi zamówienie do kuchni i przynosi danie.
- **Przykład:** `fetch('/api/instruments')`

### Frontend
Część aplikacji działająca w przeglądarce, którą użytkownik widzi i klika: HTML (struktura), CSS (wygląd) i JavaScript (zachowanie).
- **Analogia z designu:** Ekrany z Twojego pliku Figma, tylko działające: wireframe (HTML), styl wizualny (CSS) i interakcje z prototypu (JavaScript).
- **Przykład:** `projects/deal-ticket/frontend/index.html`

### Function
Funkcja, czyli nazwany fragment kodu wielokrotnego użytku, który robi jedną rzecz. Może przyjmować dane wejściowe (parametry) i zwracać wynik. Nie musisz pamiętać każdej funkcji: jej nazwa zwykle mówi, co robi, a w edytorze możesz ją znaleźć przez Cmd + F albo Cmd + Shift + F.
- **Analogia z designu:** Komponent: raz zaprojektowany, z wyraźną nazwą, używany wszędzie tam, gdzie jest potrzebny.
- **Przykład:** W demo deal ticket `applySuggestion()` w `frontend/app.js` wypełnia formularz, a `calculateTradeDefault()` w `backend/tradeDefault.js` liczy sugestię.

### HTTP method (GET, POST)
Metoda HTTP, czyli rodzaj zapytania wysyłanego do serwera. **GET** znaczy „daj mi dane” i niczego nie zmienia, a **POST** znaczy „oto nowe dane, zapisz je”.
- **Analogia z designu:** Różnica między oglądaniem pliku (GET) a dodaniem do niego komentarza (POST).
- **Przykład:** `GET /api/instruments` / `POST /api/orders`

### HTTP status code
Kod odpowiedzi HTTP, czyli liczba, którą serwer odsyła z każdą odpowiedzią, żeby powiedzieć, jak poszło: **200** OK, **201** utworzono, **400** błędne zapytanie (np. błąd walidacji), **404** nie znaleziono.
- **Analogia z designu:** Jak stany komponentu: default, success, error, empty. Każdy wymaga osobnego projektu.
- **Przykład:** `/api/trade-default/USDJPY` zwraca `404`, więc szuflada pokazuje pusty stan.

### JavaScript
Język programowania stron internetowych: sprawia, że są interaktywne (reagują na kliknięcia, pobierają dane, zmieniają treść). **Uwaga:** Java to zupełnie inny język. Podobne są tylko nazwy, z historycznych powodów marketingowych.
- **Analogia z designu:** To, co zamienia statyczną makietę w klikalny prototyp.
- **Przykład:** `projects/deal-ticket/frontend/app.js`

### JSON
Tekstowy format zapisywania i przesyłania danych jako par „klucz: wartość” i list. Czytelny dla ludzi i dla programów, najczęstszy format odpowiedzi API.
- **Analogia z designu:** Jak design tokeny wyeksportowane do pliku: uporządkowane, nazwane wartości.
- **Przykład:** `{ "symbol": "EURUSD", "side": "buy", "size": 1 }`

### localhost and port
**localhost** to adres Twojego własnego komputera. **Port** to numer „drzwi”, przy których nasłuchuje konkretny program. `localhost:3000` znaczy „program na moim komputerze, który czeka przy drzwiach numer 3000”.
- **Analogia z designu:** Adres budynku (localhost) i numer biura w środku (port).
- **Przykład:** http://localhost:3000

### Median and mode
Mediana i dominanta, czyli proste statystyki użyte w demo jako heurystyka (reguła kciuka). **Dominanta** to najczęstsza wartość. **Mediana** to wartość środkowa po posortowaniu; w odróżnieniu od średniej jedna nietypowa wartość jej nie zawyża.
- **Analogia z designu:** W badaniach z użytkownikami dominanta to odpowiedź, którą dało najwięcej osób, a mediana mówi, co robi typowy użytkownik, nawet jeśli jedna osoba jest skrajna.
- **Przykład:** Wielkości 0.2, 0.2, 0.2, 0.3, 1.5 → mediana 0.2 (1.5 jej nie zmienia)

### Node.js
Program, który uruchamia JavaScript poza przeglądarką. To ten sam silnik JavaScriptu co w przeglądarce (V8 z Chrome'a), tylko uruchomiony bezpośrednio na komputerze. Dzięki temu można w nim pisać backend, w tym samym języku co frontend.
- **Analogia z designu:** Jak możliwość używania tych samych design tokenów w Figmie i w kodzie: jeden język, dwa miejsca.
- **Przykład:** `node backend/server.js`

### node_modules
Folder, do którego `npm install` wkłada pobrane zależności. Bywa duży i każdy może go odtworzyć, dlatego jest wpisany do `.gitignore` i nigdy nie trafia do commita.
- **Analogia z designu:** Jak wyeksportowane assety: nie trzymasz ich w historii wersji, skoro możesz je wygenerować z pliku źródłowego.
- **Przykład:** `node_modules/` w `.gitignore`

### npm
Menedżer pakietów dla Node.js: pobiera biblioteki z publicznego rejestru npm i uruchamia skrypty projektu.
- **Analogia z designu:** Jak biblioteka pluginów w Figma Community, z menedżerem, który instaluje dokładnie te wersje, których potrzebujesz.
- **Przykład:** `npm install` / `npm start`

### package.json and package-lock.json
**package.json** to „dowód osobisty” projektu: nazwa, komenda startowa i lista zależności. **package-lock.json** zapisuje dokładne zainstalowane wersje, żeby każdy dostał te same. Oba pliki trafiają do commita.
- **Analogia z designu:** package.json to lista bibliotek, z których korzysta plik, a package-lock.json przypina ich dokładne wersje.
- **Przykład:** `"start": "node backend/server.js"` w `package.json`

### Request and response
Zapytanie i odpowiedź. **Request** to wiadomość, którą frontend (albo curl) wysyła do serwera: adres, metoda HTTP i czasem dane. **Response** to to, co serwer odsyła: kod statusu i zwykle dane w formacie JSON. Każda interakcja z API to jeden request i jedna odpowiedź.
- **Analogia z designu:** Jak zlecenie projektowe i oddana makieta: jedna strona prosi, druga odpowiada.
- **Przykład:** Request `GET /api/trade-default/XAUUSD` → odpowiedź `200` z `{ "side": "buy", "size": 0.2, ... }`

### Server
Serwer, czyli program, który czeka na zapytania i na nie odpowiada. Podczas pracy działa na Twoim komputerze (localhost), a na produkcji na komputerze w centrum danych.
- **Analogia z designu:** Recepcjonista, który czeka na gości i kieruje każdego we właściwe miejsce.
- **Przykład:** `npm start` → „Deal Ticket demo running at http://localhost:3000”

### Validation (client and server)
Walidacja, czyli sprawdzanie, czy dane mają sens, np. czy stop loss jest poniżej ceny przy zleceniu Buy. We **frontendzie** daje użytkownikowi szybki feedback, a w **backendzie** chroni dane, bo każdy może ominąć przeglądarkę i wysłać zapytanie bezpośrednio.
- **Analogia z designu:** Błędy inline w formularzu (frontend) kontra finalna akceptacja przed wydaniem (backend): pierwsze pomaga użytkownikowi, drugie gwarantuje jakość.
- **Przykład:** `400 {"errors":["Stop loss must be below the entry price"]}`

---

## Trading

### Bid/ask
Każdy instrument ma dwie ceny. **Bid** to cena, po której możesz sprzedać, a **ask** to cena, po której możesz kupić. Ask jest zawsze trochę wyższy niż bid. Dlatego zlecenie Buy otwiera się po cenie ask, a Sell po cenie bid.
- **Analogia z designu:** Jak kantor, który pokazuje dwa kursy: „kupujemy” i „sprzedajemy”. Zawsze dostajesz ten mniej korzystny.
- **Przykład:** `GET /api/instruments` zwraca dla EUR/USD `"bid": 1.08493, "ask": 1.08503`; pola Bid i Ask nad przełącznikiem Buy/Sell pokazują je na żywo.

### Lot
Jednostka wielkości pozycji. Standardowy lot na rynku walutowym to 100 000 jednostek waluty bazowej (np. 100 000 EUR dla EUR/USD), więc 0.5 lota to połowa tej kwoty. Dla złota jeden lot to zwykle 100 uncji.
- **Analogia z designu:** Jak jednostka siatki (np. 8 px): nie wymiarujesz elementów dowolnymi liczbami, tylko wielokrotnościami ustalonej jednostki bazowej.
- **Przykład:** Pole „Size (lots)” i `"size": 1.0` w `data/trades.json`

### Pip
Standardowa jednostka małych ruchów ceny. Dla większości par walutowych to 4. miejsce po przecinku (0.0001), a dla par z jenem japońskim 2. miejsce (0.01). Dla złota brokerzy stosują różne konwencje; w demo to 0.1. Odległości stop lossa i take profitu podaje się zwykle w pipsach, bo „20 pipsów” znaczy to samo niezależnie od wysokości ceny.
- **Analogia z designu:** Jak krok przesuwania strzałkami w Figmie (1 px albo 10 px z Shiftem): stała jednostka ruchu, dzięki której łatwo porównać odległości.
- **Przykład:** `"pipSize": 0.0001` dla EUR/USD w `data/instruments.json`; `tradeDefault.js` mnoży `stopLossPips × pipSize`, żeby zamienić pipsy na cenę.

### Spread
Różnica między ceną ask a ceną bid. To ukryty koszt każdej transakcji: jeśli kupisz i od razu sprzedasz, tracisz właśnie spread.
- **Analogia z designu:** Jak odstęp między dwoma sąsiednimi elementami: mały, ale zawsze jest i trzeba go uwzględnić.
- **Przykład:** `"spread": 0.0001` dla EUR/USD w `data/instruments.json`, czyli 1 pips; `server.js` liczy bid i ask jako cenę środkową minus i plus połowę spreadu.

### Stop loss (SL)
Cena, po której stratna pozycja zamyka się automatycznie, żeby ograniczyć stratę. Przy Buy jest poniżej ceny wejścia, a przy Sell powyżej.
- **Analogia z designu:** Jak time box w design sprincie: z góry ustalasz, kiedy przerwać, żeby nie inwestować więcej w pomysł, który nie działa.
- **Przykład:** Pole „Stop loss”; `"stopLossPips": 20` w `data/trades.json`. Gdy jest po złej stronie ceny, API odpowiada `400 "Stop loss must be below the entry price"`.

### Take profit (TP)
Cena, po której zyskowna pozycja zamyka się automatycznie, żeby zabezpieczyć zysk. Przy Buy jest powyżej ceny wejścia, a przy Sell poniżej.
- **Analogia z designu:** Jak definition of done: z góry ustalacie, kiedy wynik jest wystarczająco dobry, żeby go wypuścić, zamiast szlifować go bez końca.
- **Przykład:** Pole „Take profit”; `"takeProfitPips": 40` w `data/trades.json`, które Trade default zamienia na cenę, np. `1.08903`.
