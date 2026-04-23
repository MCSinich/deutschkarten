// GROUPS structure (from words.js):
// const GROUPS = [
//   { id, name, words: [ { word, translation, usage, examples, pos } ] }
// ]
// pos: "noun" | "verb" | "adj" | "other"

const state = {
  groupId: null,
  mode: null,    // "single" | "triplet"
  lang: null,    // "de" | "ru"
  current: null, // current card(s)
};

const els = {
  setup: document.getElementById("setup"),
  stepGroup: document.getElementById("stepGroup"),
  stepMode: document.getElementById("stepMode"),
  stepLang: document.getElementById("stepLang"),
  groupList: document.getElementById("groupList"),
  backToGroup: document.getElementById("backToGroup"),
  backToMode: document.getElementById("backToMode"),
  trainer: document.getElementById("trainer"),
  trainerInfo: document.getElementById("trainerInfo"),
  backToSetup: document.getElementById("backToSetup"),
  cards: document.getElementById("cards"),
  hintBtn: document.getElementById("hintBtn"),
  nextBtn: document.getElementById("nextBtn"),
};

// --- Rendering setup ---

function renderGroups() {
  els.groupList.innerHTML = "";
  for (const g of GROUPS) {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.innerHTML = `${g.name}<span class="option-sub">${g.words.length} слов</span>`;
    btn.addEventListener("click", () => {
      state.groupId = g.id;
      showStep("mode");
    });
    els.groupList.appendChild(btn);
  }
}

function showStep(step) {
  els.setup.classList.remove("hidden");
  els.trainer.classList.add("hidden");
  els.stepGroup.classList.toggle("hidden", step !== "group");
  els.stepMode.classList.toggle("hidden", step !== "mode");
  els.stepLang.classList.toggle("hidden", step !== "lang");
}

function startTrainer() {
  els.setup.classList.add("hidden");
  els.trainer.classList.remove("hidden");
  const group = GROUPS.find(g => g.id === state.groupId);
  const modeLabel = state.mode === "single" ? "одно слово" : "триплет";
  const langLabel = state.lang === "de" ? "de → ru" : "ru → de";
  els.trainerInfo.textContent = `${group.name} · ${modeLabel} · ${langLabel}`;
  els.cards.className = state.mode === "triplet" ? "cards triplet" : "cards";
  els.cards.innerHTML = "";
  const placeholder = document.createElement("div");
  placeholder.className = "card";
  placeholder.innerHTML = `<div class="card-placeholder">Нажми «Следующее», чтобы начать</div>`;
  els.cards.appendChild(placeholder);
  els.hintBtn.disabled = true;
  els.hintBtn.textContent = "Подсказка";
  state.current = null;
}

// --- Picking words ---

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pickForTrainer() {
  const group = GROUPS.find(g => g.id === state.groupId);
  if (state.mode === "single") {
    return [pickRandom(group.words)];
  }
  const nouns = group.words.filter(w => w.pos === "noun");
  const adjs  = group.words.filter(w => w.pos === "adj");
  const verbs = group.words.filter(w => w.pos === "verb");
  const result = [];
  if (nouns.length) result.push({ ...pickRandom(nouns), _label: "существительное" });
  if (adjs.length)  result.push({ ...pickRandom(adjs),  _label: "прилагательное" });
  if (verbs.length) result.push({ ...pickRandom(verbs), _label: "глагол" });
  return result;
}

// --- Rendering cards ---

function buildCard(entry) {
  const card = document.createElement("div");
  card.className = "card";
  const content = document.createElement("div");
  content.className = "card-content";

  if (entry._label) {
    const pos = document.createElement("div");
    pos.className = "card-pos";
    pos.textContent = entry._label;
    content.appendChild(pos);
  }

  const wordEl = document.createElement("div");
  wordEl.className = "word";
  wordEl.textContent = state.lang === "de" ? entry.word : entry.translation;
  content.appendChild(wordEl);

  const hint = document.createElement("div");
  hint.className = "hint hidden";

  const revealLabel = state.lang === "de" ? "Перевод" : "Немецкое слово";
  const revealText  = state.lang === "de" ? entry.translation : entry.word;

  hint.innerHTML = `
    <div class="hint-block">
      <div class="hint-label">${revealLabel}</div>
      <div class="hint-text">${escapeHtml(revealText)}</div>
    </div>
    <div class="hint-block">
      <div class="hint-label">Когда применяется</div>
      <div class="hint-text">${escapeHtml(entry.usage || "")}</div>
    </div>
    <div class="hint-block">
      <div class="hint-label">Примеры</div>
      <ul class="examples">
        ${(entry.examples || []).map(e => `<li>${escapeHtml(e)}</li>`).join("")}
      </ul>
    </div>
  `;
  content.appendChild(hint);
  card.appendChild(content);
  return card;
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function showNext() {
  state.current = pickForTrainer();
  els.cards.innerHTML = "";
  for (const entry of state.current) {
    els.cards.appendChild(buildCard(entry));
  }
  els.hintBtn.disabled = false;
  els.hintBtn.textContent = "Подсказка";
}

function toggleHint() {
  const hints = els.cards.querySelectorAll(".hint");
  if (!hints.length) return;
  const isHidden = hints[0].classList.contains("hidden");
  hints.forEach(h => h.classList.toggle("hidden", !isHidden));
  els.hintBtn.textContent = isHidden ? "Скрыть подсказку" : "Подсказка";
}

// --- Events ---

renderGroups();
showStep("group");

document.querySelectorAll("#stepMode .option").forEach(btn => {
  btn.addEventListener("click", () => {
    state.mode = btn.dataset.mode;
    showStep("lang");
  });
});

document.querySelectorAll("#stepLang .option").forEach(btn => {
  btn.addEventListener("click", () => {
    state.lang = btn.dataset.lang;
    startTrainer();
  });
});

els.backToGroup.addEventListener("click", () => showStep("group"));
els.backToMode.addEventListener("click", () => showStep("mode"));
els.backToSetup.addEventListener("click", () => showStep("group"));
els.nextBtn.addEventListener("click", showNext);
els.hintBtn.addEventListener("click", toggleHint);
