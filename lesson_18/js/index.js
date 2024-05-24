const burgerMenuBtn = document.querySelector(".burger-menu-btn");
const burgerMenu = document.querySelector(".burger-menu");

burgerMenuBtn.addEventListener("click", () => {
    burgerMenu.classList.toggle("burger-menu--opened");
})