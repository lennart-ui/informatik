const tips = [
  {
    title: "Klein anfangen ist clever.",
    copy: "Teile große Aufgaben in winzige Häppchen. Erst „Hallo, Welt!“, dann das nächste Stück. Jeder kleine Erfolg bringt dich weiter."
  },
  {
    title: "Fehler sind Hinweise.",
    copy: "Lies Fehlermeldungen langsam und ganz bis zum Ende. Sie verraten oft schon, in welcher Datei und Zeile du nachsehen solltest."
  },
  {
    title: "Gib Dingen gute Namen.",
    copy: "Ein Name wie anzahlVersuche sagt mehr als x. Verständlicher Code hilft dir selbst und allen, die später mitlesen."
  }
];

const facts = [
  "Pinguine können nicht fliegen. Dafür sind sie unter Wasser echte Raketen und schwimmen je nach Art bis zu 36 km/h.",
  "Kaiserpinguine brüten ihr Ei auf den Füßen aus. Eine warme Hautfalte schützt es dabei vor der antarktischen Kälte.",
  "Das schwarz-weiße Gefieder tarnt Pinguine im Wasser: Von oben verschmelzen ihre dunklen Rücken mit dem Meer, von unten ihre hellen Bäuche mit dem Licht.",
  "Pinguine leben nicht nur im Eis. Galápagos-Pinguine wohnen nahe am Äquator, wo es angenehm warm ist."
];

let currentTip = 0;
let currentFact = 0;

const tipTitle = document.querySelector("#tip-title");
const tipCopy = document.querySelector("#tip-copy");
const tipNumber = document.querySelector("#tip-number");
const tipCount = document.querySelector("#tip-count");
const tipProgress = document.querySelector("#tip-progress-fill");
const factText = document.querySelector("#fact-text");
const factIndex = document.querySelector("#fact-index");

document.querySelector("#next-tip").addEventListener("click", () => {
  currentTip = (currentTip + 1) % tips.length;
  const number = String(currentTip + 1).padStart(2, "0");
  tipTitle.textContent = tips[currentTip].title;
  tipCopy.textContent = tips[currentTip].copy;
  tipNumber.textContent = number;
  tipCount.textContent = `TIPP ${number} / ${String(tips.length).padStart(2, "0")}`;
  tipProgress.style.width = `${((currentTip + 1) / tips.length) * 100}%`;
});

document.querySelector("#next-fact").addEventListener("click", () => {
  currentFact = (currentFact + 1) % facts.length;
  factText.textContent = facts[currentFact];
  factIndex.textContent = `FAKT ${String(currentFact + 1).padStart(2, "0")}`;
});

document.querySelectorAll(".penguin-friend").forEach((penguin) => {
  penguin.addEventListener("click", () => {
    document.querySelector("#friend-response").textContent = penguin.dataset.message;
    penguin.classList.remove("is-reacting");
    requestAnimationFrame(() => penguin.classList.add("is-reacting"));
    window.setTimeout(() => penguin.classList.remove("is-reacting"), 700);
  });
});
