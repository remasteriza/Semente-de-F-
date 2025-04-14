const perguntas = [
    // Fase 1
    { fase: 1, pergunta: "Quem foi o primeiro homem?", alternativas: ["Adão", "Moisés", "Noé", "Abraão"], correta: 0 },
    { fase: 1, pergunta: "Quem construiu a arca?", alternativas: ["Noé", "Moisés", "Abraão", "Davi"], correta: 0 },
    { fase: 1, pergunta: "Quem foi lançado na cova dos leões?", alternativas: ["Daniel", "José", "Elias", "Pedro"], correta: 0 },
    { fase: 1, pergunta: "Quem abriu o mar?", alternativas: ["Moisés", "Abraão", "Jesus", "Josué"], correta: 0 },
    { fase: 1, pergunta: "Qual o primeiro livro da Bíblia?", alternativas: ["Gênesis", "Êxodo", "Salmos", "Mateus"], correta: 0 },
    { fase: 1, pergunta: "Quantos discípulos Jesus teve?", alternativas: ["12", "7", "70", "10"], correta: 0 },
  
    // Fase 2
    { fase: 2, pergunta: "Quem traiu Jesus?", alternativas: ["Pedro", "Tiago", "Judas", "João"], correta: 2 },
    { fase: 2, pergunta: "Quem escreveu Apocalipse?", alternativas: ["João", "Paulo", "Pedro", "Lucas"], correta: 0 },
    { fase: 2, pergunta: "Quem foi o gigante derrotado por Davi?", alternativas: ["Golias", "Saul", "Esaú", "Caim"], correta: 0 },
    { fase: 2, pergunta: "Quem foi mãe de Jesus?", alternativas: ["Maria", "Marta", "Sara", "Ana"], correta: 0 }
  ];
  
  let faseAtual = 1;
  let perguntaIndex = 0;
  
  function getPerguntasFase(fase) {
    return perguntas.filter(p => p.fase === fase);
  }
  
  function mostrarPergunta() {
    const perguntasFase = getPerguntasFase(faseAtual);
  
    if (perguntaIndex >= perguntasFase.length) {
      document.getElementById("question").innerText = `Fase ${faseAtual} concluída!`;
      document.getElementById("alternatives").innerHTML = "";
      document.getElementById("nextPhaseBtn").style.display = "inline-block";
      document.getElementById("restartBtn").style.display = "inline-block";
      return;
    }
  
    const pergunta = perguntasFase[perguntaIndex];
    document.getElementById("question").innerText = pergunta.pergunta;
  
    const altDiv = document.getElementById("alternatives");
    altDiv.innerHTML = "";
    pergunta.alternativas.forEach((alt, i) => {
      const btn = document.createElement("button");
      btn.innerText = alt;
      btn.onclick = () => verificarResposta(i, pergunta.correta);
      altDiv.appendChild(btn);
    });
  
    document.getElementById("nextPhaseBtn").style.display = "none";
    document.getElementById("restartBtn").style.display = "none";
  }
  
  function verificarResposta(escolhida, correta) {
    const botoes = document.querySelectorAll("#alternatives button");
    botoes.forEach((btn, i) => {
      btn.disabled = true;
      btn.style.backgroundColor = i === correta ? "#4caf50" : "#e57373";
    });
  
    setTimeout(() => {
      perguntaIndex++;
      mostrarPergunta();
    }, 1000);
  }
  
  function iniciarProximaFase() {
    faseAtual++;
    perguntaIndex = 0;
    mostrarPergunta();
  }
  
  function reiniciar() {
    faseAtual = 1;
    perguntaIndex = 0;
    mostrarPergunta();
  }
  
  function voltarInicio() {
    window.location.href = "../index.html";
  }
  
  mostrarPergunta();
  