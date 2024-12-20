let time = 5000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll(".slider img")
    max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)


var dataFutura = new Date("January 11, 2025 19:00").getTime();
var dias, horas, minutos, segundos;

setInterval(function(){
var dataAtual = new Date().getTime();
var segundosTotal= (dataFutura - dataAtual)/1000;


dias = parseInt( segundosTotal/86400);
segundosTotal = segundosTotal%86400;

horas = parseInt (segundosTotal/3600);
segundosTotal = segundosTotal%3600;

minutos = parseInt (segundosTotal/60);
segundos = parseInt (segundosTotal%60);

document.getElementById("dias").innerHTML = dias;
document.getElementById("horas").innerHTML = horas;
document.getElementById("minutos").innerHTML = minutos;
document.getElementById("segundos").innerHTML = segundos;

},1000);

