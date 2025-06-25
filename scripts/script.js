const body = document.getElementById('body');
const buttonMenu = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');

let isOpened = false;

let openMenu = function (){
    buttonMenu.classList.toggle('burger-button');
    buttonMenu.classList.toggle('burger-button-close');
    mobileMenu.classList.toggle('visually-hidden');
    isOpened = !isOpened;
    body.classList.toggle('modal-open');
};

function clickCheck (evt) {
    if (evt.target.id === 'mobileMenu'){
        mobileMenu.classList.toggle('visually-hidden');
        buttonMenu.classList.toggle('burger-button');
        buttonMenu.classList.toggle('burger-button-close');
        body.classList.toggle('modal-open');

    }
}

buttonMenu.addEventListener('click', openMenu);
mobileMenu.addEventListener('click', clickCheck);

