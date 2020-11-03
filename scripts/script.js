// JavaScript Document
var burgermenu = document.querySelector('nav ul');
var burgerbutton = document.querySelector('header nav button:first-of-type');

function toggleburger() {
    burgermenu.classList.toggle("hamburgermenu");
}
burgerbutton.addEventListener('click', toggleburger);




var footer = document.querySelector('footer ul');
var footerbutton = document.querySelector('footer button');

function togglefooter() {
    footer.classList.toggle("footeraan");
}
footerbutton.addEventListener('click', togglefooter);
