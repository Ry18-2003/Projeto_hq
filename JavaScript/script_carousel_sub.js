// Função genérica para manipular a navegação do carrossel
function handleCarouselNavigation(prevButton, nextButton, currentIndex, elementsPerPage, carouselClass) {
    const prevButtonElement = document.querySelector(prevButton);
    const nextButtonElement = document.querySelector(nextButton);
    const carouselElement = document.querySelector(carouselClass);

    prevButtonElement.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex -= elementsPerPage;
            updateCarousel(currentIndex, carouselElement);
        } else {
            currentIndex = elementsPerPage;
            updateCarousel(currentIndex, carouselElement);
        }
    });

    nextButtonElement.addEventListener('click', () => {
        if (currentIndex + elementsPerPage < carouselElement.children.length) {
            currentIndex += elementsPerPage;
            updateCarousel(currentIndex, carouselElement);
        } else {
            currentIndex = 0;
            updateCarousel(currentIndex, carouselElement);
        }
    });
}

// Função para atualizar a exibição do carrossel
function updateCarousel(currentIndex, carouselElement) {
    const productWidth = 25; // Largura de cada elemento (produto) em porcentagem
    const translateX = -currentIndex * productWidth + '%';
    // Aplica a transformação CSS para mover o carrossel
    carouselElement.style.transform = `translateX(${translateX})`;
}

// Exemplo de uso para os diferentes carrosséis
handleCarouselNavigation('.prev1', '.next1', 0, 4, '.c1');
handleCarouselNavigation('.prev2', '.next2', 0, 4, '.c2');
handleCarouselNavigation('.prev3', '.next3', 0, 4, '.c3');
