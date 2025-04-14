const perguntas = [
    // Fase 1
    { fase: 1, pergunta: "Quem foi o primeiro homem criado por Deus?", alternativas: ["Noé", "Adão", "Moisés", "Abraão"], correta: 1 },
    { fase: 1, pergunta: "Quem construiu a arca para escapar do dilúvio?", alternativas: ["Davi", "Salomão", "Noé", "Jacó"], correta: 2 },
    { fase: 1, pergunta: "Qual foi o jardim onde Deus colocou Adão e Eva?", alternativas: ["Jardim do Éden", "Monte Sião", "Jerusalém", "Deserto do Sinai"], correta: 0 },
  
    // Fase 2
    { fase: 2, pergunta: "Quem libertou os israelitas da escravidão no Egito?", alternativas: ["Josué", "Moisés", "Elias", "Samuel"], correta: 1 },
    { fase: 2, pergunta: "Qual dos discípulos andou sobre as águas com Jesus?", alternativas: ["João", "Pedro", "Tiago", "Tomé"], correta: 1 },
    { fase: 2, pergunta: "Quem interpretava sonhos na prisão e no palácio do Egito?", alternativas: ["Daniel", "José", "Moisés", "Ezequiel"], correta: 1 },
  
    // Fase 3
    { fase: 3, pergunta: "Quem foi lançado na cova dos leões?", alternativas: ["Elias", "Daniel", "Ezequias", "Paulo"], correta: 1 },
    { fase: 3, pergunta: "Onde Jesus foi crucificado?", alternativas: ["Monte das Oliveiras", "Monte Carmelo", "Gólgota", "Monte Sinai"], correta: 2 },
    { fase: 3, pergunta: "Quem traiu Jesus por 30 moedas de prata?", alternativas: ["Pedro", "Tomé", "Judas Iscariotes", "André"], correta: 2 },
  
    // Fase 4
    { fase: 4, pergunta: "Qual rei escreveu muitos provérbios?", alternativas: ["Salomão", "Davi", "Saul", "Josias"], correta: 0 },
    { fase: 4, pergunta: "Quem matou Golias com uma funda?", alternativas: ["Saul", "Davi", "Esaú", "Jacó"], correta: 1 },
    { fase: 4, pergunta: "Quem era a esposa de Abraão?", alternativas: ["Rebeca", "Raquel", "Sara", "Marta"], correta: 2 },
  
    // Fase 5
    { fase: 5, pergunta: "Qual livro da Bíblia fala da criação do mundo?", alternativas: ["Levítico", "Gênesis", "Salmos", "Eclesiastes"], correta: 1 },
    { fase: 5, pergunta: "Qual o nome do irmão de Moisés?", alternativas: ["Josué", "Elias", "Arão", "Calebe"], correta: 2 },
    { fase: 5, pergunta: "Qual o nome da mulher que virou estátua de sal?", alternativas: ["Ana", "Mulher de Ló", "Maria", "Débora"], correta: 1 },
  
    // Fase 6
    { fase: 6, pergunta: "Quem foi jogado na fornalha ardente?", alternativas: ["Sadraque, Mesaque e Abede-Nego", "Pedro e João", "Paulo e Silas", "José e seus irmãos"], correta: 0 },
    { fase: 6, pergunta: "Quem foi arrebatado ao céu sem morrer?", alternativas: ["Elias", "Isaías", "Davi", "Abraão"], correta: 0 },
    { fase: 6, pergunta: "Quem escreveu o livro de Apocalipse?", alternativas: ["Pedro", "Tiago", "João", "Paulo"], correta: 2 },
  
    // Fase 7
    { fase: 7, pergunta: "Quem era conhecido como o 'amado' discípulo?", alternativas: ["João", "Tiago", "Pedro", "André"], correta: 0 },
    { fase: 7, pergunta: "Quem batizou Jesus?", alternativas: ["João Batista", "Pedro", "Elias", "Tiago"], correta: 0 },
    { fase: 7, pergunta: "Qual discípulo duvidou da ressurreição de Jesus?", alternativas: ["João", "Tomé", "Pedro", "Mateus"], correta: 1 },
  
    // Fase 8
    { fase: 8, pergunta: "Qual profeta foi engolido por um grande peixe?", alternativas: ["Jonas", "Daniel", "Elias", "Jeremias"], correta: 0 },
    { fase: 8, pergunta: "Quem escreveu muitos Salmos?", alternativas: ["Davi", "Salomão", "Moisés", "Asafe"], correta: 0 },
    { fase: 8, pergunta: "Qual foi o primeiro milagre de Jesus?", alternativas: ["Curar um cego", "Transformar água em vinho", "Ressuscitar Lázaro", "Multiplicar pães"], correta: 1 },
  
    // Fase 9
    { fase: 9, pergunta: "Quem foi o primeiro rei de Israel?", alternativas: ["Davi", "Salomão", "Saul", "Josias"], correta: 2 },
    { fase: 9, pergunta: "Qual o nome da sogra de Rute?", alternativas: ["Noemi", "Ana", "Maria", "Raquel"], correta: 0 },
    { fase: 9, pergunta: "Quem foi o profeta que desafiou os profetas de Baal?", alternativas: ["Eliseu", "Elias", "Isaías", "Zacarias"], correta: 1 },
  
    // Fase 10
    { fase: 10, pergunta: "Quantos dias Jesus jejuou no deserto?", alternativas: ["21", "30", "40", "10"], correta: 2 },
    { fase: 10, pergunta: "Quem escreveu mais cartas no Novo Testamento?", alternativas: ["Pedro", "Tiago", "João", "Paulo"], correta: 3 },
    { fase: 10, pergunta: "Quem era o filho de Abraão com Sara?", alternativas: ["Isaque", "Ismael", "Jacó", "Esaú"], correta: 0 },
  
    // Fase 11
    { fase: 11, pergunta: "Qual discípulo foi conhecido por cortar a orelha de um soldado?", alternativas: ["Pedro", "Tomé", "Tiago", "João"], correta: 0 },
    { fase: 11, pergunta: "Em qual livro encontramos a armadura de Deus?", alternativas: ["Efésios", "Romanos", "Gálatas", "Colossenses"], correta: 0 },
    { fase: 11, pergunta: "Qual personagem sonhou com uma escada que chegava ao céu?", alternativas: ["Jacó", "José", "Samuel", "Elias"], correta: 0 },
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
  