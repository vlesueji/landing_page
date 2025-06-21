const buttonMenu = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu')

let isOpened = false;

let openMenu = function (){
    buttonMenu.classList.toggle('burger-button');
    buttonMenu.classList.toggle('burger-button-close');
    mobileMenu.classList.toggle('visually-hidden');
    isOpened = !isOpened;
};

let clickCheck = function (event) {
    if (event.target.id === 'mobileMenu'){
        mobileMenu.classList.toggle('visually-hidden');
        buttonMenu.classList.toggle('burger-button');
        buttonMenu.classList.toggle('burger-button-close');
    }
}

buttonMenu.addEventListener('click', openMenu);
mobileMenu.addEventListener('click', clickCheck);

