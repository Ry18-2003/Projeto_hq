const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev_button');
const nextButton = document.querySelector('.next_button');
let currentIndex = 0;

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carousel.children.length;
    updateCarousel();
});

function updateCarousel() {
    const translateX = -currentIndex * 100 + '%';
    carousel.style.transform = `translateX(${translateX})`;
}
