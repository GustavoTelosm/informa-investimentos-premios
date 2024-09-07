function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa === "") {
        section.innerHTML = "Digite alguma coisa para procurar.";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    let resultados = "";
    
    for (let dados of dado_categorias) {
        let titulo = dados.titulo.toLowerCase();
        let descricao = dados.descricao.toLowerCase();
        let tags = dados.tags.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <h2>${dados.titulo}</h2>
                    <p class="descricao-meta">${dados.descricao}</p>
                    <p class="descricao-meta">${dados.descricao_sim}</p>
                    <a href="${dados.link}" target="_blank">Clique aqui para mais informações</a>
                </div>
            `;
        }
    }

    if (resultados === "") {
        resultados = "Opss, não encontrei nada. Veja se digitou corretamente o que está procurando.";
    }

    section.innerHTML = resultados;
}
