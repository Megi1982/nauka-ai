🇵🇱 [Wersja polska](GLOSSARY.pl.md)

# Glossary

Terms I've learned while studying software development with AI.
Terms are grouped by category and sorted alphabetically within each one.

- [Terminal](#terminal)
- [Git](#git)
- [GitHub](#github)
- [Documentation](#documentation)
- [Claude Code](#claude-code)

---

## Terminal

### Command
An instruction you type into the terminal and confirm with Enter. It usually consists of a program name, options (starting with `-`) and arguments.
- **Design analogy:** Like a keyboard shortcut, but written out in full: precise and repeatable.
- **Example:** `ls -la` (list all files in the current folder, including hidden ones)

### Command Line Tools
Apple's package of developer tools for macOS. Among other things, it includes `git`. Without it, many terminal commands won't work.
- **Design analogy:** Like installing a font package before you can use those typefaces in your designs.
- **Example:** `xcode-select --install`

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
Settings that decide how much Claude can do without asking for my approval:
- **manual:** asks before every file edit and command.
- **accept edits:** edits files without asking, but still asks before running commands.
- **plan:** only reads and prepares a plan; changes nothing until I approve it.
- **auto:** acts independently, with safety checks, and stops before risky actions.
- **Design analogy:** Levels of autonomy for a team member, from approving every decision to fully delegating a task.
- **Example:** Press Shift + Tab in Claude Code to switch modes.

### settings.local.json
A Claude Code settings file in the `.claude/` folder that stores my personal, local settings for this project, e.g. which commands Claude may run without asking. It isn't shared, so it's listed in `.gitignore`.
- **Design analogy:** Your personal app preferences (like zoom level or nudge amount): they affect how you work, but they aren't part of the shared file.
- **Example:** `.claude/settings.local.json`

### Skill (slash command)
A Markdown file with step-by-step instructions that Claude follows when I type `/name`. It isn't a program, just a written-down procedure. Skills for one project live in `.claude/skills/<name>/SKILL.md` and are saved in Git like any other file.
- **Design analogy:** Like a master component in Figma: you design the recipe once, then insert it in one move and it always works the same way.
- **Example:** `/dziennik` runs `.claude/skills/dziennik/SKILL.md`
