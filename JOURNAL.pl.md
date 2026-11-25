🇬🇧 [English version](JOURNAL.md)

# Dziennik nauki

Krótka, codzienna refleksja z nauki software developmentu z pomocą AI.
Każdy wpis odpowiada na trzy pytania: czego się nauczyłam, co było trudne i o co chcę zapytać jutro.
Najnowszy wpis jest na górze. Wpisy dodaję komendą `/dziennik` w Claude Code.

---

## 2026-11-25

### Czego się nauczyłam
Że testy Continuous Integration są automatycznie przeprowadzane na GitHubie i odpalane każdorazowo, gdy jakiś dev wyśle pull requesta. Pomaga to chronić main, podczas gdy zespół wspólnie pracuje nad kodem, zabezpieczając go. Dodatkowo dobrze zrobić specyfikę przypadków, jakie chcemy pokryć testami: muszą to być konkretne reguły.

### Co było trudne
Jak zwykle dużo linijek kodu. Nie jestem w stanie takiej ilości przeczytać i przetworzyć.

### Pytanie na jutro
Aby zrobić sprawdzian z wiedzy dzisiejszej o testach.

---

## 2026-11-24

### Czego się nauczyłam
Developerzy pracują na osobnych branchach i jak chcą dodać jakąś poprawkę do main, muszą zrobić pull request. Trzeba dobrze opisać problem, jaki naprawiają, aby inny developer sprawdził, jaki problem dany pull request rozwiąże. Trzeba też po merge'u do main usuwać branch, ale wszystko jest odwracalne, dlatego nie należy bać się zmian. Funkcja git pull też jest przydatna, bo pozwala zsynchronizować wersję lokalną z najnowszym stanem main na GitHubie.

### Co było trudne
Czytanie kodu i wyłapywanie istotnych detali. Dużo tych linii kodu i ciężko czasem wyłapać i przeczytać wszystko.

### Pytanie na jutro
Czy pamiętam, jak przejść cały cykl: branch → poprawka → pull request → merge → pull → usunięcie brancha?

---

## 2026-11-23

### Czego się nauczyłam
Jak działa backend na przykładzie „Place Order”. Frontend wysyła zapytanie poprzez API do serwera, używając formatu JSON. Backend sprawdza poprawność zapytania i reguły, jeśli jest to poprawne, zapisuje w bazie danych, a następnie za pomocą JSON odsyła informację zwrotną na frontend z potwierdzeniem zlecenia. Podczas trwania tej operacji frontend tymczasowo blokuje przycisk „Place Order”, aby nie poszło kolejne zapytanie, gdy poprzednie jest jeszcze obsługiwane.

### Co było trudne
Czytanie kodu: drzewka backendu i te wszystkie nazwy (ciężko je zapamiętać). Ale wiem, że na serwerze są 3 rodzaje plików: pierwszy odbiera zlecenie z frontendu, drugi liczy logikę biznesową (sugestię Trade default), a trzeci zapisuje w bazie danych. Reguły zlecenia przy „Place Order” sprawdza ten pierwszy, czyli `server.js`.

### Pytanie na jutro
Jutro zacznijmy od pytań z review backendu, czyli tego, co dziś zrobiliśmy.

---

## 2026-11-19

### Czego się nauczyłam
Nauczyłam się, że każda funkcja ma swoje zadanie i kolejność. Że warto dobrze ją nazwać i opisać jej funkcję, aby było to czytelne w kodzie dla kogoś innego, kto będzie robił np. code review.

### Co było trudne
Zrozumienie logiki funkcji: która funkcja co wywołuje i w jakiej kolejności.

### Pytanie na jutro
Pojutrze, bo jutro nie dam rady zrobić lekcji. Zacznijmy od sprawdzianu i kilku randomowych pytań, aby zobaczyć, czy wiedza mi się jakoś ułożyła.

---

## 2026-11-17

### Czego się nauczyłam
Node.js uruchamia JavaScript poza przeglądarką, bezpośrednio na komputerze, dzięki czemu w tym samym języku można napisać frontend i backend. Aplikacja webowa ma 4 warstwy: 1) warstwa frontendowa, 2) API, które przyjmuje request i przekazuje go dalej, 3) backend, w którym jest zaszyta logika, oraz 4) baza danych. JSON to format wymiany danych między frontendem a backendem, np. odpowiedzi do wyświetlenia na frontendzie.

### Co było trudne
Czytanie struktury kodu: ogarnięcie, co robi która funkcja, i znalezienie ich w kodzie. Nadal nie pamiętam, co robią te funkcje.

### Pytanie na jutro
Brak pytania.

---

## 2026-11-16

### Czego się nauczyłam
Rozumiem już, czym są skille i po co się je stosuje. Rozumiem, że są narzędziem do standaryzacji pracy w zespole i przyspieszają pracę.

### Co było trudne
Nadal nie do końca wiem, jak czytać to, co pokazuje Claude: te polecenia, jak Bash itp. Nie mam ich jeszcze przyswojonych do końca i muszę je bardziej rozumieć w kontekście pracy, którą wykonuję, bo sama definicja bez kontekstu nic mi nie daje. Dodatkowo nie mam pewności, kiedy daję komendy i je zatwierdzam, więc wolę się upewnić dwa razy.

### Pytanie na jutro
Czy możemy przed każdą sesją zrobić mały test z pojęć, szczególnie z tych, które pojawią się w kolejnym zadaniu? Chcę wiedzieć, co robię i po co, zanim to zrobię.

---
