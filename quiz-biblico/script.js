// Lista de perguntas por fase
const questions = [
  { // Fase 1: Introdução
    phase: "Fase 1: Introdução",
    questions: [
      {
        question: "Qual é o primeiro livro da Bíblia?",
        options: ["Gênesis", "Mateus", "Apocalipse", "Salmos"],
        correctAnswer: 0
      },
      {
        question: "Quem foi o primeiro rei de Israel?",
        options: ["Saul", "Davi", "Salomão", "Josué"],
        correctAnswer: 0
      }
    ]
  },
  { // Fase 2: Vida de Jesus
    phase: "Fase 2: Vida de Jesus",
    questions: [
      {
        question: "Quantos discípulos Jesus teve?",
        options: ["12", "10", "14", "7"],
        correctAnswer: 0
      },
      {
        question: "Quem traiu Jesus?",
        options: ["Judas", "Pedro", "Tiago", "Paulo"],
        correctAnswer: 0
      }
    ]
  },
  { // Fase 3: Apóstolos
    phase: "Fase 3: Apóstolos",
    questions: [
      {
        question: "Quem escreveu a maioria das cartas do Novo Testamento?",
        options: ["Paulo", "João", "Pedro", "Tiago"],
        correctAnswer: 0
      },
      {
        question: "Qual apóstolo negou Jesus três vezes?",
        options: ["Pedro", "Tomé", "André", "Felipe"],
        correctAnswer: 0
      }
    ]
  }
];

let currentPhaseIndex = 0;
let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById('quiz-container');
const nextButton = document.getElementById('next-button');
const backButton = document.getElementById('back-button');

// Função para carregar uma pergunta e fase
function loadQuestion() {
  const phase = questions[currentPhaseIndex];
  const question = phase.questions[currentQuestionIndex];

  quizContainer.innerHTML = `
    <h3>${phase.phase}</h3>
    <p>${question.question}</p>
    <ul>
      ${question.options.map((option, index) => 
        `<li onclick="checkAnswer(${index})">${option}</li>`
      ).join('')}
    </ul>
  `;
}

// Função para verificar a resposta do usuário
function checkAnswer(selectedIndex) {
  const phase = questions[currentPhaseIndex];
  const question = phase.questions[currentQuestionIndex];

  if (selectedIndex === question.correctAnswer) {
    score++;
  }

  // Avançar para a próxima pergunta ou fase
  if (currentQuestionIndex < phase.questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  } else {
    if (currentPhaseIndex < questions.length - 1) {
      currentPhaseIndex++;
      currentQuestionIndex = 0;
      loadQuestion();
    } else {
      showResults();
    }
  }
}

// Função para mostrar o resultado final
function showResults() {
  quizContainer.innerHTML = `
    <h3>Quiz Concluído!</h3>
    <p>Sua pontuação: ${score} de ${questions.reduce((acc, phase) => acc + phase.questions.length, 0)}</p>
    <button onclick="restartQuiz()">Reiniciar Quiz</button>
  `;
  nextButton.style.display = 'none'; // Esconder o botão "Próxima Pergunta"
  backButton.style.display = 'block'; // Mostrar o botão "Voltar ao Início"
}

// Função para reiniciar o quiz
function restartQuiz() {
  score = 0;
  currentPhaseIndex = 0;
  currentQuestionIndex = 0;
  loadQuestion();
  nextButton.style.display = 'block';
  backButton.style.display = 'none';
}

// Função para voltar ao início
backButton.addEventListener('click', function() {
  window.location.href = '../index.html'; // Vai para a página inicial
});

// Carregar a primeira pergunta
loadQuestion();
