document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('devocionais-container');
    const filtro = document.getElementById('filtro');
  
    let todosDevocionais = [];
  
    fetch('devocionais.json')
      .then(res => res.json())
      .then(data => {
        todosDevocionais = data;
        renderizarDevocionais(todosDevocionais);
      });
  
    filtro.addEventListener('change', () => {
      const valorSelecionado = filtro.value;
      if (valorSelecionado === 'todos') {
        renderizarDevocionais(todosDevocionais);
      } else {
        const filtrados = todosDevocionais.filter(dev => dev.tema === valorSelecionado);
        renderizarDevocionais(filtrados);
      }
    });
  
    function renderizarDevocionais(lista) {
      container.innerHTML = '';
      if (lista.length === 0) {
        container.innerHTML = '<p>Nenhum devocional encontrado para esse tema.</p>';
        return;
      }
      lista.forEach(dev => {
        const card = document.createElement('div');
        card.className = 'card';
  
        card.innerHTML = `
          <span class="tema ${dev.tema}">${dev.tema.toUpperCase()}</span>
          <h3>${dev.titulo}</h3>
          <p><strong>${dev.versiculo}</strong></p>
          <p>${dev.mensagem}</p>
        `;
  
        container.appendChild(card);
      });
    }
  });
  