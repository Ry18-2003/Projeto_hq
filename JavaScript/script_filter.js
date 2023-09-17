// Seleciona os checkboxes de filtro e a lista de itens
const checkboxesFiltro = document.querySelectorAll('#botoes-filtro input[type="checkbox"]');
const listaItens = document.getElementById('lista-itens');

// Adiciona um ouvinte de evento a cada checkbox de filtro
checkboxesFiltro.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        // Crie um array para armazenar as categorias selecionadas
        const categoriasSelecionadas = Array.from(checkboxesFiltro)
            .filter((cb) => cb.checked)
            .map((cb) => cb.getAttribute('data-filtro'));

        // Seleciona todos os itens da lista
        const itens = listaItens.getElementsByClassName('item');

        // Se nenhum checkbox estiver marcado, exibe todos os itens
        if (categoriasSelecionadas.length === 0) {
            for (let i = 0; i < itens.length; i++) {
                const item = itens[i];
                item.style.display = 'flex'; // Exibe o item
            }
            return;
        }

        // Itera sobre os itens e verifica a categoria de cada item
        for (let i = 0; i < itens.length; i++) {
            const item = itens[i];
            const categoriaItem = item.getAttribute('data-categoria');

            // Verifica se a categoria do item está na lista de categorias selecionadas
            if (categoriasSelecionadas.includes(categoriaItem)) {
                item.style.display = 'flex'; // Exibe o item
            } else {
                item.style.display = 'none'; // Oculta o item
            }
        }
    });
});
