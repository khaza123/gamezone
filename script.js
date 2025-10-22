const quizData = [
  { q: "Who is the mascot of Nintendo?", a: "Mario", options: ["Sonic", "Mario", "Pikachu"] },
  { q: "Which game features the character Master Chief?", a: "Halo", options: ["Halo", "Call of Duty", "GTA"] },
  { q: "Which company made the PlayStation console?", a: "Sony", options: ["Microsoft", "Sony", "Sega"] }
];
let current = 0, score = 0;
const quizContainer = document.getElementById('quiz-container');
const result = document.getElementById('result');
const nextBtn = document.getElementById('nextBtn');

function loadQuiz() {
  const data = quizData[current];
  quizContainer.innerHTML = `<h3>${data.q}</h3>` + 
    data.options.map(opt => `<button class='optBtn'>${opt}</button>`).join('');
  document.querySelectorAll('.optBtn').forEach(btn => {
    btn.onclick = () => checkAnswer(btn.textContent);
  });
}
function checkAnswer(selected) {
  if (selected === quizData[current].a) {
    score++;
    result.textContent = "✅ Correct!";
    result.style.color = "#0f0";
  } else {
    result.textContent = "❌ Wrong!";
    result.style.color = "#f00";
  }
  nextBtn.style.display = "block";
}
nextBtn.onclick = () => {
  current++;
  if (current < quizData.length) {
    result.textContent = "";
    nextBtn.style.display = "none";
    loadQuiz();
  } else {
    quizContainer.innerHTML = `<h3>You scored ${score}/${quizData.length}</h3>`;
    nextBtn.style.display = "none";
  }
};
loadQuiz();
