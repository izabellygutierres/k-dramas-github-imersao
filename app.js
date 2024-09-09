function pesquisar() {

    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada resultado da pesquisa e constrói o HTML
    for (let dado of dados) {
        //Itera sobre cada dado da lista de dados
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo} </a>
          </h2>
          <p class="descricao-meta">${dado.descricao} </p>
          <a href="${dado.link}">Onde Assistir: Netflix </a>
        </div>
      `;
    }
  
    // Atualiza o conteúdo HTML da seção com os resultados da pesquisa
    section.innerHTML = resultados;
  }
  