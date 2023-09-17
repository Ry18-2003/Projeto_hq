// Função genérica para manipular a navegação do carrossel
function handleCarouselNavigation(prevButton, nextButton, currentIndex, elementsPerPage, carouselClass) {
    // Seleciona os botões de navegação do carrossel
    const prevButtonElement = document.querySelector(prevButton);
    const nextButtonElement = document.querySelector(nextButton);
    
    // Seleciona o elemento do carrossel
    const carouselElement = document.querySelector(carouselClass);

    // Adiciona um ouvinte de evento de clique para o botão "Anterior"
    prevButtonElement.addEventListener('click', () => {
        // Verifica se o índice atual é maior que 0 para evitar movimento negativo
        if (currentIndex > 0) {
            // Subtrai o número de elementos por aba do índice atual
            currentIndex -= elementsPerPage;
        } else {
            // Se estiver na primeira página, vá para a última página
            const numPages = Math.ceil(carouselElement.children.length / elementsPerPage);
            currentIndex = (numPages - 1) * elementsPerPage;
        }
        
        // Chama a função para atualizar a exibição do carrossel
        updateCarousel(currentIndex, carouselElement);
    });

    // Adiciona um ouvinte de evento de clique para o botão "Próximo"
    nextButtonElement.addEventListener('click', () => {
        // Verifica se o índice atual mais o número de elementos por aba
        // é menor que o número total de elementos no carrossel
        if (currentIndex + elementsPerPage < carouselElement.children.length) {
            // Adiciona o número de elementos por aba ao índice atual
            currentIndex += elementsPerPage;
        } else {
            // Se estiver no final, volte para a primeira página
            currentIndex = 0;
        }

        // Chama a função para atualizar a exibição do carrossel
        updateCarousel(currentIndex, carouselElement);
    });
}

// Função para atualizar a exibição do carrossel
function updateCarousel(currentIndex, carouselElement) {
    // Largura de cada elemento (produto) em pixels
    const productWidthInPixels = 320; // Substitua pelo valor da largura em pixels desejado
    // Calcula o valor de deslocamento em pixels
    const translateXInPixels = -currentIndex * productWidthInPixels;
    // Aplica a transformação CSS para mover o carrossel
    carouselElement.style.transform = `translateX(${translateXInPixels}px)`;
}

// Diferentes carrosséis
handleCarouselNavigation('.prev1', '.next1', 0, 3, '.c1'); // Carrossel 1
handleCarouselNavigation('.prev2', '.next2', 0, 1, '.c2'); // Carrossel 1
