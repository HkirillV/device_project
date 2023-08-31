const burgerButtonElement = document.querySelector('.header__burger-button');
const overlayMenuElement = document.querySelector('.header__overlay-menu');


burgerButtonElement.addEventListener('click', () => {
    burgerButtonElement.classList.toggle('is-active')
    overlayMenuElement.classList.toggle('is-active')
} )