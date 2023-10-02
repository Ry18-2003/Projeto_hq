window.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const resultsList = document.getElementById('results-list');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        resultsList.innerHTML = '';

        if (searchTerm.length === 0) {
            searchResults.style.display = 'none';
            return;
        }

        fetch('/Projeto_hq/JSON/itens.json') // Substitua pelo caminho do seu arquivo de resultados JSON
            .then(response => response.json())
            .then(data => {
                const filteredResults = data.filter(result => {
                    return result.titulo.toLowerCase().includes(searchTerm);
                });

                renderResults(filteredResults);
                searchResults.style.display = 'block';
            });
    });

    function renderResults(results) {
        results.forEach(result => {
            const listItem = document.createElement('li');
            const link = document.createElement('a'); // Cria um elemento <a> para o link
            link.href = result.url; // Substitua "url" pelo campo que contém a URL
            link.style.display = 'block'; // Define o link para ocupar 100% da largura
            link.style.height = '100%'; // Define o link para ocupar 100% da altura

            const itemContent = document.createElement('div');
            itemContent.textContent = result.titulo; // Substitua pelo campo que deseja exibir

            link.appendChild(itemContent); // Adicione o conteúdo ao link
            listItem.appendChild(link); // Adiciona o link ao item da lista
            resultsList.appendChild(listItem);
        });
    }
});
