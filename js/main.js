// MENU DE NAVEGACIÓN | EFECTO 

let btnMenu = document.getElementById("btnMenu");
let navbar = document.getElementById("navbar");
let menuNav = document.getElementById("menuNav");

navbar.style.right = "-250px";

btnMenu.onclick = function() {
    if(navbar.style.right == "-250px"){
        navbar.style.right = "0";
        menuNav.src = "img/menuNav2.png"
    }
    else{
        navbar.style.right = "-250px";
        menuNav.src = "img/menuNav.png"
    }
}

// SMOOTH SCROLL | VELOCIDAD DE SCROLL

let scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});

// SCROLL REVEAL EFECT

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 250,
});

    sr.reveal(`.tittleText`, {delay:100})
    sr.reveal(`.cardEstilos`, {origin:'left', delay:150})
    sr.reveal(`.imgEstilos`, {origin:'right', delay:150})
    sr.reveal(`.boxServicios`, {delay:150})
    sr.reveal(`.boxEquipo`, {origin:'bottom', delay:150})
    sr.reveal(`.imgEquipo`, {origin:'left', delay:150})
    sr.reveal(`.imgEquipo2`, {origin:'right', delay:150})
    sr.reveal(`.formBox`, {origin:'bottom', delay:200})
    sr.reveal(`.footerLeft`, {origin:'left', delay:50})
    sr.reveal(`.footerRight`, {origin:'right', delay:50})