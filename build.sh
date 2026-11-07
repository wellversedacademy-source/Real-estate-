#!/usr/bin/env bash
# Combines the files in src/ into one self-contained page: index.html
# Run from this folder with:  bash build.sh
set -euo pipefail
cd "$(dirname "$0")"

HEAD='<title>License Path</title>
<meta name="claude:viewport-fit-sides" content="cover">
<meta name="description" content="Interactive real estate pre-license study dashboard: 20 modules, quizzes, flashcards, math calculators and a timed practice exam.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=Public+Sans:wght@400;500;600;700&family=Zilla+Slab:wght@500;600;700&display=swap">'

body() {
  echo '<style>'; cat src/style.css; echo '</style>'
  cat src/shell.html
  echo '<script>'
  echo 'const MODULES = []; const M = m => MODULES.push(m);'
  for f in src/content-*.js; do cat "$f"; echo; done
  cat src/app.js
  echo '</script>'
}

# 1) Standalone page: open index.html in any browser.
{
  echo '<!doctype html>'
  echo '<html lang="en"><head><meta charset="utf-8">'
  echo '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">'
  echo "$HEAD"
  echo '</head><body>'
  body
  echo '</body></html>'
} > index.html

echo "Built index.html ($(wc -c < index.html) bytes)"
