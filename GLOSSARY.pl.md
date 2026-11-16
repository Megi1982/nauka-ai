🇬🇧 [English version](GLOSSARY.md)

# Słowniczek

Pojęcia, które poznałam, ucząc się software developmentu z AI.
Pojęcia są pogrupowane w kategorie, a w każdej kategorii ułożone alfabetycznie.

- [Terminal](#terminal)
- [Git](#git)
- [GitHub](#github)
- [Dokumentacja](#dokumentacja)
- [Claude Code](#claude-code)

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
