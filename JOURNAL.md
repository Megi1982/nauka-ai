🇵🇱 [Wersja polska](JOURNAL.pl.md)

# Learning journal

A short daily reflection on what I'm learning about software development with AI.
Each entry answers three questions: what I learned, what was difficult, and what I want to ask tomorrow.
The newest entry is at the top. Entries are added with the `/dziennik` command in Claude Code.

---

## 2026-11-23

### What I learned
How the backend works, using "Place Order" as an example. The frontend sends a request through the API to the server, using the JSON format. The backend checks that the request is valid and follows the rules; if it is, it saves it in the database, and then sends feedback back to the frontend as JSON, confirming the order. While this is happening, the frontend temporarily disables the "Place Order" button, so that another request isn't sent while the previous one is still being handled.

### What was difficult
Reading the code: the backend file tree and all those names (they're hard to remember). But I know there are 3 kinds of files on the server: the first receives the order from the frontend, the second calculates the business logic (the Trade default suggestion), and the third saves to the database. For "Place Order", the order's rules are checked by the first one, `server.js`.

### Question for tomorrow
Tomorrow, let's start with review questions about the backend, i.e. what we did today.

---

## 2026-11-19

### What I learned
I learned that every function has its own job and its own order. And that it's worth naming it well and describing what it does, so that it's readable in the code for someone else, e.g. a person doing a code review.

### What was difficult
Understanding the logic of the functions: which function calls what, and in what order.

### Question for tomorrow
The day after tomorrow, because I won't manage a lesson tomorrow. Let's start with a quiz and a few random questions to see whether the knowledge has settled in.

---

## 2026-11-17

### What I learned
Node.js runs JavaScript outside the browser, directly on the computer, so you can write both the frontend and the backend in the same language. A web application has 4 layers: 1) the frontend layer, 2) the API, which receives a request and passes it on, 3) the backend, where the logic lives, and 4) the database. JSON is the format for exchanging data between the frontend and the backend, e.g. responses to be displayed on the frontend.

### What was difficult
Reading the structure of the code: figuring out what each function does and finding them in the code. I still don't remember what those functions do.

### Question for tomorrow
No question.

---

## 2026-11-16

### What I learned
I now understand what skills are and why they're used. I understand that they're a tool for standardizing how a team works, and that they speed work up.

### What was difficult
I still don't fully know how to read what Claude shows: those commands, like Bash, etc. I haven't fully absorbed them yet, and I need to understand them better in the context of the work I'm doing, because a definition on its own, without context, doesn't help me. On top of that, I'm not confident when I give commands and approve them, so I prefer to double-check.

### Question for tomorrow
Can we do a short quiz on terms before each session, especially the ones that will come up in the next task? I want to know what I'm doing and why before I do it.

---
