// ===============================
// ANIMACIÓN AL HACER SCROLL
// ===============================

const sections = document.querySelectorAll("section");

const mostrar = () => {

    const alturaPantalla = window.innerHeight;

    sections.forEach(sec => {

        const posicion = sec.getBoundingClientRect().top;

        if(posicion < alturaPantalla - 100){

            sec.classList.add("visible");

        }

    });

};

window.addEventListener("scroll", mostrar);
window.addEventListener("load", mostrar);


// ===============================
// HEADER CON EFECTO AL BAJAR
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.background = "rgb(102, 39, 39)";
        header.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.6)";

    }else{

        header.style.background = "rgb(59, 17, 17)";
        header.style.boxShadow = "none";

    }

});


// ===============================
// EFECTO EN BOTONES
// ===============================

const botones = document.querySelectorAll(".boton");

botones.forEach(boton => {

    boton.addEventListener("mouseenter", () => {

        boton.style.transform = "scale(1.05)";

    });

    boton.addEventListener("mouseleave", () => {

        boton.style.transform = "scale(1)";

    });

});


// ===============================
// MENÚ ACTIVO
// ===============================

const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let actual = "";

    sections.forEach(sec => {

        const top = sec.offsetTop - 150;

        if(scrollY >= top){

            actual = sec.getAttribute("id");

        }

    });

    links.forEach(link => {

        link.classList.remove("activo");

        if(link.getAttribute("href") == "#" + actual){

            link.classList.add("activo");

        }

    });

});


// ===============================
// EFECTO DE ESCRITURA EN EL TÍTULO
// ===============================

const titulo = document.querySelector(".hero-texto h1");

const texto = titulo.innerText;

titulo.innerText = "";

let i = 0;

function escribir(){

    if(i < texto.length){

        titulo.innerHTML += texto.charAt(i);

        i++;

        setTimeout(escribir,70);

    }

}

window.onload = escribir;