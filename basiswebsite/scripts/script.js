// JavaScript Document
var burgermenu = document.querySelector('nav ul');
var burgerbutton = document.querySelector('header nav button:first-of-type');

function toggle() {
    burgermenu.classList.toggle("hamburgermenu");
}
burgerbutton.addEventListener('click', toggle);
