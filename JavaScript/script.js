let cont = 1;
document.getElementById("radio1").checked = true;

document.getElementById("Ev1").checked = true;

setInterval(function(){
    nextImage();
}, 5000)

function nextImage() {
    cont++;
    if (cont>6){
        cont = 1;
    }

    document.getElementById("radio"+cont).checked = true;
}
