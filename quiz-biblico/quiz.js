let currentQuestionIndex = 0;
let score = 0;
const totalQuestions = 30;  // Total de perguntas no quiz

const questions = [
  {
    question: "Quem traiu Jesus?",
    answers: ["Judas", "Pedro", "João", "Tiago"],
    correctAnswer: 0
  },
  {
    question: "Qual é o primeiro livro da Bíblia?",
    answers: ["Gênesis", "Êxodo", "Levítico", "Deuteronômio"],
    correctAnswer: 0
  },
  {
    question: "Quem foi o líder que conduziu os israelitas para fora do Egito?",
    answers: ["Moisés", "Josué", "Davi", "Abraão"],
    correctAnswer: 0
  },
  // Continue com as outras perguntas aqui (total de 30)
];

function loadQuestion() {
  if (currentQuestionIndex < totalQuestions) {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
    const answers = document.querySelectorAll('.answer');
    answers.forEach((answer, index) => {
      answer.textContent = currentQuestion.answers[index];
      answer.classList.remove('correct', 'incorrect');
      answer.setAttribute('onclick', `checkAnswer(${index})`);
    });
  } else {
    showResult();
  }
}

function checkAnswer(selectedAnswer) {
  const correctAnswer = questions[currentQuestionIndex].correctAnswer;
  const answers = document.querySelectorAll('.answer');
  answers[selectedAnswer].classList.add(selectedAnswer === correctAnswer ? 'correct' : 'incorrect');
  if (selectedAnswer === correctAnswer) {
    score++;
  }
  setTimeout(() => {
    currentQuestionIndex++;
    loadQuestion();
    updateScore();
  }, 1000);
}

function updateScore() {
  document.getElementById('score').textContent = `Pontuação: ${score}`;
}

function showResult() {
  const resultMessage = score === totalQuestions
    ? "Você acertou todas as perguntas! Parabéns!"
    : `Você acertou ${score} de ${totalQuestions} perguntas.`;
  document.getElementById('result').textContent = resultMessage;
  document.getElementById('quiz-container').style.display = 'none';
}

window.onload = loadQuestion;
