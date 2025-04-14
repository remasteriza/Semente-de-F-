const questions = [
    {
      question: "Qual é o primeiro livro da Bíblia?",
      answers: ["Gênesis", "Êxodo", "Levítico", "Deuteronômio"],
      correct: 0
    },
    {
      question: "Quem foi o primeiro rei de Israel?",
      answers: ["Saul", "Davi", "Salomão", "Samuel"],
      correct: 0
    },
    {
      question: "Quem traiu Jesus?",
      answers: ["Judas", "Pedro", "Tiago", "Tomé"],
      correct: 0
    },
    {
      question: "Qual é o menor versículo da Bíblia?",
      answers: ["Jesus chorou", "Deus é amor", "Tudo posso naquele que me fortalece", "O Senhor é meu pastor"],
      correct: 0
    }
  ];
  
  let currentQuestion = 0;
  
  function loadQuestion() {
    const question = questions[currentQuestion];
    document.getElementById("question").textContent = question.question;
    document.getElementById("answer1").textContent = question.answers[0];
    document.getElementById("answer2").textContent = question.answers[1];
    document.getElementById("answer3").textContent = question.answers[2];
    document.getElementById("answer4").textContent = question.answers[3];
  
    const answerButtons = document.querySelectorAll(".answer");
    answerButtons.forEach((button, index) => {
      button.onclick = () => checkAnswer(index);
    });
  }
  
  function checkAnswer(selectedIndex) {
    const question = questions[currentQuestion];
    const answerButtons = document.querySelectorAll(".answer");
  
    if (selectedIndex === question.correct) {
      answerButtons[selectedIndex].style.backgroundColor = "green"; // Resposta correta
    } else {
      answerButtons[selectedIndex].style.backgroundColor = "red"; // Resposta errada
    }
  
    // Desabilitar botões de resposta depois de uma escolha
    answerButtons.forEach(button => button.disabled = true);
  
    // Exibir o botão de próxima pergunta
    document.getElementById("next-button").style.display = "block";
  }
  
  function nextQuestion() {
    // Avançar para a próxima pergunta
    currentQuestion++;
  
    // Se não houver mais perguntas, exibe o botão de reiniciar
    if (currentQuestion < questions.length) {
      loadQuestion();
      document.getElementById("next-button").style.display = "none";
    } else {
      document.getElementById("next-button").style.display = "none";
      document.getElementById("restart-button").style.display = "block";
    }
  }
  
  function restartQuiz() {
    currentQuestion = 0;
    loadQuestion();
    document.getElementById("restart-button").style.display = "none";
    document.getElementById("next-button").style.display = "none";
    const answerButtons = document.querySelectorAll(".answer");
    answerButtons.forEach(button => button.disabled = false);
  }
  
  // Carregar a primeira pergunta
  loadQuestion();
  