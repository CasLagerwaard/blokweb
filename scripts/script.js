// JavaScript Document
// Voor de nav bar
var burgermenu = document.querySelector('nav ul');
var burgerbutton = document.querySelector('header nav button:first-of-type');

function toggleburger() {
    burgermenu.classList.toggle("hamburgermenu");
}
burgerbutton.addEventListener('click', toggleburger);


// voor de uitklapbare footer

var footer = document.querySelector('footer');
var footerbutton = document.querySelector('footer button');

function togglefooter() {
    footer.classList.toggle("footerAan");
}
footerbutton.addEventListener('click', togglefooter);



var footerbutton2 = document.querySelector('footer div:nth-of-type(2) button');

function togglefooter2() {
    footer.classList.toggle("footerAan2");
}
footerbutton2.addEventListener('click', togglefooter2);
