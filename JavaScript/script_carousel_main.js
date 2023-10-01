let cont = 1;
document.getElementById("radio1").checked = true;

let intervalId = setInterval(function(){
    nextImage();
}, 2000);

function nextImage() {
    cont++;
    if (cont > 4){
        cont = 1;
    }

    document.getElementById("radio" + cont).checked = true;
}

function setSlide(slideNumber) {
    cont = slideNumber;
    clearInterval(intervalId);
    intervalId = setInterval(function(){
        nextImage();
    }, 2000);
}

function pauseCarousel() {
    clearInterval(intervalId); // Pausar o intervalo quando o mouse estiver sobre o carrossel
}

function resumeCarousel() {
    intervalId = setInterval(function(){
        nextImage();
    }, 2000); // Retomar o intervalo quando o mouse sair do carrossel
}