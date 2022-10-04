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

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});