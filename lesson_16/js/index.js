const languagesListBlock = document.querySelector(".laguages__list-block");
const langugesBtns = document.querySelectorAll(".laguages__btn");
const activeContactsBtn = document.querySelector(".contacts__btn");
const contactsMainBtn = document.querySelector(".contacts__main-btn");
const contactsBlock = document.querySelector(".body-header__contacts");
const burgerMenuBtn = document.querySelector(".burger-menu-btn");
const burgerHeader = document.querySelector(".burger-header");
const formActiveBtn = document.querySelector(" .header__active-form-btn");
const searchForm = document.querySelector(".body-header__form");

console.log(burgerMenuBtn)

for (let element of langugesBtns) {
    element.addEventListener("click", () => {
        languagesListBlock.classList.toggle("laguages__list-block--hidden");
    });
}
contactsMainBtn.addEventListener("click", () => {
    contactsBlock.classList.toggle("body-header__contacts--opened")
})
activeContactsBtn.addEventListener("click", () => {
    contactsBlock.classList.toggle("body-header__contacts--opened")
})
burgerMenuBtn.addEventListener("click", () => {
    burgerHeader.classList.toggle("header__burger--opened");
})

formActiveBtn.addEventListener("click", () => {
    searchForm.classList.toggle("body-header__form--active");
})