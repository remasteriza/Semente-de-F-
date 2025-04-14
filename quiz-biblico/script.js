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
    { fase: 2, pergunta: "Quem foi mãe de Jesus?", alternativas: ["Maria", "Marta", "Sara", "Ana"], correta: 0 },
    { fase: 2, pergunta: "Onde Jesus nasceu?", alternativas: ["Belém", "Jerusalém", "Nazaré", "Egito"], correta: 0 },
    { fase: 2, pergunta: "Quem negou Jesus três vezes?", alternativas: ["Pedro", "João", "Tiago", "Tomé"], correta: 0 },
  
    // Fase 3
    { fase: 3, pergunta: "Qual o nome do mar que Moisés abriu?", alternativas: ["Mar Vermelho", "Mar da Galileia", "Mar Morto", "Mar Egeu"], correta: 0 },
    { fase: 3, pergunta: "Qual o nome do traidor de Jesus?", alternativas: ["Judas Iscariotes", "Pedro", "Tiago", "Tomé"], correta: 0 },
    { fase: 3, pergunta: "Qual era a profissão de Pedro?", alternativas: ["Pescador", "Pastor", "Carpinteiro", "Ferreiro"], correta: 0 },
    { fase: 3, pergunta: "Quem escreveu muitos salmos?", alternativas: ["Davi", "Moisés", "Elias", "Paulo"], correta: 0 },
    { fase: 3, pergunta: "Quem foi levado ao céu num carro de fogo?", alternativas: ["Elias", "Eliseu", "Moisés", "Enoque"], correta: 0 },
    { fase: 3, pergunta: "Quem interpretou sonhos no Egito?", alternativas: ["José", "Daniel", "Moisés", "Abraão"], correta: 0 },
  
    // Fase 4
    { fase: 4, pergunta: "Quem foi o pai de Isaque?", alternativas: ["Abraão", "Jacó", "Esaú", "José"], correta: 0 },
    { fase: 4, pergunta: "Qual o nome do apóstolo que perseguiu cristãos antes de se converter?", alternativas: ["Paulo", "Pedro", "Tiago", "João"], correta: 0 },
    { fase: 4, pergunta: "Quantos dias Jesus jejuou no deserto?", alternativas: ["40", "30", "20", "7"], correta: 0 },
    { fase: 4, pergunta: "Qual o nome da mulher que falou com Jesus no poço?", alternativas: ["Mulher Samaritana", "Maria", "Marta", "Ana"], correta: 0 },
    { fase: 4, pergunta: "Quem foi ressuscitado por Jesus?", alternativas: ["Lázaro", "Pedro", "Elias", "João Batista"], correta: 0 },
    { fase: 4, pergunta: "Qual apóstolo andou sobre as águas com Jesus?", alternativas: ["Pedro", "Tiago", "João", "André"], correta: 0 },
  
    // Fase 5
    { fase: 5, pergunta: "Qual o menor versículo da Bíblia?", alternativas: ["Jesus chorou.", "Deus é amor.", "Orai sem cessar.", "Não matarás."], correta: 0 },
    { fase: 5, pergunta: "Quem escreveu a maioria das cartas do Novo Testamento?", alternativas: ["Paulo", "Pedro", "João", "Tiago"], correta: 0 },
    { fase: 5, pergunta: "Qual o nome do discípulo conhecido como 'o incrédulo'?", alternativas: ["Tomé", "Pedro", "Tiago", "João"], correta: 0 },
    { fase: 5, pergunta: "Quem batizou Jesus?", alternativas: ["João Batista", "Pedro", "Tiago", "Elias"], correta: 0 },
    { fase: 5, pergunta: "Onde Deus deu os 10 mandamentos a Moisés?", alternativas: ["Monte Sinai", "Monte Carmelo", "Monte das Oliveiras", "Monte Tabor"], correta: 0 },
    { fase: 5, pergunta: "O que Deus criou no primeiro dia?", alternativas: ["Luz", "Céu", "Água", "Homem"], correta: 0 }
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
  