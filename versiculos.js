// Definir os versículos
const versiculos = [
    {
      tema: "Amor",
      texto: "Amados, amemos uns aos outros, pois o amor procede de Deus. Todo aquele que ama é nascido de Deus e conhece a Deus.",
      referencia: "1 João 4:7"
    },
    {
      tema: "Fé",
      texto: "Ora, a fé é a certeza daquilo que esperamos e a prova das coisas que não vemos.",
      referencia: "Hebreus 11:1"
    },
    {
      tema: "Força",
      texto: "Posso todas as coisas naquele que me fortalece.",
      referencia: "Filipenses 4:13"
    },
    {
      tema: "Esperança",
      texto: "Que o Deus da esperança os encha de toda alegria e paz, por sua confiança nele.",
      referencia: "Romanos 15:13"
    },
    {
      tema: "Perdão",
      texto: "Antes, sede uns para com os outros benignos, compassivos, perdoando-vos uns aos outros, como também Deus vos perdoou em Cristo.",
      referencia: "Efésios 4:32"
    },
    {
      tema: "Paz",
      texto: "Deixo-vos a paz, a minha paz vos dou; não a dou como o mundo a dá.",
      referencia: "João 14:27"
    }
  ];
  
  // Função para exibir os versículos
  function exibirVersiculos(versiculos) {
    const container = document.getElementById("versiculos-container");
  
    versiculos.forEach(v => {
      const card = document.createElement("div");
      card.className = "versiculo-card";
  
      const tema = document.createElement("h3");
      tema.textContent = v.tema;
  
      const texto = document.createElement("p");
      texto.textContent = `"${v.texto}"`;
  
      const ref = document.createElement("p");
      ref.textContent = `📖 ${v.referencia}`;
      ref.style.fontStyle = "italic";
  
      const shareDiv = document.createElement("div");
      shareDiv.className = "share-buttons";
  
      const shareText = `"${v.texto}" - ${v.referencia}`;
  
      const whatsappBtn = document.createElement("button");
      whatsappBtn.textContent = "Compartilhar no WhatsApp";
      whatsappBtn.onclick = () => {
        const url = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
        window.open(url, "_blank");
      };
  
      const copyBtn = document.createElement("button");
      copyBtn.textContent = "Copiar Versículo";
      copyBtn.onclick = () => {
        navigator.clipboard.writeText(shareText);
        alert("Versículo copiado!");
      };
  
      const instagramBtn = document.createElement("button");
      instagramBtn.textContent = "Abrir para Story";
      instagramBtn.onclick = () => {
        alert("Para postar no Story, cole o texto copiado na imagem ou ferramenta de edição do Instagram.");
      };
  
      shareDiv.appendChild(whatsappBtn);
      shareDiv.appendChild(copyBtn);
      shareDiv.appendChild(instagramBtn);
  
      card.appendChild(tema);
      card.appendChild(texto);
      card.appendChild(ref);
      card.appendChild(shareDiv);
  
      container.appendChild(card);
    });
  }
  
  // Exibir todos os versículos ao carregar a página
  exibirVersiculos(versiculos);
  