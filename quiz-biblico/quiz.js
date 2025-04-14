const fases = [
    {
      titulo: "Fase 1",
      perguntas: [
        {
          pergunta: "Quem construiu a arca?",
          opcoes: ["Noé", "Moisés", "Abraão", "Davi"],
          correta: 0
        },
        {
          pergunta: "Qual o primeiro livro da Bíblia?",
          opcoes: ["Gênesis", "Êxodo", "Salmos", "Apocalipse"],
          correta: 0
        },
      ]
    },
    {
      titulo: "Fase 2",
      perguntas: [
        {
          pergunta: "Quem foi lançado na cova dos leões?",
          opcoes: ["Daniel", "José", "Elias", "Paulo"],
          correta: 0
        },
        {
          pergunta: "Quem guiou o povo pelo deserto?",
          opcoes: ["Moisés", "Abraão", "Pedro", "Jesus"],
          correta: 0
        },
      ]
    },
    {
      titulo: "Fase 3",
      perguntas: [
        {
          pergunta: "Quem traiu Jesus?",
          opcoes: ["Judas Iscariotes", "Pedro", "João", "Tomé"],
          correta: 0
        },
        {
          pergunta: "Quantos livros tem a Bíblia?",
          opcoes: ["66", "72", "27", "100"],
          correta: 0
        },
      ]
    },
    {
      titulo: "Fase 4",
      perguntas: [
        {
          pergunta: "Qual era o trabalho de Pedro?",
          opcoes: ["Pescador", "Carpinteiro", "Pastor", "Médico"],
          correta: 0
        },
        {
          pergunta: "Qual foi o primeiro milagre de Jesus?",
          opcoes: ["Transformar água em vinho", "Curar um cego", "Andar sobre as águas", "Multiplicar pães"],
          correta: 0
        },
      ]
    },
    {
      titulo: "Fase 5",
      perguntas: [
        {
          pergunta: "Quem escreveu os Salmos?",
          opcoes: ["Davi", "Salomão", "Isaías", "Paulo"],
          correta: 0
        },
        {
          pergunta: "Onde Jesus nasceu?",
          opcoes: ["Belém", "Jerusalém", "Nazaré", "Egito"],
          correta: 0
        },
      ]
    },
    {
      titulo: "Fase 6",
      perguntas: [
        {
          pergunta: "Quem foi o profeta que desafiou os profetas de Baal?",
          opcoes: ["Elias", "Eliseu", "Jeremias", "Isaías"],
          correta: 0
        },
        {
          pergunta: "Quem interpretou os sonhos do faraó?",
          opcoes: ["José", "Daniel", "Moisés", "Ezequiel"],
          correta: 0
        },
      ]
    },
    {
      titulo: "Fase 7",
      perguntas: [
        {
          pergunta: "Qual era o nome do gigante derrotado por Davi?",
          opcoes: ["Golias", "Sansão", "Caim", "Ninrode"],
          correta: 0
        },
        {
          pergunta: "Quem foi o primeiro rei de Israel?",
          opcoes: ["Saul", "Davi", "Salomão", "Josué"],
          correta: 0
        },
      ]
    },
    {
      titulo: "Fase 8",
      perguntas: [
        {
          pergunta: "Qual livro fala sobre a criação?",
          opcoes: ["Gênesis", "Levítico", "João", "Romanos"],
          correta: 0
        },
        {
          pergunta: "Quem foi arrebatado ao céu em um carro de fogo?",
          opcoes: ["Elias", "Enoque", "Moisés", "Abraão"],
          correta: 0
        },
      ]
    },
    {
      titulo: "Fase 9",
      perguntas: [
        {
          pergunta: "Quem negou Jesus três vezes?",
          opcoes: ["Pedro", "Judas", "Tomé", "João"],
          correta: 0
        },
        {
          pergunta: "O que Jesus multiplicou para alimentar a multidão?",
          opcoes: ["Pães e peixes", "Água e vinho", "Uvas e figos", "Trigo e cevada"],
          correta: 0
        },
      ]
    },
    {
      titulo: "Fase 10",
      perguntas: [
        {
          pergunta: "Quem era conhecido como o 'discípulo amado'?",
          opcoes: ["João", "Pedro", "Tiago", "Tomé"],
          correta: 0
        },
        {
          pergunta: "Quantos dias Jesus ficou no deserto?",
          opcoes: ["40", "30", "7", "12"],
          correta: 0
        },
      ]
    },
    {
      titulo: "Fase 11",
      perguntas: [
        {
          pergunta: "Qual livro vem depois dos Evangelhos?",
          opcoes: ["Atos dos Apóstolos", "Romanos", "Hebreus", "Apocalipse"],
          correta: 0
        },
        {
          pergunta: "Quem escreveu a maioria das cartas do Novo Testamento?",
          opcoes: ["Paulo", "Pedro", "Tiago", "João"],
          correta: 0
        },
      ]
    }
  ];
  
  let faseAtual = 0;
  let perguntaAtual = 0;
  let acertos = 0;
  
  const perguntaEl = document.getElementById("pergunta");
  const opcoesEl = document.getElementById("opcoes");
  const proximaBtn = document.getElementById("proxima");
  const resultadoEl = document.getElementById("resultado");
  const reiniciarBtn = document.getElementById("reiniciar");
  const contadorEl = document.getElementById("contador");
  
  function mostrarPergunta() {
    const fase = fases[faseAtual];
    const perguntaObj = fase.perguntas[perguntaAtual];
  
    perguntaEl.innerHTML = `<h3>${fase.titulo} - ${perguntaObj.pergunta}</h3>`;
    opcoesEl.innerHTML = "";
    contadorEl.innerText = `Pergunta ${perguntaAtual + 1} de ${fase.perguntas.length}`;
  
    perguntaObj.opcoes.forEach((opcao, index) => {
      const botao = document.createElement("button");
      botao.textContent = opcao;
      botao.classList.add("opcao");
      botao.onclick = () => verificarResposta(index);
      opcoesEl.appendChild(botao);
    });
  }
  
  function verificarResposta(selecionado) {
    const perguntaObj = fases[faseAtual].perguntas[perguntaAtual];
  
    const botoes = document.querySelectorAll(".opcao");
    botoes.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === perguntaObj.correta) {
        btn.style.backgroundColor = "green";
        btn.style.color = "white";
      } else if (idx === selecionado) {
        btn.style.backgroundColor = "red";
        btn.style.color = "white";
      }
    });
  
    if (selecionado === perguntaObj.correta) acertos++;
  
    proximaBtn.style.display = "inline-block";
  }
  
  proximaBtn.addEventListener("click", () => {
    perguntaAtual++;
    if (perguntaAtual < fases[faseAtual].perguntas.length) {
      mostrarPergunta();
    } else {
      faseAtual++;
      perguntaAtual = 0;
  
      if (faseAtual < fases.length) {
        mostrarPergunta();
      } else {
        mostrarResultado();
      }
    }
    proximaBtn.style.display = "none";
  });
  
  function mostrarResultado() {
    perguntaEl.style.display = "none";
    opcoesEl.style.display = "none";
    contadorEl.style.display = "none";
    resultadoEl.style.display = "block";
    resultadoEl.innerHTML = `<h2>Quiz concluído!</h2><p>Você acertou ${acertos} de ${fases.reduce((soma, fase) => soma + fase.perguntas.length, 0)} perguntas.</p>`;
    reiniciarBtn.style.display = "inline-block";
  }
  
  reiniciarBtn.addEventListener("click", () => {
    faseAtual = 0;
    perguntaAtual = 0;
    acertos = 0;
  
    perguntaEl.style.display = "block";
    opcoesEl.style.display = "block";
    contadorEl.style.display = "block";
    resultadoEl.style.display = "none";
    reiniciarBtn.style.display = "none";
  
    mostrarPergunta();
  });
  
  mostrarPergunta();
  