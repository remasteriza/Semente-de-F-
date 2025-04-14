const questions = [
    {
      question: "Quem foi o primeiro rei de Israel?",
      alternatives: ["Saul", "Davi", "Salomão", "Saul e Davi"],
      correctAnswerIndex: 0
    },
    {
      question: "Qual versículo fala sobre a força que vem de Deus?",
      alternatives: ["Filipenses 4:13", "João 3:16", "Gênesis 1:1", "Mateus 28:18"],
      correctAnswerIndex: 0
    },
    {
      question: "Quem negou Jesus três vezes?",
      alternatives: ["Pedro", "João", "Tiago", "Paulo"],
      correctAnswerIndex: 0
    },
    {
      question: "Qual discípulo foi conhecido como o 'discípulo amado'?",
      alternatives: ["Pedro", "João", "Tiago", "André"],
      correctAnswerIndex: 1
    },
    {
      question: "Quem foi lançado na cova dos leões?",
      alternatives: ["Moisés", "Elias", "Daniel", "Jonas"],
      correctAnswerIndex: 2
    },
    {
      question: "Quem foi a mãe de Samuel?",
      alternatives: ["Ana", "Rebeca", "Sara", "Raquel"],
      correctAnswerIndex: 0
    },
    {
      question: "Qual é o livro que fala sobre a criação do mundo?",
      alternatives: ["Êxodo", "Gênesis", "Levítico", "Números"],
      correctAnswerIndex: 1
    },
    {
      question: "Quem traiu Jesus por 30 moedas de prata?",
      alternatives: ["Pedro", "Judas Iscariotes", "João", "Tomé"],
      correctAnswerIndex: 1
    },
    {
      question: "Qual apóstolo escreveu a maior parte do Novo Testamento?",
      alternatives: ["Pedro", "João", "Paulo", "Tiago"],
      correctAnswerIndex: 2
    },
    {
      question: "Qual era o nome de Jesus em hebraico?",
      alternatives: ["Isaías", "Yeshua", "Emmanuel", "Jeová"],
      correctAnswerIndex: 1
    },
    {
      question: "Quem foi o profeta que desafiou os profetas de Baal no monte Carmelo?",
      alternatives: ["Elias", "Eliseu", "Moisés", "Jeremias"],
      correctAnswerIndex: 0
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const alternativesElements = document.querySelectorAll(".alternative");
  const nextButton = document.getElementById("next-btn");
  
  function loadQuestion() {
    const questionData = questions[currentQuestionIndex];
    questionElement.textContent = questionData.question;
  
    alternativesElements.forEach((alternative, index) => {
      alternative.textContent = questionData.alternatives[index];
      alternative.classList.remove("correct", "wrong");
      alternative.addEventListener("click", () => handleAnswer(index));
    });
  
    nextButton.style.display = "none"; // Esconde o botão até o usuário responder
  }
  
  function handleAnswer(selectedIndex) {
    const questionData = questions[currentQuestionIndex];
    const isCorrect = selectedIndex === questionData.correctAnswerIndex;
  
    if (isCorrect) {
      score++;
      alternativesElements[selectedIndex].classList.add("correct");
    } else {
      alternativesElements[selectedIndex].classList.add("wrong");
      alternativesElements[questionData.correctAnswerIndex].classList.add("correct");
    }
  
    nextButton.style.display = "block"; // Mostra o botão para a próxima pergunta
  }
  
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      alert(`Fim do Quiz! Você acertou ${score} de ${questions.length} perguntas.`);
      // Aqui você pode salvar o progresso no localStorage ou redirecionar para outra página
    }
  });
  
  loadQuestion(); // Carrega a primeira pergunta
  