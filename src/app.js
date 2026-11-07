/* ===================== License Path: application logic ===================== */
'use strict';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const pad2 = n => String(n).padStart(2, '0');
const money = (n, d = 2) => (isFinite(n) ? n : 0).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: d, maximumFractionDigits: d });
const num = (n, d = 0) => (isFinite(n) ? n : 0).toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const PASS = 70;
const EXAM_QS = 100;
const EXAM_MIN = 150;

MODULES.sort((a, b) => a.id - b.id);
const MOD = id => MODULES.find(m => m.id === +id);

/* ---------- Glossary index ---------- */
const GLOSS = new Map();
for (const m of MODULES) for (const [t, d] of m.terms) { const k = t.toLowerCase(); if (!GLOSS.has(k)) GLOSS.set(k, { t, d, m: m.id }); }
function rich(s) {
  // [[Term]] or [[Glossary Term|text shown]]
  return s.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, key, shownText) => {
    const shown = shownText || key;
    const k = key.replace(/&#39;/g, "'").replace(/&amp;/g, '&').toLowerCase();
    if (!GLOSS.has(k)) { console.warn('Missing glossary term: ' + k); return shown; }
    return `<button type="button" class="gl" data-term="${esc(k)}">${shown}</button>`;
  });
}

/* ---------- Saved progress (browser storage) ---------- */
const KEY = 'licensePath.v1';
const fresh = () => ({ mods: {}, hist: {}, missed: {}, last: null, exams: [], plan: { date: '', hours: 8 }, theme: null, run: null });
let S = fresh();
try { const raw = JSON.parse(localStorage.getItem(KEY)); if (raw && typeof raw === 'object') S = Object.assign(fresh(), raw); } catch (e) { /* storage unavailable */ }
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* storage unavailable */ } }
const mp = id => (S.mods[id] = S.mods[id] || { visited: false, read: false, best: null, attempts: 0, known: [] });

function status(id) {
  const m = S.mods[id];
  if (m && m.best !== null && m.best >= PASS && m.read) return 'done';
  if (m && m.visited) return 'ip';
  return 'ns';
}
const STATUS_LABEL = { ns: 'Not started', ip: 'In progress', done: 'Completed' };
const pill = st => `<span class="pill ${st}">${STATUS_LABEL[st]}</span>`;

function record(modId, qi, ok) {
  const h = (S.hist[modId] = S.hist[modId] || []);
  h.push(ok ? 1 : 0); if (h.length > 40) h.shift();
  const k = modId + ':' + qi;
  if (!ok) S.missed[k] = (S.missed[k] || 0) + 1;
}
function accuracy(modId) { const h = S.hist[modId]; if (!h || !h.length) return null; return Math.round(100 * h.reduce((a, b) => a + b, 0) / h.length); }
function completedCount() { return MODULES.filter(m => status(m.id) === 'done').length; }
function avgQuiz() { const b = MODULES.map(m => S.mods[m.id] && S.mods[m.id].best).filter(v => v !== null && v !== undefined); return b.length ? Math.round(b.reduce((a, c) => a + c, 0) / b.length) : null; }

/* ---------- Icons ---------- */
const I = {
  home: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
  mods: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  book: '<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 21.5A2.5 2.5 0 0 1 6.5 19H20v3H6.5"/>',
  calc: '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M8 6h8"/><path d="M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 19h.01M12 19h4"/>',
  exam: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 3h6v3H9z"/><path d="M9 12l2 2 4-4"/>',
  plan: '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/><path d="M8 14h3M8 17h6"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
  flag: '<path d="M5 21V4"/><path d="M5 4h11l-2 4 2 4H5"/>',
  alert: '<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18h.01"/>'
};
const icon = (n, size) => `<svg viewBox="0 0 24 24" ${size ? `width="${size}" height="${size}"` : ''} fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[n]}</svg>`;

/* ---------- Navigation ---------- */
const NAV = [
  { r: 'home', label: 'Dashboard', short: 'Home', ic: 'home' },
  { r: 'modules', label: 'Modules', short: 'Modules', ic: 'mods' },
  { r: 'glossary', label: 'Glossary', short: 'Glossary', ic: 'book' },
  { r: 'math', label: 'Math Calculators', short: 'Math', ic: 'calc' },
  { r: 'exam', label: 'Practice Exam', short: 'Exam', ic: 'exam' },
  { r: 'weak', label: 'Weak Areas', short: 'Weak', ic: 'target', sideOnly: true },
  { r: 'plan', label: 'Study Planner', short: 'Plan', ic: 'plan' }
];
$('#sideNav').innerHTML = NAV.map(n => `<a href="#${n.r}" data-r="${n.r}">${icon(n.ic)}<span>${n.label}</span></a>`).join('');
$('#bottomNav').innerHTML = NAV.filter(n => !n.sideOnly).map(n => `<a href="#${n.r}" data-r="${n.r}">${icon(n.ic)}<span>${n.short}</span></a>`).join('');

/* ---------- Theme ---------- */
function isDark() { const t = document.documentElement.dataset.theme; if (t) return t === 'dark'; return window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches; }
function paintThemeBtn() {
  const d = isDark(); const b = $('#themeBtn');
  b.innerHTML = icon(d ? 'sun' : 'moon'); b.setAttribute('aria-label', d ? 'Switch to light mode' : 'Switch to dark mode');
}
if (S.theme) document.documentElement.dataset.theme = S.theme;
$('#themeBtn').addEventListener('click', () => { S.theme = isDark() ? 'light' : 'dark'; document.documentElement.dataset.theme = S.theme; save(); paintThemeBtn(); });
try { matchMedia('(prefers-color-scheme: dark)').addEventListener('change', paintThemeBtn); } catch (e) { /* older browsers */ }
paintThemeBtn();

/* ---------- Glossary popup ---------- */
const pop = $('#termPop');
function showTerm(k) {
  const g = GLOSS.get(k); if (!g) return;
  $('#popTerm').textContent = g.t; $('#popDef').textContent = g.d;
  $('#popSrc').textContent = `Glossary · Module ${pad2(g.m)}: ${MOD(g.m).title}`;
  if (pop.showModal) pop.showModal(); else pop.setAttribute('open', '');
}
$('#popClose').addEventListener('click', () => pop.close());
$('#popGloss').addEventListener('click', () => pop.close());
pop.addEventListener('click', e => { if (e.target === pop) pop.close(); });

/* ---------- Router ---------- */
let timerHandle = null;
function route() {
  clearInterval(timerHandle);
  const h = (location.hash || '#home').slice(1);
  let r = h, id = null;
  const mm = /^module-(\d+)$/.exec(h);
  if (mm && MOD(mm[1])) { r = 'module'; id = +mm[1]; }
  const views = { home: viewHome, modules: viewModules, glossary: viewGlossary, math: viewMath, exam: viewExam, weak: viewWeak, plan: viewPlan };
  if (r !== 'module' && !views[r]) r = 'home';
  const navKey = r === 'module' ? 'modules' : r;
  $$('#sideNav a, #bottomNav a').forEach(a => { if (a.dataset.r === navKey) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
  if (r === 'module') viewModule(id); else views[r]();
  updateSide();
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', route);
function setTitle(t) { $('#topTitle').textContent = t; }
function updateSide() {
  const c = completedCount();
  $('#sideBar').style.width = (100 * c / MODULES.length) + '%';
  $('#sideText').textContent = `${c} of ${MODULES.length} modules completed`;
}

/* ---------- Shared pieces ---------- */
function modCard(m) {
  const st = status(m.id); const p = S.mods[m.id];
  const best = p && p.best !== null ? `Best quiz: <span class="mono">${p.best}%</span>` : `${m.quiz.length}-question quiz`;
  return `<a class="mod-card" href="#module-${m.id}">
    <div class="mod-top"><span class="mod-num">MODULE ${pad2(m.id)}</span>${pill(st)}</div>
    <div class="mod-title">${esc(m.title)}</div>
    <div class="mod-meta"><span>${m.terms.length} key terms</span><span>${best}</span></div>
  </a>`;
}
function disclaimer() {
  return `<p class="disclaimer"><strong>Study aid only.</strong> License Path is an independent study tool. It does not replace a state-approved pre-license course, and it is not affiliated with any publisher, school or licensing agency. Licensing rules change; always confirm current requirements with your state real estate commission.</p>`;
}
function recommendations(limit = 5) {
  const rows = MODULES.map(m => ({ m, acc: accuracy(m.id), n: (S.hist[m.id] || []).length, st: status(m.id) }));
  const weak = rows.filter(r => r.acc !== null && r.n >= 3 && r.acc < 80).sort((a, b) => a.acc - b.acc);
  const untouched = rows.filter(r => r.acc === null && r.st !== 'done');
  return { weak: weak.slice(0, limit), untouched, rows };
}

/* ===================== Views ===================== */
function viewHome() {
  setTitle('Dashboard');
  const c = completedCount(); const pct = Math.round(100 * c / MODULES.length);
  const avg = avgQuiz();
  const lastEx = S.exams[S.exams.length - 1];
  const bestEx = S.exams.length ? Math.max(...S.exams.map(e => e.score)) : null;
  const last = S.last && MOD(S.last.id) ? MOD(S.last.id) : null;
  const next = last || MODULES.find(m => status(m.id) !== 'done') || MODULES[0];
  const cont = last ? `Continue: Module ${pad2(last.id)}` : (c ? `Next: Module ${pad2(next.id)}` : 'Start Module 01');
  let days = null;
  if (S.plan.date) { const t0 = new Date(); t0.setHours(0, 0, 0, 0); days = Math.floor((new Date(S.plan.date + 'T09:00') - t0) / 864e5); }
  const rec = recommendations(3);
  const recItems = rec.weak.length ? rec.weak.map(r => recRow(r)).join('') :
    `<div class="notice">No weak areas yet. Take a few module quizzes or a practice exam and this list will point you to the topics that need another pass.</div>`;
  $('#view').innerHTML = `<div class="stack" style="gap:28px">
    <section class="hero">
      <div class="hero-main">
        <svg class="hero-plat" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 5h90v90H5z"/><path d="M5 40h55V5M60 40h35M40 40v55M40 70h55M70 70v25M5 70h35"/><circle cx="60" cy="40" r="3"/></svg>
        <div class="eyebrow">Your path to a salesperson license</div>
        <div class="row" style="align-items:flex-end;gap:14px"><span class="hero-pct">${pct}%</span><span>of the course completed</span></div>
        <div class="bar" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100" aria-label="Course progress"><span style="width:${pct}%"></span></div>
        <p style="opacity:.9">A module counts as completed when you finish the lesson and score ${PASS}% or better on its quiz.</p>
        <a class="btn" href="#module-${next.id}">${cont} →</a>
      </div>
      <div class="stats">
        <div class="stat"><span class="stat-val">${c}/${MODULES.length}</span><span class="stat-label">Modules completed</span></div>
        <div class="stat"><span class="stat-val">${avg === null ? '—' : avg + '%'}</span><span class="stat-label">Average quiz score</span></div>
        <div class="stat"><span class="stat-val">${bestEx === null ? '—' : bestEx + '%'}</span><span class="stat-label">Best practice exam${lastEx ? ` (${S.exams.length} taken)` : ''}</span></div>
        <div class="stat"><span class="stat-val">${days === null ? '—' : Math.max(days, 0)}</span><span class="stat-label">${days === null ? '<a href="#plan">Set your exam date</a>' : 'Days until your exam'}</span></div>
      </div>
    </section>

    <section class="stack">
      <div class="section-head"><h2>Recommended review</h2><a href="#weak">See all weak areas</a></div>
      <div class="rec-list">${recItems}</div>
    </section>

    <section class="stack">
      <div class="section-head"><h2>All modules</h2><span class="muted">${MODULES.length} modules · ${MODULES.reduce((a, m) => a + m.quiz.length, 0)} quiz questions · ${GLOSS.size} glossary terms</span></div>
      <div class="grid-mods">${MODULES.map(modCard).join('')}</div>
    </section>
    ${disclaimer()}
  </div>`;
}
function recRow(r) {
  const cls = r.acc < 60 ? 'bad' : 'warn';
  return `<div class="rec">
    <div class="rec-body"><div class="mod-num">MODULE ${pad2(r.m.id)}</div><strong>${esc(r.m.title)}</strong>
      <div class="bar ${cls}" style="margin-top:8px;max-width:260px"><span style="width:${r.acc}%"></span></div></div>
    <span class="rec-acc">${r.acc}% correct</span>
    <a class="btn small" href="#module-${r.m.id}">Review</a>
  </div>`;
}

let modFilter = 'all';
function viewModules() {
  setTitle('Modules');
  const f = [['all', 'All'], ['ns', 'Not started'], ['ip', 'In progress'], ['done', 'Completed']];
  const list = MODULES.filter(m => modFilter === 'all' || status(m.id) === modFilter);
  $('#view').innerHTML = `<div class="stack" style="gap:22px">
    <div class="stack" style="gap:6px"><h1>Course modules</h1><p class="muted">Work through the modules in order. Each one has a lesson, key terms, flashcards and a 10-question quiz.</p></div>
    <div class="chips" role="group" aria-label="Filter modules">${f.map(([k, l]) => `<button class="chip" data-act="modfilter" data-k="${k}" aria-pressed="${modFilter === k}">${l} (${k === 'all' ? MODULES.length : MODULES.filter(m => status(m.id) === k).length})</button>`).join('')}</div>
    <div class="grid-mods">${list.map(modCard).join('') || '<div class="empty">No modules match this filter.</div>'}</div>
    ${disclaimer()}
  </div>`;
}

/* ---------- Module ---------- */
let modTab = 'lesson';
let curMod = null;
function viewModule(id) {
  const m = MOD(id); const p = mp(id);
  if (curMod !== id) { modTab = (S.last && S.last.id === id && S.last.tab) || 'lesson'; quiz = null; fc = null; }
  curMod = id; p.visited = true; S.last = { id, tab: modTab }; save();
  setTitle(`Module ${pad2(id)} · ${m.title}`);
  const tabs = [['lesson', 'Lesson'], ['terms', `Key terms (${m.terms.length})`], ['cards', 'Flashcards'], ['quiz', 'Quiz']];
  const prev = MOD(id - 1), next = MOD(id + 1);
  $('#view').innerHTML = `<div class="stack" style="gap:20px">
    <div class="mod-head">
      <div class="row"><span class="mod-num">MODULE ${pad2(id)} OF ${MODULES.length}</span>${pill(status(id))}${p.best !== null ? `<span class="muted" style="font-size:.85rem">Best quiz score <span class="mono">${p.best}%</span></span>` : ''}</div>
      <h1>${esc(m.title)}</h1>
      <p class="muted" style="max-width:68ch">${esc(m.summary)}</p>
    </div>
    <div class="tabs" role="tablist">${tabs.map(([k, l]) => `<button class="tab" role="tab" data-act="tab" data-k="${k}" aria-selected="${modTab === k}">${l}</button>`).join('')}</div>
    <div id="tabBody"></div>
    <div class="row" style="justify-content:space-between;border-top:1px solid var(--line);padding-top:18px">
      ${prev ? `<a class="btn ghost" href="#module-${prev.id}">← Module ${pad2(prev.id)}</a>` : '<span></span>'}
      ${next ? `<a class="btn ghost" href="#module-${next.id}">Module ${pad2(next.id)} →</a>` : '<a class="btn ghost" href="#exam">Practice exam →</a>'}
    </div>
    ${disclaimer()}
  </div>`;
  renderTab();
}
function renderTab() {
  const m = MOD(curMod); const body = $('#tabBody');
  S.last = { id: curMod, tab: modTab }; save();
  if (modTab === 'lesson') body.innerHTML = lessonHTML(m);
  else if (modTab === 'terms') body.innerHTML = `<dl class="terms-list">${m.terms.map(([t, d]) => `<div class="term"><dt>${esc(t)}</dt><dd>${esc(d)}</dd></div>`).join('')}</dl>`;
  else if (modTab === 'cards') renderCards();
  else renderQuiz();
}
function lessonHTML(m) {
  const p = mp(m.id);
  const secs = m.sections.map(([h, html], i) => `<section class="lesson-sec"><h3><span class="mono">${m.id}.${i + 1}</span>${esc(h)}</h3>${rich(html)}</section>`).join('');
  const scen = m.scenarios.map(([t, s]) => `<aside class="scenario"><div class="eyebrow">Real-world scenario</div><h3>${esc(t)}</h3><p>${rich(s)}</p></aside>`).join('');
  return `<div class="lesson">
    <div class="objectives"><div class="eyebrow">Learning objectives</div><p class="muted" style="margin-top:4px">After this module you should be able to:</p><ol>${m.objectives.map(o => `<li>${esc(o)}</li>`).join('')}</ol></div>
    <p class="muted" style="font-size:.9rem">Tip: underlined words are glossary terms. Tap one to see its definition.</p>
    ${secs}
    ${scen}
    <aside class="traps"><h3>${icon('alert', 20)} Common exam traps</h3><ul>${m.traps.map(t => `<li>${rich(t)}</li>`).join('')}</ul></aside>
    <div class="lesson-done">
      ${p.read ? `<span class="pill done">Lesson finished</span><span class="muted">Next step: review the flashcards, then take the quiz.</span>` :
      `<span>Finished reading?</span><button class="btn primary" data-act="markread">Mark lesson as finished</button>`}
      <button class="btn" data-act="tab" data-k="quiz">Go to the quiz →</button>
    </div>
  </div>`;
}

/* Flashcards */
let fc = null;
function renderCards() {
  const m = MOD(curMod); const p = mp(curMod);
  if (!fc || fc.mod !== curMod) fc = { mod: curMod, order: m.terms.map((_, i) => i), i: 0, flipped: false, onlyNew: false };
  let order = fc.order; if (fc.onlyNew) order = order.filter(i => !p.known.includes(m.terms[i][0]));
  const body = $('#tabBody');
  const known = p.known.filter(k => m.terms.some(t => t[0] === k)).length;
  if (!order.length) {
    body.innerHTML = `<div class="card empty stack" style="align-items:center"><h3>You know every card in this deck</h3><p>Turn off “Only cards I'm still learning” to review the full deck.</p><button class="btn" data-act="fcnew">Show all cards</button></div>`;
    return;
  }
  if (fc.i >= order.length) fc.i = 0;
  const [t, d] = m.terms[order[fc.i]];
  body.innerHTML = `<div class="fc-wrap">
    <div class="row" style="justify-content:space-between;width:100%;max-width:560px">
      <span class="muted mono">Card ${fc.i + 1} / ${order.length}</span><span class="muted">${known} of ${m.terms.length} marked known</span>
    </div>
    <button class="fc ${fc.flipped ? 'flipped' : ''}" data-act="flip" aria-label="Flashcard. ${fc.flipped ? 'Showing definition' : 'Showing term'}. Tap to flip.">
      <div class="fc-inner">
        <div class="fc-face fc-front"><span class="eyebrow">Term</span><span class="fc-term">${esc(t)}</span><span class="fc-hint">Tap or press Space to flip</span></div>
        <div class="fc-face fc-back"><span class="eyebrow">${esc(t)}</span><span class="fc-def">${esc(d)}</span></div>
      </div>
    </button>
    <div class="fc-controls">
      <button class="btn" data-act="fcprev">← Back</button>
      <button class="btn" data-act="fcagain">Still learning</button>
      <button class="btn primary" data-act="fcknow">I know it</button>
    </div>
    <div class="fc-controls">
      <button class="btn small ghost" data-act="fcshuffle">Shuffle deck</button>
      <button class="btn small ghost" data-act="fcnew" aria-pressed="${fc.onlyNew}">${fc.onlyNew ? 'Show all cards' : "Only cards I'm still learning"}</button>
    </div>
  </div>`;
}
function fcAdvance(markKnown) {
  const m = MOD(curMod); const p = mp(curMod);
  let order = fc.order; if (fc.onlyNew) order = order.filter(i => !p.known.includes(m.terms[i][0]));
  const term = m.terms[order[fc.i]][0];
  if (markKnown === true && !p.known.includes(term)) p.known.push(term);
  if (markKnown === false) p.known = p.known.filter(k => k !== term);
  save();
  fc.flipped = false;
  if (fc.onlyNew && markKnown === true) { /* the card leaves the filtered list, same index shows the next card */ }
  else fc.i = (fc.i + 1) % order.length;
  renderCards();
}

/* Module quiz */
let quiz = null;
function newQuiz(m) { return { mod: m.id, i: 0, picks: [], opt: m.quiz.map(q => shuffle(q[1].map((_, k) => k))), done: false }; }
function renderQuiz() {
  const m = MOD(curMod); const body = $('#tabBody');
  if (!quiz || quiz.mod !== curMod) quiz = newQuiz(m);
  if (quiz.done) return renderQuizResult(m);
  const q = m.quiz[quiz.i]; const pick = quiz.picks[quiz.i];
  const answered = pick !== undefined;
  const correctSoFar = quiz.picks.filter((p, k) => p === m.quiz[k][2]).length;
  const opts = quiz.opt[quiz.i].map((k, n) => {
    let cls = '';
    if (answered) { if (k === q[2]) cls = 'correct'; else if (k === pick) cls = 'wrong'; }
    return `<button class="opt ${cls}" data-act="qpick" data-k="${k}" ${answered ? 'disabled' : ''}><span class="opt-letter">${'ABCD'[n]}</span><span>${esc(q[1][k])}</span></button>`;
  }).join('');
  body.innerHTML = `<div class="quiz">
    <div class="q-progress"><span class="mono">Question ${quiz.i + 1} of ${m.quiz.length}</span><span>${correctSoFar} correct so far</span></div>
    <div class="bar" aria-hidden="true"><span style="width:${100 * quiz.i / m.quiz.length}%"></span></div>
    <p class="q-text">${esc(q[0])}</p>
    <div class="opts">${opts}</div>
    ${answered ? `<div class="explain ${pick === q[2] ? '' : 'bad'}" role="status"><strong>${pick === q[2] ? 'Correct.' : 'Not quite. The correct answer is “' + esc(q[1][q[2]]) + '.”'}</strong>${rich(esc(q[3]))}</div>
      <div><button class="btn primary" data-act="qnext">${quiz.i + 1 < m.quiz.length ? 'Next question →' : 'See my score'}</button></div>` : ''}
  </div>`;
}
function renderQuizResult(m) {
  const p = mp(m.id);
  const right = quiz.picks.filter((pk, k) => pk === m.quiz[k][2]).length;
  const pct = Math.round(100 * right / m.quiz.length);
  const passed = pct >= PASS;
  $('#tabBody').innerHTML = `<div class="quiz">
    <div class="card stack" style="gap:10px">
      <div class="eyebrow">Quiz result</div>
      <div class="row" style="gap:16px;align-items:flex-end"><span class="score-big" style="color:var(--${passed ? 'good' : 'bad'})">${pct}%</span><span>${right} of ${m.quiz.length} correct · best ${p.best}%</span></div>
      <p>${passed ? (p.read ? 'Nice work. This module is now marked completed.' : `You passed. Mark the lesson as finished to complete this module.`) : `You need ${PASS}% to complete this module. Review the explanations below, revisit the lesson, and try again.`}</p>
      <div class="row">
        <button class="btn primary" data-act="qretry">Retake quiz</button>
        ${!p.read ? '<button class="btn" data-act="markread">Mark lesson as finished</button>' : ''}
        ${MOD(m.id + 1) ? `<a class="btn" href="#module-${m.id + 1}">Next module →</a>` : ''}
      </div>
    </div>
    <h3>Review your answers</h3>
    ${m.quiz.map((q, k) => {
      const ok = quiz.picks[k] === q[2];
      return `<div class="review-item"><span class="tag ${ok ? 'ok' : 'no'}">${ok ? '✓ Correct' : '✗ Missed'} · Q${k + 1}</span><strong>${esc(q[0])}</strong>
      ${ok ? '' : `<span>Your answer: ${esc(q[1][quiz.picks[k]])}</span>`}<span>Correct answer: <strong>${esc(q[1][q[2]])}</strong></span><span class="muted">${rich(esc(q[3]))}</span></div>`;
    }).join('')}
  </div>`;
}

/* ---------- Glossary ---------- */
let gq = '';
function viewGlossary() {
  setTitle('Glossary');
  $('#view').innerHTML = `<div class="stack" style="gap:20px">
    <div class="stack" style="gap:6px"><h1>Master glossary</h1><p class="muted">Every key term from all ${MODULES.length} modules (${GLOSS.size} terms). Search by word or by anything in a definition.</p></div>
    <div class="search">${icon('search')}<input id="glossSearch" type="search" placeholder="Search terms, e.g. easement, escrow, LTV" aria-label="Search glossary" value="${esc(gq)}"></div>
    <div id="glossList" class="stack" style="gap:22px"></div>
    ${disclaimer()}
  </div>`;
  const inp = $('#glossSearch');
  inp.addEventListener('input', () => { gq = inp.value; renderGloss(); });
  renderGloss();
}
function renderGloss() {
  const q = gq.trim().toLowerCase();
  const all = [...GLOSS.values()].sort((a, b) => a.t.localeCompare(b.t));
  const list = q ? all.filter(g => g.t.toLowerCase().includes(q) || g.d.toLowerCase().includes(q)) : all;
  const groups = {};
  for (const g of list) { const L = /[a-z]/i.test(g.t[0]) ? g.t[0].toUpperCase() : '#'; (groups[L] = groups[L] || []).push(g); }
  $('#glossList').innerHTML = list.length ? Object.keys(groups).sort().map(L => `<div class="gloss-group"><h3>${L}</h3>${groups[L].map(g => `
    <div class="gloss-item"><div class="gloss-term">${esc(g.t)}</div><div><div class="gloss-def">${esc(g.d)}</div><div class="gloss-src">From <a href="#module-${g.m}">Module ${pad2(g.m)}: ${esc(MOD(g.m).title)}</a></div></div></div>`).join('')}</div>`).join('')
    : `<div class="empty">No terms match “${esc(gq)}.” Try a shorter word.</div>`;
}

/* ---------- Math calculators ---------- */
const CALCS = [
  {
    id: 'comm', title: 'Commission split',
    intro: 'Total commission is the sale price times the rate. It is usually divided between the listing and selling brokerages, then between each brokerage and its agent.',
    inputs: [['price', 'Sale price ($)', 350000], ['rate', 'Commission rate (%)', 6], ['side', 'Your brokerage’s share of the commission (%)', 50], ['agent', 'Your split with your broker (%)', 60]],
    calc: v => {
      const total = v.price * v.rate / 100, side = total * v.side / 100, agent = side * v.agent / 100;
      return { big: money(agent), label: 'Your take-home commission (before taxes and fees)', steps:
`Total commission  = ${money(v.price, 0)} × ${v.rate}%      = ${money(total)}
Brokerage share   = ${money(total)} × ${v.side}%      = ${money(side)}
Your share        = ${money(side)} × ${v.agent}%      = ${money(agent)}
Broker keeps      = ${money(side)} − ${money(agent)} = ${money(side - agent)}` };
    }
  },
  {
    id: 'ltv', title: 'Loan-to-value (LTV)',
    intro: 'Lenders compare the loan to the property’s value, using the lower of the sale price or the appraised value. Conventional loans above 80% LTV usually require private mortgage insurance (PMI).',
    inputs: [['price', 'Sale price ($)', 300000], ['appr', 'Appraised value ($)', 295000], ['loan', 'Loan amount ($)', 265500]],
    calc: v => {
      const val = Math.min(v.price, v.appr), ltv = val ? 100 * v.loan / val : 0;
      return { big: num(ltv, 2) + '%', label: ltv > 80 ? 'LTV is above 80%: expect PMI on a conventional loan' : 'LTV is 80% or less: PMI usually not required', steps:
`Value used        = lower of ${money(v.price, 0)} and ${money(v.appr, 0)} = ${money(val, 0)}
LTV               = ${money(v.loan, 0)} ÷ ${money(val, 0)} = ${num(ltv, 2)}%
Down payment/equity = ${money(val - v.loan, 0)} (${num(100 - ltv, 2)}% of value)` };
    }
  },
  {
    id: 'pmt', title: 'Monthly mortgage payment',
    intro: 'This is the principal-and-interest payment on a fully amortized fixed-rate loan. Taxes, insurance and PMI (together with P&I, called PITI) are added on top.',
    inputs: [['loan', 'Loan amount ($)', 240000], ['rate', 'Annual interest rate (%)', 6.5], ['years', 'Term (years)', 30]],
    calc: v => {
      const r = v.rate / 100 / 12, n = v.years * 12;
      const pmt = r ? v.loan * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1) : v.loan / n;
      const first = v.loan * r;
      return { big: money(pmt), label: 'Monthly principal & interest', steps:
`Monthly rate r    = ${v.rate}% ÷ 12 = ${num(r * 100, 4)}%
Number of payments n = ${v.years} × 12 = ${n}
Payment = L × r(1+r)^n ÷ ((1+r)^n − 1) = ${money(pmt)}
Month 1 interest  = ${money(v.loan, 0)} × ${num(r * 100, 4)}% = ${money(first)}
Month 1 principal = ${money(pmt)} − ${money(first)} = ${money(pmt - first)}
Total interest over the loan = ${money(pmt * n - v.loan, 0)}` };
    }
  },
  {
    id: 'tax', title: 'Property tax',
    intro: 'Tax = (assessed value − exemptions) × tax rate. Georgia assesses property at 40% of fair market value, and rates are quoted in mills (1 mill = $1 per $1,000, or 0.001).',
    inputs: [['mv', 'Fair market value ($)', 300000], ['ratio', 'Assessment ratio (%)', 40], ['ex', 'Exemptions ($)', 2000], ['mills', 'Tax rate (mills)', 30]],
    calc: v => {
      const av = v.mv * v.ratio / 100, taxable = Math.max(av - v.ex, 0), tax = taxable * v.mills / 1000;
      return { big: money(tax), label: `Annual tax (${money(tax / 12)} per month)`, steps:
`Assessed value  = ${money(v.mv, 0)} × ${v.ratio}% = ${money(av, 0)}
Taxable value   = ${money(av, 0)} − ${money(v.ex, 0)} = ${money(taxable, 0)}
Rate in decimal = ${v.mills} mills ÷ 1,000 = ${num(v.mills / 1000, 4)}
Annual tax      = ${money(taxable, 0)} × ${num(v.mills / 1000, 4)} = ${money(tax)}` };
    }
  },
  {
    id: 'area', title: 'Square footage and price per foot',
    intro: 'Break an L-shaped or irregular floor plan into rectangles, find each area (length × width), and add them. Then you can price by the square foot or convert land to acres.',
    inputs: [['l1', 'Section A length (ft)', 40], ['w1', 'Section A width (ft)', 30], ['l2', 'Section B length (ft)', 20], ['w2', 'Section B width (ft)', 15], ['ppsf', 'Price per sq ft ($)', 180]],
    calc: v => {
      const a = v.l1 * v.w1, b = v.l2 * v.w2, t = a + b;
      return { big: num(t) + ' sq ft', label: `Estimated value at ${money(v.ppsf, 0)}/sq ft: ${money(t * v.ppsf, 0)}`, steps:
`Section A = ${v.l1} × ${v.w1} = ${num(a)} sq ft
Section B = ${v.l2} × ${v.w2} = ${num(b)} sq ft
Total     = ${num(a)} + ${num(b)} = ${num(t)} sq ft
Value     = ${num(t)} × ${money(v.ppsf, 0)} = ${money(t * v.ppsf, 0)}
In acres  = ${num(t)} ÷ 43,560 = ${num(t / 43560, 4)} acres
In sq yd  = ${num(t)} ÷ 9 = ${num(t / 9, 2)} sq yd` };
    }
  },
  {
    id: 'cap', title: 'Capitalization (cap) rate',
    intro: 'Income property is valued with IRV: Income (NOI) = Rate × Value. Net operating income is gross income minus vacancy and operating expenses. Mortgage payments are not operating expenses.',
    inputs: [['gross', 'Potential gross income ($/yr)', 120000], ['vac', 'Vacancy & collection loss (%)', 5], ['exp', 'Operating expenses ($/yr)', 44000], ['price', 'Price or value ($)', 1000000]],
    calc: v => {
      const egi = v.gross * (1 - v.vac / 100), noi = egi - v.exp, cap = v.price ? 100 * noi / v.price : 0;
      return { big: num(cap, 2) + '%', label: `Cap rate (NOI ${money(noi, 0)} per year)`, steps:
`Effective gross   = ${money(v.gross, 0)} × (1 − ${v.vac}%) = ${money(egi, 0)}
NOI               = ${money(egi, 0)} − ${money(v.exp, 0)} = ${money(noi, 0)}
Cap rate (R = I÷V) = ${money(noi, 0)} ÷ ${money(v.price, 0)} = ${num(cap, 2)}%
Value at an 8% cap (V = I÷R) = ${money(noi, 0)} ÷ 0.08 = ${money(noi / 0.08, 0)}` };
    }
  }
];
function viewMath() {
  setTitle('Math Calculators');
  $('#view').innerHTML = `<div class="stack" style="gap:20px">
    <div class="stack" style="gap:6px"><h1>Real estate math calculators</h1><p class="muted">Each calculator opens with a worked example and shows every step. Change any number to see the math update. For the formulas behind them, study <a href="#module-18">Module 18: Real Estate Math</a>.</p></div>
    <div class="calcs">${CALCS.map(c => `<section class="card calc" data-calc="${c.id}">
      <h2>${esc(c.title)}</h2><p class="muted" style="font-size:.93rem">${esc(c.intro)}</p>
      <div class="calc-inputs">${c.inputs.map(([k, l, d]) => `<div class="field"><label for="c-${c.id}-${k}">${esc(l)}</label><input id="c-${c.id}-${k}" data-k="${k}" type="number" inputmode="decimal" step="any" value="${d}"></div>`).join('')}</div>
      <div class="calc-result" aria-live="polite"><span class="big"></span><span class="lbl"></span></div>
      <div><div class="eyebrow" style="margin-bottom:6px">Show the math</div><div class="steps"></div></div>
      <div><button class="btn small" data-act="calcex" data-c="${c.id}">Reload worked example</button></div>
    </section>`).join('')}</div>
    ${disclaimer()}
  </div>`;
  CALCS.forEach(c => { const el = $(`[data-calc="${c.id}"]`); el.addEventListener('input', () => runCalc(c)); runCalc(c); });
}
function runCalc(c) {
  const el = $(`[data-calc="${c.id}"]`); const v = {};
  $$('input', el).forEach(i => { v[i.dataset.k] = parseFloat(i.value) || 0; });
  const r = c.calc(v);
  $('.big', el).textContent = r.big; $('.lbl', el).textContent = r.label; $('.steps', el).textContent = r.steps;
}

/* ---------- Practice exam ---------- */
let showConfirm = false;
let reviewFilter = 'missed';
function buildExam() {
  const qs = [];
  const per = Math.floor(EXAM_QS / MODULES.length); let extra = EXAM_QS - per * MODULES.length;
  for (const m of shuffle(MODULES)) {
    const take = per + (extra-- > 0 ? 1 : 0);
    shuffle(m.quiz.map((_, i) => i)).slice(0, Math.min(take, m.quiz.length)).forEach(i => qs.push({ m: m.id, i, o: shuffle(m.quiz[i][1].map((_, k) => k)) }));
  }
  return { qs: shuffle(qs), ans: Array(qs.length).fill(null), flags: [], cur: 0, start: Date.now(), dur: EXAM_MIN * 60 * 1000 };
}
function viewExam() {
  setTitle('Practice Exam');
  if (S.run) return renderExamRun();
  $('#view').innerHTML = `<div class="stack" style="gap:22px">
    <div class="stack" style="gap:6px"><h1>Timed practice exam</h1><p class="muted" style="max-width:66ch">${EXAM_QS} multiple-choice questions drawn from all ${MODULES.length} modules, with ${EXAM_MIN} minutes on the clock. Answers are not revealed until you submit. You can flag questions and jump around, just like the real exam. Your progress is saved if you leave the page.</p></div>
    <div class="two-col">
      <div class="card stack">
        <h2>Before you start</h2>
        <ul style="margin:0;padding-left:20px;display:flex;flex-direction:column;gap:6px">
          <li>Find a quiet place and set aside about 2½ hours.</li>
          <li>Keep scratch paper and a basic calculator nearby for math questions.</li>
          <li>Aim for ${PASS}% or higher. Most state exams use a passing score near that mark.</li>
          <li>Unanswered questions count as wrong, so answer every one.</li>
        </ul>
        <div><button class="btn primary" data-act="examstart">Start the ${EXAM_QS}-question exam</button></div>
      </div>
      <div class="card stack">
        <h2>Your exam history</h2>
        ${S.exams.length ? `<div class="tbl-scroll"><table class="topic-table"><thead><tr><th>Date</th><th>Score</th><th>Result</th></tr></thead><tbody>
          ${S.exams.slice().reverse().map((e, k) => `<tr><td>${new Date(e.date).toLocaleDateString()}</td><td class="num">${e.score}%</td><td>${e.score >= PASS ? '<span class="pill done">Pass</span>' : '<span class="pill ip">Below 70%</span>'}</td></tr>`).join('')}
        </tbody></table></div>
        <div><button class="btn" data-act="examreview">Review last exam</button></div>` : '<p class="muted">No practice exams yet. Your scores and topic breakdowns will show here.</p>'}
      </div>
    </div>
    ${disclaimer()}
  </div>`;
}
function examLeft() { return Math.max(0, S.run.start + S.run.dur - Date.now()); }
function fmtTime(ms) { const s = Math.ceil(ms / 1000); const h = Math.floor(s / 3600), mi = Math.floor(s % 3600 / 60), se = s % 60; return `${h}:${pad2(mi)}:${pad2(se)}`; }
function renderExamRun() {
  const R = S.run; const it = R.qs[R.cur]; const m = MOD(it.m); const q = m.quiz[it.i];
  const answered = R.ans.filter(a => a !== null).length;
  $('#view').innerHTML = `<div class="stack" style="gap:16px">
    <div class="exam-bar">
      <div><div class="eyebrow">Time remaining</div><div class="timer" id="timer">${fmtTime(examLeft())}</div></div>
      <div><div class="eyebrow">Answered</div><div class="mono" style="font-size:1.15rem;font-weight:600">${answered} / ${R.qs.length}</div></div>
      <button class="btn" data-act="examsubmitask">Submit exam</button>
    </div>
    ${showConfirm ? `<div class="confirm" role="alertdialog" aria-label="Confirm submit"><strong>Submit your exam now?</strong><span>${R.qs.length - answered ? `You have ${R.qs.length - answered} unanswered question${R.qs.length - answered === 1 ? '' : 's'}. They will be scored as wrong.` : 'All questions are answered.'} ${R.flags.length ? `${R.flags.length} question(s) are flagged for review.` : ''}</span>
      <div class="row"><button class="btn primary" data-act="examsubmit">Yes, submit and score it</button><button class="btn" data-act="examcancel">Keep working</button></div></div>` : ''}
    <div class="quiz" style="max-width:none">
      <div class="q-progress"><span class="mono">Question ${R.cur + 1} of ${R.qs.length}</span><span>Topic hidden until scoring</span></div>
      <p class="q-text">${esc(q[0])}</p>
      <div class="opts">${it.o.map((k, n) => `<button class="opt ${R.ans[R.cur] === k ? 'chosen' : ''}" data-act="exampick" data-k="${k}" aria-pressed="${R.ans[R.cur] === k}"><span class="opt-letter">${'ABCD'[n]}</span><span>${esc(q[1][k])}</span></button>`).join('')}</div>
      <div class="row" style="justify-content:space-between">
        <button class="btn" data-act="examprev" ${R.cur === 0 ? 'disabled' : ''}>← Previous</button>
        <button class="btn ${R.flags.includes(R.cur) ? 'primary' : ''}" data-act="examflag">${icon('flag', 18)} ${R.flags.includes(R.cur) ? 'Flagged' : 'Flag for review'}</button>
        <button class="btn primary" data-act="examnext" ${R.cur === R.qs.length - 1 ? 'disabled' : ''}>Next →</button>
      </div>
    </div>
    <details class="card" ${window.innerWidth > 860 ? 'open' : ''}><summary style="cursor:pointer;font-weight:600;min-height:32px">Question navigator</summary>
      <p class="muted" style="font-size:.85rem;margin:8px 0">Shaded = answered · dot = flagged · outline = current question</p>
      <div class="navgrid">${R.qs.map((_, k) => `<button class="${R.ans[k] !== null ? 'ans' : ''} ${R.flags.includes(k) ? 'flag' : ''} ${k === R.cur ? 'cur' : ''}" data-act="examgo" data-k="${k}" aria-label="Question ${k + 1}">${k + 1}</button>`).join('')}</div>
    </details>
  </div>`;
  timerHandle = setInterval(() => {
    const t = $('#timer'); if (!t || !S.run) return clearInterval(timerHandle);
    const left = examLeft(); t.textContent = fmtTime(left); t.classList.toggle('low', left < 10 * 60 * 1000);
    if (left <= 0) { clearInterval(timerHandle); submitExam(); }
  }, 1000);
}
function submitExam() {
  const R = S.run; if (!R) return;
  const by = {}; let right = 0;
  R.qs.forEach((it, k) => {
    const ok = R.ans[k] === MOD(it.m).quiz[it.i][2];
    if (ok) right++;
    (by[it.m] = by[it.m] || { a: 0, c: 0 }).a++; if (ok) by[it.m].c++;
    record(it.m, it.i, ok);
  });
  const score = Math.round(100 * right / R.qs.length);
  S.exams.push({ date: Date.now(), score, right, total: R.qs.length, by, qs: R.qs, ans: R.ans, used: Date.now() - R.start });
  if (S.exams.length > 10) S.exams.shift();
  S.run = null; showConfirm = false; save();
  renderExamResult();
}
function renderExamResult() {
  const E = S.exams[S.exams.length - 1]; if (!E) return viewExam();
  setTitle('Practice Exam Results');
  const rows = Object.entries(E.by).map(([id, v]) => ({ m: MOD(id), a: v.a, c: v.c, p: Math.round(100 * v.c / v.a) })).sort((a, b) => a.p - b.p);
  const list = E.qs.map((it, k) => ({ it, k, ok: E.ans[k] === MOD(it.m).quiz[it.i][2] }))
    .filter(x => reviewFilter === 'all' || !x.ok);
  const pass = E.score >= PASS;
  $('#view').innerHTML = `<div class="stack" style="gap:22px">
    <div class="card stack" style="gap:10px">
      <div class="eyebrow">Practice exam · ${new Date(E.date).toLocaleString()}</div>
      <div class="row" style="gap:16px;align-items:flex-end"><span class="score-big" style="color:var(--${pass ? 'good' : 'bad'})">${E.score}%</span><span>${E.right} of ${E.total} correct · time used ${fmtTime(E.used).replace(/^0:/, '')}</span></div>
      <p>${pass ? 'That is a passing-level score. Keep practicing until you pass consistently, then focus on your lowest topics below.' : `Below the ${PASS}% target. Start with the lowest-scoring topics below; each links to its module.`}</p>
      <div class="row"><button class="btn primary" data-act="examstart">Take a new exam</button><a class="btn" href="#weak">See weak areas</a></div>
    </div>
    <section class="card stack">
      <h2>Score by topic</h2>
      <div class="tbl-scroll"><table class="topic-table"><thead><tr><th>Module</th><th>Correct</th><th style="width:30%">Score</th><th></th></tr></thead><tbody>
      ${rows.map(r => `<tr><td><a href="#module-${r.m.id}">${pad2(r.m.id)} · ${esc(r.m.title)}</a></td><td class="num">${r.c}/${r.a}</td>
        <td><div class="bar ${r.p >= 80 ? 'good' : r.p >= 60 ? 'warn' : 'bad'}"><span style="width:${r.p}%"></span></div></td><td class="num">${r.p}%</td></tr>`).join('')}
      </tbody></table></div>
    </section>
    <section class="stack">
      <div class="section-head"><h2>Review screen</h2>
        <div class="chips"><button class="chip" data-act="revfilter" data-k="missed" aria-pressed="${reviewFilter === 'missed'}">Missed only</button><button class="chip" data-act="revfilter" data-k="all" aria-pressed="${reviewFilter === 'all'}">All questions</button></div></div>
      ${list.length ? list.map(({ it, k, ok }) => { const q = MOD(it.m).quiz[it.i]; const a = E.ans[k];
        return `<div class="review-item"><span class="tag ${ok ? 'ok' : 'no'}">${ok ? '✓ Correct' : '✗ Missed'} · Q${k + 1} · Module ${pad2(it.m)}: ${esc(MOD(it.m).title)}</span>
        <strong>${esc(q[0])}</strong>${ok ? '' : `<span>Your answer: ${a === null ? '<em>No answer</em>' : esc(q[1][a])}</span>`}
        <span>Correct answer: <strong>${esc(q[1][q[2]])}</strong></span><span class="muted">${rich(esc(q[3]))}</span></div>`; }).join('')
        : '<div class="empty">You did not miss any questions. Excellent work.</div>'}
    </section>
    ${disclaimer()}
  </div>`;
}

/* ---------- Weak areas ---------- */
function viewWeak() {
  setTitle('Weak Areas');
  const { weak, untouched, rows } = recommendations(20);
  const tracked = rows.filter(r => r.acc !== null).sort((a, b) => a.acc - b.acc);
  const missedTop = Object.entries(S.missed).sort((a, b) => b[1] - a[1]).slice(0, 8).map(([k, n]) => { const [mid, qi] = k.split(':'); const m = MOD(mid); return m && m.quiz[qi] ? { m, q: m.quiz[qi], n } : null; }).filter(Boolean);
  $('#view').innerHTML = `<div class="stack" style="gap:22px">
    <div class="stack" style="gap:6px"><h1>Weak-area tracker</h1><p class="muted" style="max-width:66ch">Every quiz and practice-exam answer is tracked by topic (your most recent 40 answers per module). Modules under 80% correct are recommended for review, lowest first.</p></div>
    <section class="stack"><h2>Review these first</h2>
      ${weak.length ? `<div class="rec-list">${weak.map(recRow).join('')}</div>` : '<div class="notice">Nothing flagged yet. You need at least 3 answers in a module before it can be rated. Take module quizzes or a practice exam to build your profile.</div>'}
    </section>
    <section class="card stack"><h2>Accuracy by module</h2>
      ${tracked.length ? `<div class="tbl-scroll"><table class="topic-table"><thead><tr><th>Module</th><th>Answers</th><th style="width:30%">Accuracy</th><th></th></tr></thead><tbody>
      ${tracked.map(r => `<tr><td><a href="#module-${r.m.id}">${pad2(r.m.id)} · ${esc(r.m.title)}</a></td><td class="num">${r.n}</td><td><div class="bar ${r.acc >= 80 ? 'good' : r.acc >= 60 ? 'warn' : 'bad'}"><span style="width:${r.acc}%"></span></div></td><td class="num">${r.acc}%</td></tr>`).join('')}
      </tbody></table></div>` : '<p class="muted">No answers recorded yet.</p>'}
      ${untouched.length ? `<p class="muted">Not yet tested: ${untouched.map(r => `<a href="#module-${r.m.id}">${pad2(r.m.id)}</a>`).join(', ')}</p>` : ''}
    </section>
    ${missedTop.length ? `<section class="stack"><h2>Questions you miss most</h2>${missedTop.map(x => `<div class="review-item"><span class="tag no">Missed ${x.n}× · Module ${pad2(x.m.id)}</span><strong>${esc(x.q[0])}</strong><span>Correct answer: <strong>${esc(x.q[1][x.q[2]])}</strong></span><span class="muted">${rich(esc(x.q[3]))}</span></div>`).join('')}</section>` : ''}
    ${disclaimer()}
  </div>`;
}

/* ---------- Study planner ---------- */
function isoDate(d) { return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`; }
function viewPlan() {
  setTitle('Study Planner');
  const example = !S.plan.date;
  const target = S.plan.date ? new Date(S.plan.date + 'T09:00') : new Date(Date.now() + 56 * 864e5);
  $('#view').innerHTML = `<div class="stack" style="gap:22px">
    <div class="stack" style="gap:6px"><h1>Study planner</h1><p class="muted" style="max-width:66ch">Set your exam date and weekly study time. The plan spreads your unfinished modules across the weeks you have and saves the final week for practice exams and review. Check your <a href="#weak">weak-area tracker</a> each week too.</p></div>
    <div class="card"><div class="calc-inputs" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr))">
      <div class="field"><label for="planDate">Exam date</label><input type="date" id="planDate" value="${S.plan.date}" min="${isoDate(new Date())}"></div>
      <div class="field"><label for="planHours">Study hours per week</label><select id="planHours">${[4, 6, 8, 10, 12, 15, 20].map(h => `<option ${+S.plan.hours === h ? 'selected' : ''}>${h}</option>`).join('')}</select></div>
    </div></div>
    <div id="planOut"></div>
    ${disclaimer()}
  </div>`;
  $('#planDate').addEventListener('change', e => { S.plan.date = e.target.value; save(); viewPlan(); });
  $('#planHours').addEventListener('change', e => { S.plan.hours = +e.target.value; save(); viewPlan(); });
  renderPlan(target, example);
}
function renderPlan(target, example) {
  const now = new Date(); now.setHours(0, 0, 0, 0);
  const days = Math.floor((target - now) / 864e5);
  const todo = MODULES.filter(m => status(m.id) !== 'done');
  const out = $('#planOut');
  if (days < 0) { out.innerHTML = '<div class="notice">That date has passed. Choose a future exam date to build a plan.</div>'; return; }
  const weeks = Math.max(1, Math.ceil(days / 7));
  const hrs = +S.plan.hours;
  const head = `<div class="${example ? 'notice' : 'card'} stack" style="gap:6px">
    ${example ? '<strong>Example schedule for an exam 8 weeks from today. Set your exam date above to make it yours.</strong>' : ''}
    <span><strong>${days}</strong> day${days === 1 ? '' : 's'} until your exam (${target.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}) · <strong>${todo.length}</strong> module${todo.length === 1 ? '' : 's'} left · <strong>${hrs}</strong> hours a week</span>
    ${weeks < 3 && todo.length > 6 ? '<span style="color:var(--warn)">This is a tight schedule. Consider more weekly hours or a later exam date.</span>' : ''}
  </div>`;
  if (!todo.length) { out.innerHTML = head + '<div class="card" style="margin-top:12px">All modules are completed. Spend each remaining week taking a full practice exam, then reviewing your weak areas and the math module.</div>'; return; }
  const studyWeeks = weeks >= 2 ? weeks - 1 : 1;
  // Financing (12) and math (18) count double because they take longer to learn.
  const weight = m => (m.id === 18 || m.id === 12 ? 2 : 1);
  const totalW = todo.reduce((a, m) => a + weight(m), 0);
  const perWeek = totalW / studyWeeks;
  const plan = Array.from({ length: studyWeeks }, () => []);
  let acc = 0;
  todo.forEach(m => { const w = Math.min(studyWeeks - 1, Math.floor(acc / perWeek)); plan[w].push(m); acc += weight(m); });
  const start = new Date(now);
  const html = plan.map((mods, w) => {
    const ws = new Date(start.getTime() + w * 7 * 864e5), we = new Date(Math.min(ws.getTime() + 6 * 864e5, target.getTime()));
    const mid = w === Math.floor(studyWeeks / 2) && studyWeeks > 2;
    return `<div class="week"><div class="week-label"><strong>Week ${w + 1}</strong>${ws.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })} – ${we.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</div>
      <div>${mods.length ? `<div>${mods.map(m => `<a href="#module-${m.id}">Module ${pad2(m.id)}: ${esc(m.title)}</a>`).join('<br>')}</div>
      <ul class="muted" style="font-size:.9rem"><li>About ${Math.round(hrs / Math.max(mods.length, 1) * 10) / 10} hours per module: read the lesson, study the flashcards, pass the quiz with ${PASS}%+.</li>${mid ? '<li>Midpoint check: take one full practice exam this weekend.</li>' : ''}${mods.some(m => m.id === 18) ? '<li>Math week: work every calculator example by hand before checking it.</li>' : ''}</ul>`
      : '<span class="muted">Catch-up week: retake any quiz under 80% and review flashcards.</span>'}</div></div>`;
  }).join('');
  const review = weeks >= 2 ? `<div class="week review"><div class="week-label"><strong>Final week</strong>Exam week</div><div>
    <ul style="margin:0"><li>Take two full timed practice exams, at least two days apart.</li><li>Study the modules on your <a href="#weak">weak-area list</a>.</li><li>Review Module 19 (state rules) and Module 20 (exam strategy).</li><li>Confirm your test-center appointment, ID requirements and arrival time.</li></ul></div></div>` : '';
  out.innerHTML = head + `<div class="weeks" style="margin-top:12px">${html}${review}</div>`;
}

/* ===================== Events ===================== */
document.addEventListener('click', e => {
  const gl = e.target.closest('.gl'); if (gl) { showTerm(gl.dataset.term); return; }
  const b = e.target.closest('[data-act]'); if (!b) return;
  const a = b.dataset.act, k = b.dataset.k;
  const m = curMod && MOD(curMod);
  switch (a) {
    case 'modfilter': modFilter = k; viewModules(); break;
    case 'tab': modTab = k; $$('.tab').forEach(t => t.setAttribute('aria-selected', t.dataset.k === k)); renderTab(); if (b.classList.contains('btn')) window.scrollTo(0, 0); break;
    case 'markread': mp(curMod).read = true; save(); viewModule(curMod); updateSide(); break;
    case 'flip': fc.flipped = !fc.flipped; b.classList.toggle('flipped', fc.flipped); break;
    case 'fcknow': fcAdvance(true); break;
    case 'fcagain': fcAdvance(false); break;
    case 'fcprev': { fc.flipped = false; const n = fc.onlyNew ? fc.order.filter(i => !mp(curMod).known.includes(m.terms[i][0])).length : fc.order.length; fc.i = (fc.i - 1 + n) % n; renderCards(); break; }
    case 'fcshuffle': fc.order = shuffle(fc.order); fc.i = 0; fc.flipped = false; renderCards(); break;
    case 'fcnew': fc.onlyNew = !fc.onlyNew; fc.i = 0; fc.flipped = false; renderCards(); break;
    case 'qpick': {
      if (quiz.picks[quiz.i] !== undefined) break;
      const pick = +k; quiz.picks[quiz.i] = pick; record(curMod, quiz.i, pick === m.quiz[quiz.i][2]); save(); renderQuiz(); break;
    }
    case 'qnext':
      if (quiz.i + 1 < m.quiz.length) quiz.i++;
      else {
        quiz.done = true; const p = mp(curMod);
        const pct = Math.round(100 * quiz.picks.filter((pk, n) => pk === m.quiz[n][2]).length / m.quiz.length);
        p.attempts++; p.best = p.best === null ? pct : Math.max(p.best, pct); save(); updateSide();
        const pl = $('.mod-head .pill'); if (pl) pl.outerHTML = pill(status(curMod));
      }
      renderQuiz(); $('#tabBody').scrollIntoView({ block: 'start' }); break;
    case 'qretry': quiz = newQuiz(m); renderQuiz(); break;
    case 'calcex': { const c = CALCS.find(x => x.id === b.dataset.c); c.inputs.forEach(([kk, , d]) => { $(`#c-${c.id}-${kk}`).value = d; }); runCalc(c); break; }
    case 'examstart': S.run = buildExam(); showConfirm = false; save(); location.hash === '#exam' ? viewExam() : (location.hash = '#exam'); window.scrollTo(0, 0); break;
    case 'exampick': S.run.ans[S.run.cur] = +k; save(); renderExamRun(); break;
    case 'examnext': S.run.cur = Math.min(S.run.qs.length - 1, S.run.cur + 1); save(); renderExamRun(); break;
    case 'examprev': S.run.cur = Math.max(0, S.run.cur - 1); save(); renderExamRun(); break;
    case 'examgo': S.run.cur = +k; save(); renderExamRun(); break;
    case 'examflag': { const f = S.run.flags; const i = f.indexOf(S.run.cur); if (i >= 0) f.splice(i, 1); else f.push(S.run.cur); save(); renderExamRun(); break; }
    case 'examsubmitask': showConfirm = true; renderExamRun(); window.scrollTo(0, 0); break;
    case 'examcancel': showConfirm = false; renderExamRun(); break;
    case 'examsubmit': clearInterval(timerHandle); submitExam(); window.scrollTo(0, 0); break;
    case 'examreview': reviewFilter = 'missed'; renderExamResult(); break;
    case 'revfilter': reviewFilter = k; renderExamResult(); break;
  }
});
document.addEventListener('keydown', e => {
  if (!fc || modTab !== 'cards' || !$('.fc')) return;
  if (e.target.closest('input, select, textarea')) return;
  if (e.key === ' ' && !e.target.closest('button:not(.fc)')) { e.preventDefault(); $('.fc').click(); }
  else if (e.key === 'ArrowRight') fcAdvance(null);
  else if (e.key === 'ArrowLeft') $('[data-act="fcprev"]').click();
});

// If a timed exam ran out while the page was closed, score it on return.
if (S.run && examLeft() <= 0) submitExam();
route();
