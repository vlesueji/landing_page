const body = document.body;
const buttonMenu = document.querySelector('#menuButton');
const mobileMenu = document.querySelector('#mobileMenu');

let sliders = Math.floor(window.innerWidth/400);

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

addEventListener("DOMContentLoaded",function () {
    const swiper = new Swiper('.swiper', {
        slidesPerView: sliders,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.navigation__button-next',
            prevEl: '.navigation__button-prev',
        }
    });
});



