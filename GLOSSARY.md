🇵🇱 [Wersja polska](GLOSSARY.pl.md)

# Glossary

Terms I've learned while studying software development with AI.
Terms are grouped by category and sorted alphabetically within each one.

- [Terminal](#terminal)
- [Git](#git)
- [GitHub](#github)
- [Documentation](#documentation)
- [Claude Code](#claude-code)
- [Web development](#web-development)
- [Trading](#trading)

---

## Terminal

### Background process
A program that keeps running "behind" the terminal, so you can do other things while it works. Typical for a server, which has to keep running the whole time you test the app in the browser.
- **Design analogy:** Like a file exporting in the background while you keep designing.
- **Example:** `npm start` run in the background to start the deal ticket server during a test.

### Command
An instruction you type into the terminal and confirm with Enter. It usually consists of a program name, options (starting with `-`) and arguments.
- **Design analogy:** Like a keyboard shortcut, but written out in full: precise and repeatable.
- **Example:** `ls -la` (list all files in the current folder, including hidden ones)

### Command Line Tools
Apple's package of developer tools for macOS. Among other things, it includes `git`. Without it, many terminal commands won't work.
- **Design analogy:** Like installing a font package before you can use those typefaces in your designs.
- **Example:** `xcode-select --install`

### curl
A terminal program that sends HTTP requests and prints the response. Useful for testing an API without opening a browser.
- **Design analogy:** Like testing a single component in isolation before placing it on a screen.
- **Example:** `curl localhost:3000/api/instruments`

### Home directory (~)
Your personal folder on the computer (`/Users/<your-name>`). The `~` sign is its shortcut.
- **Design analogy:** Like your personal Drafts space in Figma: your own place, separate from everyone else's.
- **Example:** `cd ~` (go to your home directory)

### PATH
A list of folders where the shell looks for programs when you type a command. If a program isn't in any of them, you get the error `command not found`.
- **Design analogy:** Like the libraries enabled in a Figma file: you can only use components from libraries that are switched on.
- **Example:** `echo $PATH`

### Shell (bash, zsh)
The program running inside the terminal that reads your commands and executes them. **zsh** is the default shell on macOS today; **bash** is an older, very popular one. Most commands work the same in both.
- **Design analogy:** The terminal is the window, the shell is the interpreter behind it, like a translator who turns your words into actions.
- **Example:** `echo $SHELL` (shows which shell you're using)

### Terminal
An app where you work with your computer through text commands instead of clicking.
- **Design analogy:** Like setting exact values in the properties panel instead of dragging with the mouse: less visual, but more precise and faster once you know it.
- **Example:** Open it with Cmd + Space, type "Terminal", press Enter.

---

## Git

### .gitignore
A file listing files and folders that Git should ignore: it won't track them or suggest adding them to a commit. Useful for private settings, passwords and temporary files.
- **Design analogy:** Like hiding helper layers before exporting: they're in your file, but they don't end up in the deliverable.
- **Example:** A line `.claude/settings.local.json` in the `.gitignore` file

### Branch
A separate line of work within a repository. You can experiment on a branch without touching the main version.
- **Design analogy:** Exactly like branching in Figma: you work on a copy, then merge it back.
- **Example:** `git switch -c new-idea` (create a new branch and switch to it)

### Commit
A saved snapshot of changes with a short description of what was done.
- **Design analogy:** A named version in Figma's version history.
- **Example:** `git commit -m "Add README"`

### Commit hash
The unique identifier of a commit: a long string of letters and digits, usually shortened to its first 7 characters (e.g. `62ed60c`).
- **Design analogy:** Like a version number, but generated automatically and guaranteed to be unique.
- **Example:** `git show 62ed60c` (show what that commit changed)

### Diff
A comparison that shows what changed between two versions: added lines (`+`) and removed lines (`-`).
- **Design analogy:** Like putting "before" and "after" screens side by side.
- **Example:** `git diff`

### Git
A version control system: a program that remembers the full history of changes to files in a project. It runs locally on your computer.
- **Design analogy:** Figma's version history, but for any kind of file and fully under your control.
- **Example:** `git --version`

### git add (staging)
Chooses which changes go into the next commit. The **staging area** is a kind of waiting room for changes.
- **Design analogy:** Like selecting frames before exporting: only the selected ones get exported.
- **Example:** `git add README.md`

### git log
Shows the commit history: who changed what, when, and why.
- **Design analogy:** The version history panel in Figma.
- **Example:** `git log --oneline`

### git status
Shows the current state of the repository: which branch you're on, which files have changed and which are staged.
- **Design analogy:** A quick look at the file's status before handoff: what's done and what's still in progress.
- **Example:** `git status`

### HEAD
A "you are here" marker that points to the commit you're currently working on.
- **Design analogy:** The version that's currently open in the version history.
- **Example:** `git show HEAD`

### main
The default, main branch of a repository: the "official" version of the project.
- **Design analogy:** The main file in Figma, as opposed to its branches.
- **Example:** `git switch main`

### Merge
Combining changes from one branch into another.
- **Design analogy:** Merging a Figma branch back into the main file.
- **Example:** `git merge new-idea`

### origin
The conventional name for the main remote. It's just a label for a long address.
- **Design analogy:** Naming a layer "Header" instead of "Rectangle 47".
- **Example:** `git remote -v` (list remotes and their addresses)

### pull
Downloads new changes from the remote and merges them into your local branch.
- **Design analogy:** Accepting library updates to get the latest version of components.
- **Example:** `git pull`

### push
Sends your local commits to the remote (e.g. to GitHub).
- **Design analogy:** Clicking "Publish" in a component library: your changes become visible to others.
- **Example:** `git push`

### remote
A copy of the repository on a server (e.g. on GitHub), saved in your repository as an address.
- **Design analogy:** A shared file in the cloud, as opposed to a file that lives only on your drive.
- **Example:** `git remote add origin git@github.com:Megi1982/nauka-ai.git`

### Repository
A project folder tracked by Git, together with its full change history (stored in a hidden `.git` folder).
- **Design analogy:** A Figma project with all its files and their history.
- **Example:** `git init` (turn the current folder into a repository)

### Untracked file
A file in the repository folder that Git doesn't track yet: it has never been added to a commit. `git status --short` marks it with `??`.
- **Design analogy:** A new frame on the canvas that isn't part of any published version yet.
- **Example:** `git status --short` → `?? GLOSSARY.md`

---

## GitHub

### Bug report
A description of an error that lets someone else reproduce and fix it. Format: **steps to reproduce**, **current behaviour**, **expected behaviour** and **risk** (what can go wrong for the user). On GitHub it usually lives in an issue.
- **Design analogy:** Like a good usability-test note: what the user did, what happened, what should have happened and why it matters.
- **Example:** "After switching the instrument, the old stop loss and take profit stay in the form" in the deal ticket demo.

### Code review
Another person reads your changes before they're merged, leaves comments and suggests improvements.
- **Design analogy:** A design critique or design review.
- **Example:** Done in a pull request on GitHub, in the "Files changed" tab.

### Fingerprint
A short "imprint" of a key, used to check that a key is the right one. The first time you connect to a server over SSH, you're asked to confirm its fingerprint.
- **Design analogy:** Like comparing HEX codes to make sure two colors are exactly the same.
- **Example:** `ssh-keygen -lf ~/.ssh/id_ed25519.pub` (show your public key's fingerprint)

### GitHub
An online service that hosts Git repositories and adds collaboration tools: pull requests, code review, issues. **Git** is the tool; **GitHub** is the place where you share your work.
- **Design analogy:** If Git is version history, GitHub is the Figma cloud with sharing and comments.
- **Example:** https://github.com/Megi1982/nauka-ai

### Pull request (PR)
A proposal on GitHub to merge changes from your branch into another one (usually `main`). It's the place for discussion and code review.
- **Design analogy:** Presenting a design branch for review before merging it into the main file.
- **Example:** `gh pr create` (using the GitHub CLI tool)

### SSH key (public and private)
A pair of files used to log in securely without a password. The **public key** is shared with GitHub; the **private key** stays on your computer and must never be shared.
- **Design analogy:** An office access card: the reader (GitHub) knows your card, and the card itself (private key) stays with you.
- **Example:** `ssh -T git@github.com` (check that GitHub recognizes your key)

---

## Documentation

### Frontmatter
A block of settings at the very top of a Markdown file, between two `---` lines. Programs read it as configuration; it isn't shown as part of the text.
- **Design analogy:** Like layer properties in Figma: invisible on the canvas, but they decide how the element behaves.
- **Example:** `---` / `name: dziennik` / `---` at the top of `SKILL.md`

### Markdown
A simple way to format text using characters: `#` for headings, `-` for list items, `**text**` for bold.
- **Design analogy:** Like text styles, but applied by typing symbols instead of choosing from a menu.
- **Example:** `## Heading` / `- list item` / `**bold**`

### README
The "front page" of a repository. GitHub automatically displays the `README.md` file on the repository's main page.
- **Design analogy:** The cover page of a Figma file: it's the first thing people see.
- **Example:** `README.md` (English) and `README.pl.md` (Polish) in this repository

---

## Claude Code

### allowed-tools
A setting in a skill's frontmatter that lists the commands Claude may run without asking me while that skill is running. Anything not on the list still needs my approval, which is why `git push` is deliberately left out of `/dziennik`.
- **Design analogy:** Like editor vs. viewer access: you grant exactly the rights a task needs, and keep publishing for yourself.
- **Example:** `allowed-tools: Bash(git add:*), Bash(git commit:*)`

### Claude memory
Notes Claude saves between sessions: facts about me and my preferences (e.g. "always create an English version"). They're stored in files on my computer, outside the repository.
- **Design analogy:** Like a team onboarding doc that a new collaborator reads before starting work.
- **Example:** Ask Claude: "Remember that…"

### CLAUDE.md
A file in the repository with instructions for Claude. Claude reads it at the start of every session. Unlike memory, it's part of the repository and anyone can see it.
- **Design analogy:** A project brief or a set of design principles.
- **Example:** `cat CLAUDE.md` (display the file's contents)

### Co-Authored-By
A line at the end of a commit message that marks a co-author. GitHub shows all co-authors next to the commit.
- **Design analogy:** Crediting collaborators in a case study.
- **Example:** `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`

### Permission modes
Settings that decide how much Claude can do without asking for my approval. I switch between them with the **Shift + Tab** shortcut; the current mode is shown at the bottom of the screen.
- **manual:** asks before every file edit and command. *When to use:* when I'm learning something new and want to see and understand every step.
- **accept edits:** edits files without asking, but still asks before running commands. *When to use:* when I trust the direction and don't want to approve every small file change, but still want control over commands.
- **plan:** only reads and prepares a plan; changes nothing until I approve it. *When to use:* for bigger tasks with many files and decisions (see [Plan mode](#plan-mode)).
- **auto:** acts independently, with safety checks, and stops before risky actions. *When to use:* for well-defined, repeatable tasks where I already know what the result should look like.
- **Design analogy:** Levels of autonomy for a team member, from approving every decision to fully delegating a task.
- **Example:** Shift + Tab → manual → accept edits → plan → …

### Permission prompt
The question Claude shows before it takes an action that isn't pre-approved, e.g. running a command or editing a file. It shows exactly what will happen, and I choose whether to allow it (once or permanently) or refuse. Before approving, it's worth reading the command and Claude's explanation of it.
- **Design analogy:** Like the "Publish library changes?" dialog in Figma: one last chance to check what's going out before it happens.
- **Example:** "Do you want to proceed?" → Yes / Yes, and don't ask again / No

### Permission rules (allow, ask)
Lists in `permissions` in a settings file that decide, command by command, what Claude may do. Commands on the **allow** list run without asking. Commands on the **ask** list always need my approval, even if a broader rule in `allow` would let them through. `:*` at the end means "with anything after it".
- **Design analogy:** Like locking a layer in Figma: nothing changes day to day, but it protects against an accidental edit.
- **Example:** `"ask": ["Bash(git push:*)"]` in `.claude/settings.local.json`, so Claude always asks before sending anything to GitHub.

### Plan mode
A permission mode in which Claude first only reads files and prepares a plan. I can approve the plan or correct it ("Tell Claude what to change"), and Claude only starts making changes after I approve it. Worth using for bigger tasks with many files and decisions, not for small fixes.
- **Design analogy:** A kickoff with the team: first we agree on the approach together, and only then does someone start the work.
- **Example:** Press Shift + Tab until you see "plan mode", then describe the task.

### settings.local.json
A Claude Code settings file in the `.claude/` folder that stores my personal, local settings for this project, e.g. which commands Claude may run without asking. It isn't shared, so it's listed in `.gitignore`.
- **Design analogy:** Your personal app preferences (like zoom level or nudge amount): they affect how you work, but they aren't part of the shared file.
- **Example:** `.claude/settings.local.json`

### Skill (slash command)
A Markdown file with step-by-step instructions that Claude follows when I type `/name`. It isn't a program, just a written-down procedure. Skills for one project live in `.claude/skills/<name>/SKILL.md` and are saved in Git like any other file.
- **Design analogy:** Like a master component in Figma: you design the recipe once, then insert it in one move and it always works the same way.
- **Example:** `/dziennik` runs `.claude/skills/dziennik/SKILL.md`

### Tokens
The units in which AI counts text: a token is usually a piece of a word, a short word or a punctuation mark. Everything in a conversation (my messages, Claude's answers, files Claude has read) is counted in tokens and fills the context, which has a size limit. `/clear` clears the conversation context so you can start a new topic from scratch.
- **Design analogy:** Like the canvas of an artboard: everything you put on it takes up space, and `/clear` is starting with an empty frame.
- **Example:** `/clear` before a new, unrelated task

### Tools (Bash, Read, Edit, Write)
The "hands" Claude uses to act. Each step on screen is labeled with the tool's name and what it's applied to:
- **Bash:** runs a command in the terminal (e.g. `git status`, `date`).
- **Read:** opens a file and reads its contents; changes nothing.
- **Edit:** changes a fragment of an existing file (replaces old text with new).
- **Write:** creates a new file or overwrites a whole file.
- **Design analogy:** Like the tools in Figma's toolbar (Move, Frame, Text, Pen): the label tells you what kind of action is happening before you look at the details.
- **Example:** `Bash(date +%F)` (check today's date) / `Read(JOURNAL.md)` (open the journal)

---

## Web development

### API
The agreed set of "windows" through which the frontend can ask the backend for something: which addresses exist, what to send and what comes back. The frontend doesn't need to know how the backend works inside.
- **Design analogy:** A restaurant menu: it lists what you can order, without showing how the kitchen makes it.
- **Example:** `GET /api/trade-default/EURUSD` in the deal ticket demo

### Backend
The part of the application that runs on the server: business logic, calculations, validation and access to data. The user never sees it directly.
- **Design analogy:** The kitchen in a restaurant: guests only see the dish.
- **Example:** `projects/deal-ticket/backend/tradeDefault.js` (calculates the Trade default)

### Browser cache and hard refresh
The **browser cache** is the browser's local store of downloaded files (e.g. JavaScript), kept so pages load faster. Because of it, after a code change the browser may still show the old version. A **hard refresh** reloads the page and skips the cache.
- **Design analogy:** Like a stale thumbnail of a Figma file: the file has changed, but the preview still shows the old version until it's regenerated.
- **Example:** Cmd + Shift + R in Chrome on a Mac

### Business logic
The rules and calculations that make the application do its actual job, as opposed to receiving requests or storing data. It's worth keeping it in a separate file, so it can be changed and tested without touching the rest.
- **Design analogy:** Like the design principles behind a product: they decide what happens, whatever tool or screen you apply them in.
- **Example:** `backend/tradeDefault.js` calculates the Trade default from trade history (most frequent side, median size, SL and TP).

### Data access layer
The one part of the application that reads and writes the database. The rest of the code asks it for data instead of opening files itself, so if the database ever changed (e.g. to PostgreSQL), only this layer would need to change.
- **Design analogy:** Like a single source of truth in a component library: every file links to it, so a change is made in one place.
- **Example:** `backend/db.js` with `getInstruments()`, `getTrades()` and `addOrder()`

### Database
The place where an application stores data permanently. Usually a dedicated program (e.g. PostgreSQL); in the demo it's just JSON files.
- **Design analogy:** The pantry: ingredients are stored there and the kitchen fetches them when needed.
- **Example:** `projects/deal-ticket/data/trades.json`

### Dependency
Someone else's ready-made code that your project uses, e.g. a library. Listed in `package.json` and downloaded with `npm install`.
- **Design analogy:** A component library you link to your file instead of drawing every button yourself.
- **Example:** `express` in the deal ticket demo (its only dependency)

### Endpoint
One specific address in an API, together with its HTTP method, e.g. `GET /api/instruments`. Each endpoint does one job.
- **Design analogy:** One item on the menu.
- **Example:** `app.get('/api/instruments', ...)` in `server.js`

### Event listener
A function "attached" to an event, such as a click, a dropdown change or a form submit. The function doesn't run on its own: the browser calls it when that event happens.
- **Design analogy:** An interaction in a Figma prototype: "On click → Navigate to…".
- **Example:** `els.instrument.addEventListener('change', onInstrumentChange);` in `frontend/app.js`

### Express
A popular, small Node.js library for building servers and APIs. It lets you say in one line: "when someone asks for this address, do this".
- **Design analogy:** A ready-made screen template: you only fill in what's specific to your project.
- **Example:** `const app = express();`

### fetch
A built-in browser function that sends an HTTP request to the server and waits for the response. This is how the frontend talks to the API.
- **Design analogy:** The waiter carrying an order to the kitchen and bringing back the dish.
- **Example:** `fetch('/api/instruments')`

### Frontend
The part of the application that runs in the browser and that the user sees and clicks: HTML (structure), CSS (look) and JavaScript (behaviour).
- **Design analogy:** The screens from your Figma file, but working: wireframe (HTML), visual style (CSS) and prototype interactions (JavaScript).
- **Example:** `projects/deal-ticket/frontend/index.html`

### Function
A named, reusable piece of code that does one job. It can take inputs (parameters) and give back a result. You don't need to remember every function: its name usually says what it does, and you can search for it with Cmd + F or Cmd + Shift + F in the editor.
- **Design analogy:** A component: designed once, given a clear name, and used wherever it's needed.
- **Example:** In the deal ticket demo, `applySuggestion()` in `frontend/app.js` fills in the form, and `calculateTradeDefault()` in `backend/tradeDefault.js` calculates the suggestion.

### Function call
Running a function by writing its name with brackets, e.g. `renderPrices()`. A function can call other functions, so one call can start a whole chain in a set order. To follow the logic, start from the entry point and read which function calls which.
- **Design analogy:** Like a user flow: one screen leads to the next in a defined order, and you read it from the starting screen.
- **Example:** `init()` → `onInstrumentChange()` → `renderPrices()`, `fetchTradeDefault()`, `renderSuggestion()`, `setDrawer(true)` in `frontend/app.js`

### HTTP method (GET, POST)
The type of request sent to the server. **GET** means "give me data" and changes nothing; **POST** means "here is new data, save it".
- **Design analogy:** The difference between viewing a file (GET) and adding a comment to it (POST).
- **Example:** `GET /api/instruments` / `POST /api/orders`

### HTTP status code
A number the server sends back with every response to say how it went: **200** OK, **201** created, **400** bad request (e.g. a validation error), **404** not found.
- **Design analogy:** Like the states of a component: default, success, error, empty. Each one needs its own design.
- **Example:** `/api/trade-default/USDJPY` returns `404`, so the drawer shows an empty state.

### JavaScript
The programming language of web pages: it makes them interactive (reacting to clicks, fetching data, changing content). **Note:** Java is a completely different language. Only the names are similar, for historical marketing reasons.
- **Design analogy:** What turns a static mockup into a clickable prototype.
- **Example:** `projects/deal-ticket/frontend/app.js`

### JSON
A text format for storing and sending data as "key: value" pairs and lists. Readable for both people and programs, and the most common format for API responses.
- **Design analogy:** Like design tokens exported to a file: structured, named values.
- **Example:** `{ "symbol": "EURUSD", "side": "buy", "size": 1 }`

### localhost and port
**localhost** is the address of your own computer. A **port** is the number of a "door" on it where a specific program listens. `localhost:3000` means "the program on my computer that listens on door 3000".
- **Design analogy:** The building address (localhost) and the office number inside it (port).
- **Example:** http://localhost:3000

### Median and mode
Simple statistics used in the demo as a heuristic (a rule of thumb). **Mode** is the most frequent value. **Median** is the middle value after sorting; unlike an average, a single unusual value doesn't skew it.
- **Design analogy:** In user research, the mode is the answer most people gave, and the median tells you what a typical user does, even if one person is extreme.
- **Example:** Sizes 0.2, 0.2, 0.2, 0.3, 1.5 → median 0.2 (the 1.5 doesn't change it)

### Middleware
A function the server runs on every request before it reaches the right endpoint. Each middleware does one preparatory job, such as reading JSON or serving files, and then passes the request on.
- **Design analogy:** Like the steps a design goes through before review: a spellcheck and a contrast check, applied the same way to every file.
- **Example:** `app.use(express.json())` (reads the JSON body into `req.body`) and `app.use(express.static(...))` (serves the frontend files) in `server.js`

### Node.js
A program that runs JavaScript outside the browser. It's the same JavaScript engine that runs in the browser (V8 from Chrome), just started directly on the computer. That's why you can write a backend in it, in the same language as the frontend.
- **Design analogy:** Like being able to use the same design tokens both in Figma and in code: one language, two places.
- **Example:** `node backend/server.js`

### node_modules
The folder where `npm install` puts downloaded dependencies. It can be large and anyone can recreate it, so it's listed in `.gitignore` and never committed.
- **Design analogy:** Like exported assets: you don't keep them in version history when you can regenerate them from the source file.
- **Example:** `node_modules/` in `.gitignore`

### npm
The package manager for Node.js: it downloads libraries from the public npm registry and runs project scripts.
- **Design analogy:** Like the Figma Community plugin library, with a manager that installs exactly the versions you need.
- **Example:** `npm install` / `npm start`

### package.json and package-lock.json
**package.json** is the project's "ID card": its name, start command and list of dependencies. **package-lock.json** records the exact versions that were installed, so everyone gets the same ones. Both are committed.
- **Design analogy:** package.json is the list of libraries a file uses; package-lock.json pins their exact versions.
- **Example:** `"start": "node backend/server.js"` in `package.json`

### Pure function
A function that only takes data in and gives a result back. It doesn't read files, doesn't know about HTTP and changes nothing outside itself, so the same inputs always give the same result. That makes it easy to test and to reuse.
- **Design analogy:** Like a component in a design system: the same props always give the same look, wherever you place it.
- **Example:** `calculateTradeDefault(instrument, trades, price)` in `backend/tradeDefault.js`

### Request and response
A **request** is a message the frontend (or curl) sends to the server: an address, an HTTP method and sometimes data. A **response** is what the server sends back: a status code and usually data in JSON. Every interaction with an API is one request and one response.
- **Design analogy:** Like a design request and a delivered mockup: one side asks, the other answers.
- **Example:** Request `GET /api/trade-default/XAUUSD` → response `200` with `{ "side": "buy", "size": 0.2, ... }`

### Server
A program that waits for requests and answers them. During development it runs on your own computer (localhost); in production it runs on a computer in a data center.
- **Design analogy:** A receptionist who waits for visitors and directs each one to the right place.
- **Example:** `npm start` → "Deal Ticket demo running at http://localhost:3000"

### State
What the application "remembers" right now: what's selected, what was fetched, what's shown. The screen is drawn from the state. A common bug is state that isn't reset when the context changes, such as old form values after switching the instrument.
- **Design analogy:** The current variant and properties of a component: change them and the component looks different.
- **Example:** `const state = { instruments: [], side: 'buy', suggestion: null };` in `frontend/app.js`

### Validation (client and server)
Checking that data makes sense, e.g. a stop loss below the price for a Buy order. In the **frontend** it gives quick feedback to the user; in the **backend** it protects the data, because anyone can bypass the browser and send a request directly.
- **Design analogy:** Inline form errors (frontend) vs. final approval before release (backend): the first helps the user, the second guarantees quality.
- **Example:** `400 {"errors":["Stop loss must be below the entry price"]}`

---

## Trading

### Bid/ask
Every instrument has two prices. **Bid** is the price at which you can sell; **ask** is the price at which you can buy. Ask is always a little higher than bid. That's why a Buy order opens at the ask and a Sell order opens at the bid.
- **Design analogy:** Like a currency exchange booth showing two rates: "we buy" and "we sell". You always get the less favourable one.
- **Example:** `GET /api/instruments` returns `"bid": 1.08493, "ask": 1.08503` for EUR/USD; the Bid and Ask boxes above the Buy/Sell toggle show them live.

### Lot
The unit of position size. A standard lot in forex is 100,000 units of the base currency (e.g. 100,000 EUR for EUR/USD), so 0.5 lots is half of that. For gold, one lot is usually 100 ounces.
- **Design analogy:** Like a grid unit (e.g. 8 px): you don't size elements in arbitrary numbers, but in multiples of an agreed base unit.
- **Example:** The "Size (lots)" field and `"size": 1.0` in `data/trades.json`

### Pip
The standard unit for small price moves. For most currency pairs it's the 4th decimal place (0.0001); for pairs with the Japanese yen it's the 2nd (0.01). For gold, brokers use different conventions; the demo uses 0.1. Stop loss and take profit distances are usually given in pips, because a number like "20 pips" means the same thing whatever the price.
- **Design analogy:** Like a nudge step in Figma (1 px or 10 px with Shift): a fixed unit of movement that makes distances easy to compare.
- **Example:** `"pipSize": 0.0001` for EUR/USD in `data/instruments.json`; `tradeDefault.js` multiplies `stopLossPips × pipSize` to turn pips into a price.

### Spread
The difference between the ask and the bid price. It's the hidden cost of every trade: when you buy and sell immediately, you lose the spread.
- **Design analogy:** Like the gap between two adjacent elements: small, but always there, and you have to account for it.
- **Example:** `"spread": 0.0001` for EUR/USD in `data/instruments.json`, so 1 pip; `server.js` calculates bid and ask as the mid price minus and plus half of the spread.

### Stop loss (SL)
A price at which a losing position is closed automatically, to limit the loss. For a Buy it's below the entry price; for a Sell it's above.
- **Design analogy:** Like a time box in a design sprint: you decide upfront when to stop, so you don't sink more into an idea that isn't working.
- **Example:** The "Stop loss" field; `"stopLossPips": 20` in `data/trades.json`. If it's on the wrong side, the API answers `400 "Stop loss must be below the entry price"`.

### Take profit (TP)
A price at which a winning position is closed automatically, to lock in the profit. For a Buy it's above the entry price; for a Sell it's below.
- **Design analogy:** Like a definition of done: you agree upfront when the result is good enough to ship, instead of polishing forever.
- **Example:** The "Take profit" field; `"takeProfitPips": 40` in `data/trades.json`, which the Trade default turns into a price such as `1.08903`.
