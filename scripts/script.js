const buttonMenu = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu')

let isOpened = false;

let openMenu = function (){
    buttonMenu.classList.toggle('burger-button');
    buttonMenu.classList.toggle('burger-button-close');
    mobileMenu.classList.toggle('mobile-visible');
    mobileMenu.classList.toggle('hidden-mobile');
    isOpened = !isOpened;
};
buttonMenu.addEventListener('click', openMenu);

