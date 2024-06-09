const burgerBtn = document.querySelector('.burger-btn');
const bottomHeader = document.querySelector('.header__bottom');

console.log(burgerBtn);
console.log("help1")

burgerBtn.addEventListener("click", () => {
    bottomHeader.classList.toggle("header__bottom--open");
})
