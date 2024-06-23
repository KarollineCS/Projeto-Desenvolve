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

document.addEventListener('DOMContentLoaded', function () {
    const fotos = document.querySelectorAll('.foto-serv');
    fotos.forEach(foto => {
        foto.addEventListener('click', function () {
            ampliarFoto(foto);
        });
    });
});

function ampliarFoto(element) {
    const imgSrc = element.src;
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0,0,0,0.8)";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.zIndex = "1000";
    modal.onclick = function() { document.body.removeChild(modal); };

    const img = document.createElement("img");
    img.src = imgSrc;
    img.style.maxWidth = "90%";
    img.style.maxHeight = "90%";

    modal.appendChild(img);
    document.body.appendChild(modal);
}
