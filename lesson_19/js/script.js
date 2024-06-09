const burgerBtn = document.querySelector('.burger-btn');
const bottomHeader = document.querySelector('.header__bottom');

burgerBtn.addEventListener("click", () => {
    bottomHeader.classList.toggle("header__bottom--open");
})
