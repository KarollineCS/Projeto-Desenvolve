const box = document.querySelector(".container");
const imagens = document.querySelectorAll(".container img");

let contador = 0;

function slider() {
    contador++;

    if (contador > imagens.length - 1) {
        contador = 0;
    }

    box.style.transform = `translateX(${-contador * 1250}px)`;
}

setInterval(slider, 3000);  

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggle');

    toggle.addEventListener('change', () => {
        document.body.classList.toggle('darkmode');
        document.querySelector('.header_navigation').classList.toggle('darkmode');
        document.querySelector('.section-news').classList.toggle('darkmode');
        document.querySelector('.price').classList.toggle('darkmode');
        document.querySelector('.section-gif').classList.toggle('darkmode');
        document.querySelector('.recomendations').classList.toggle('darkmode');
        document.querySelector('.recomendations button').classList.toggle('darkmode');
    });
});
