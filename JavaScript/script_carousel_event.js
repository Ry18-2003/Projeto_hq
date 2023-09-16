// Obtém referências para os elementos relevantes 1
const opcao1 = document.getElementById("Ev1");
const opcao2 = document.getElementById("Ev2");
const opcao3 = document.getElementById("Ev3");
const backColor1 = document.querySelector(".btn1");
const backColor2 = document.querySelector(".btn2");
const backColor3 = document.querySelector(".btn3");

document.getElementById("Ev1").checked = true;
backColor1.style.backgroundColor = "#000";

// Adiciona um ouvinte de evento para cada opção de rádio
opcao1.addEventListener("change", () => {
    backColor1.style.backgroundColor = "#000";
    backColor2.style.backgroundColor = "";
    backColor3.style.backgroundColor = "";
});
opcao2.addEventListener("change", () => {
    backColor2.style.backgroundColor = "#000";
    backColor1.style.backgroundColor = "";
    backColor3.style.backgroundColor = "";
});
opcao3.addEventListener("change", () => {
    backColor3.style.backgroundColor = "#000";
    backColor2.style.backgroundColor = "";
    backColor1.style.backgroundColor = "";
});