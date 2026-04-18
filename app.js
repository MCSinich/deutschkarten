const placeholder = document.getElementById("placeholder");
const content = document.getElementById("content");
const wordEl = document.getElementById("word");
const hintEl = document.getElementById("hint");
const translationEl = document.getElementById("translation");
const usageEl = document.getElementById("usage");
const examplesEl = document.getElementById("examples");
const hintBtn = document.getElementById("hintBtn");
const nextBtn = document.getElementById("nextBtn");

let currentWord = null;

function pickRandomWord() {
  const idx = Math.floor(Math.random() * WORDS.length);
  return WORDS[idx];
}

function showNextWord() {
  currentWord = pickRandomWord();
  wordEl.textContent = currentWord.word;

  translationEl.textContent = currentWord.translation;
  usageEl.textContent = currentWord.usage;
  examplesEl.innerHTML = "";
  for (const ex of currentWord.examples) {
    const li = document.createElement("li");
    li.textContent = ex;
    examplesEl.appendChild(li);
  }

  hintEl.classList.add("hidden");
  placeholder.classList.add("hidden");
  content.classList.remove("hidden");
  hintBtn.disabled = false;
  hintBtn.textContent = "Подсказка";
}

function toggleHint() {
  const isHidden = hintEl.classList.contains("hidden");
  hintEl.classList.toggle("hidden");
  hintBtn.textContent = isHidden ? "Скрыть подсказку" : "Подсказка";
}

nextBtn.addEventListener("click", showNextWord);
hintBtn.addEventListener("click", toggleHint);
