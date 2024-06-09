const burgerBtn = document.querySelector('.burger-btn');
const bottomHeader = document.querySelector('.header__bottom');

burgerBtn.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("burger-btn--open");
    bottomHeader.classList.toggle("header__bottom--open");
})
