---
name: dziennik
description: Daily learning journal entry. Asks three reflection questions, saves the entry in JOURNAL.md (EN) and JOURNAL.pl.md (PL), updates the glossary, commits, and pushes after approval.
disable-model-invocation: true
allowed-tools: Bash(date:*), Bash(git add:*), Bash(git commit:*), Bash(git status:*), Bash(git diff:*), Bash(git log:*)
---

# /dziennik: codzienny wpis do dziennika nauki

Prowadzisz ze mną krótką, codzienną refleksję z nauki. Przy każdym kroku krótko tłumacz po polsku, co robisz i dlaczego (zgodnie z `CLAUDE.md`).

## 1. Data

Pobierz dzisiejszą datę komendą `date +%F` (format `RRRR-MM-DD`). Nie zgaduj daty z pamięci.

## 2. Trzy pytania, po kolei

Zadaj każde pytanie **w osobnej wiadomości** i poczekaj na moją odpowiedź, zanim zadasz następne:

1. **Czego się dziś nauczyłaś?**
2. **Co było trudne?**
3. **Jakie masz pytanie na jutro?**

Nie dopisuj od siebie treści, której nie powiedziałam. Jeśli odpowiedź jest niejasna, dopytaj.

## 3. Zapis wpisu w obu wersjach językowych

Pliki: `JOURNAL.md` (angielski, główny) i `JOURNAL.pl.md` (polski).

- W wersji PL zostaw moje słowa; popraw tylko literówki i interpunkcję.
- W wersji EN zapisz wierne, naturalne tłumaczenie.
- Najnowszy wpis wstaw **na górze**, zaraz pod linią `---`, która kończy nagłówek pliku.
- Jeśli wpis z dzisiejszą datą już istnieje, dopisz nowe punkty do jego sekcji, zamiast tworzyć drugi nagłówek z tą samą datą.

Format (EN):

```markdown
## RRRR-MM-DD

### What I learned
…

### What was difficult
…

### Question for tomorrow
…

---
```

Format (PL):

```markdown
## RRRR-MM-DD

### Czego się nauczyłam
…

### Co było trudne
…

### Pytanie na jutro
…

---
```

## 4. Słowniczek

Przejrzyj mój wpis i całą dzisiejszą sesję pod kątem nowych pojęć technicznych. Porównaj je z `GLOSSARY.md` i `GLOSSARY.pl.md`.

- Brakujące pojęcia dodaj do **obu** plików, we właściwej kategorii, alfabetycznie.
- Zachowaj istniejący format: krótki opis, **Design analogy / Analogia z designu**, **Example / Przykład**.
- Pokaż mi listę dodanych pojęć albo napisz, że nowych nie ma.

## 5. Commit

1. Pokaż `git status` i `git diff`, żebym widziała zmiany.
2. Dodaj (`git add`) tylko zmienione pliki dziennika i słowniczka, wymieniając je z nazwy (bez `git add .`).
3. Zrób commit z wiadomością po polsku, np. `Dodaj wpis do dziennika z RRRR-MM-DD`, zakończoną linią:
   `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`

## 6. Push: tylko za moją zgodą

1. Pokaż mi gotowy wpis (PL i EN) oraz hash commita.
2. Uruchom `git push origin main`. Claude Code poprosi mnie o zgodę, bo `git push` celowo nie jest w `allowed-tools`.
3. Jeśli odmówię, commit zostaje lokalnie. Zapytaj, co chcę poprawić.
4. Jeśli push się nie uda, pokaż błąd i wyjaśnij go prostym językiem. Nie próbuj go obchodzić (np. `--force`).
5. Na koniec krótko podsumuj, co zostało zapisane i wysłane.
