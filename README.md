# License Path: Real Estate Pre-License Study Dashboard

An interactive study dashboard for people preparing for a U.S. real estate salesperson exam, set up for **Georgia** by default.

## How to open it

**Double-click `index.html`.** It opens in any web browser (Chrome, Safari, Edge, Firefox). You do not need to install anything, and it works offline apart from the fonts. Your progress is saved in that browser on that device.

## What's inside

- **20 modules** following the topic scope of a standard pre-license curriculum. Each has learning objectives, a plain-language lesson, key terms with tap-to-define glossary popups, a real-world scenario, a "Common exam traps" box, flashcards and a 10-question quiz with explanations.
- **Dashboard** with course progress, modules completed, average quiz score and a "Continue where you left off" button.
- **Master glossary** you can search, built from every module's key terms.
- **Math calculators** for commission split, loan-to-value, monthly mortgage payment, property tax, square footage and cap rate. Each one shows its worked steps.
- **100-question timed practice exam** drawn from all modules, with a score breakdown by topic and a review screen.
- **Weak-area tracker** that recommends modules based on the questions you miss.
- **Study planner** that builds a weekly schedule from your exam date.
- Light and dark mode, plus a phone layout with a bottom menu.

All lesson text and questions are original. They follow the general topic order of common pre-license textbooks but do not reproduce any copyrighted material.

> **Study aid only.** This does not replace a state-approved pre-license course. Licensing rules change, so confirm current requirements with the Georgia Real Estate Commission (grec.state.ga.us).

## For editing (optional)

The page is built from the files in `src/`:

| File | Contains |
| --- | --- |
| `src/content-1.js` … `src/content-4.js` | Module text, terms, scenarios, traps and quizzes |
| `src/app.js` | Dashboard features (quizzes, exam, planner, calculators) |
| `src/style.css` | Colors, fonts and layout |
| `src/shell.html` | Page frame (sidebar, header, glossary popup) |

After editing a file in `src/`, rebuild `index.html` by running `bash build.sh` in this folder.
