const body = document.body;
const buttonMenu = document.querySelector('#menuButton');
const mobileMenu = document.querySelector('#mobileMenu');
const header = document.querySelector('.header');
const headerLogo = document.querySelector('.header__logo');
let sliders = Math.floor(window.innerWidth / 400);
let isOpened = false;
let currentScrollPosition = window.scrollY;
let ticking = false;

let openMenu = function () {
  headerLogo.classList.toggle('non-visible');
  buttonMenu.classList.toggle('burger-button');
  buttonMenu.classList.toggle('burger-button-close');
  mobileMenu.classList.toggle('visually-hidden');
  isOpened = !isOpened;
  body.classList.toggle('modal-open');
};

function hideHeader() {
  if (window.scrollY > currentScrollPosition & window.scrollY > header.offsetHeight) {
    header.classList.add('non-visible');
    currentScrollPosition = window.scrollY;
  } else if (window.scrollY < currentScrollPosition) {
    header.classList.remove('non-visible');
    currentScrollPosition = window.scrollY;
  }
}

function clickCheck(evt) {
  if (evt.target.id === 'mobileMenu') {
    headerLogo.classList.toggle('non-visible');
    mobileMenu.classList.toggle('visually-hidden');
    buttonMenu.classList.toggle('burger-button');
    buttonMenu.classList.toggle('burger-button-close');
    body.classList.toggle('modal-open');
  }
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(()=> {
      hideHeader();
      ticking = false;
    });
  }
});
buttonMenu.addEventListener('click', openMenu);
mobileMenu.addEventListener('click', clickCheck);

addEventListener("DOMContentLoaded", function () {
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