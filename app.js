//console.log(dados);

function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Exibe a seção no console para fins de depuração

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value


    if (campoPesquisa == "") {
        section.innerHTML = "<p>nada foi encontrado</p>"
        return 
    }
   

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = ""

    // Itera sobre cada dado no array de dados
    for (let dado of dados) {
        if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="https://www.instagram.com/flamengo/" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descrição}</p>
                <A href=${dado.link} target="_blank">clique para saber mais</A>
            </div>`

        }
       
        // Cria uma nova div para cada resultado
      
    }

    // Atribui os resultados gerados ao conteúdo da seção
    section.innerHTML = resultados;
}





