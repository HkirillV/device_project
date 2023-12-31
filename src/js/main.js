//Burger menu

const burgerButtonElement = document.querySelector('.header__burger-button');
const overlayMenuElement = document.querySelector('.header__overlay-menu');


burgerButtonElement.addEventListener('click', () => {
    burgerButtonElement.classList.toggle('is-active')
    overlayMenuElement.classList.toggle('is-active')
})

//Swiper

const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.advantages__pagination',
    },
    navigation: {
        nextEl: '.advantages__slider-button--next',
        prevEl: '.advantages__slider-button--prev',
    },
});

//Floating

const floatingButtonElement = document.querySelector('.header__catalog-button');
const floatingMenuElement = document.querySelector('.floating');


floatingButtonElement.addEventListener('click', () => {
    floatingButtonElement.classList.toggle('is-active')
    floatingMenuElement.classList.toggle('is-active')
})

