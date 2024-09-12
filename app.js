const btnPesquisar = document.getElementById('btn-pesquisar');
const inputPesquisa = document.getElementById('input-pesquisa'); // Adicione um ID ao seu input

btnPesquisar.addEventListener('click', pesquisar);

function pesquisar() {
    const termoPesquisa = inputPesquisa.value.toLowerCase(); // Obtém o termo de pesquisa e converte para minúsculas

    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";

    // Itera sobre cada resultado da pesquisa e constrói o HTML, filtrando pelos resultados
    for (let dado of dados) {
        if (dado.titulo.toLowerCase().includes(termoPesquisa) || dado.descricao.toLowerCase().includes(termoPesquisa)) {
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
    }

    // Atualiza o conteúdo HTML da seção com os resultados da pesquisa
    section.innerHTML = resultados;
}
