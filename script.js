// Lista de versículos e reflexões
const versiculos = [
    {
      texto: "O Senhor é meu pastor, nada me faltará. – Salmos 23:1",
      reflexao: "Confie que Deus cuida de cada detalhe da sua vida, mesmo quando você não entende o processo."
    },
    {
      texto: "Entrega o teu caminho ao Senhor; confia nele, e ele o fará. – Salmos 37:5",
      reflexao: "A entrega verdadeira traz paz. Confie seus planos a Deus."
    },
    {
      texto: "Tudo posso naquele que me fortalece. – Filipenses 4:13",
      reflexao: "A força que você precisa não vem de você, mas dEle."
    },
    {
      texto: "Lâmpada para os meus pés é tua palavra, e luz para o meu caminho. – Salmos 119:105",
      reflexao: "A Bíblia é guia para suas decisões. Deixe-se iluminar por ela."
    }
  ];
  
  // Escolher um versículo aleatório
  const hoje = new Date().getDate(); // Usa o dia do mês como base
  const index = hoje % versiculos.length;
  const escolhido = versiculos[index];
  
  document.getElementById("versiculo").innerText = escolhido.texto;
  document.getElementById("reflexao").innerText = escolhido.reflexao;
  
  function marcarComoLido() {
    alert("Versículo marcado como lido! 🙏");
  }
  