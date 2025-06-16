let buttonMenu = document.getElementById('menuButton');
let isOpened = false;

let openMenu = function (){
    buttonMenu.classList.toggle('burger-button');
    buttonMenu.classList.toggle('burger-button-close');
    isOpened = !isOpened;
};
buttonMenu.addEventListener('click', openMenu);