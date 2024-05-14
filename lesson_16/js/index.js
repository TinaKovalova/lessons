const languagesListBlock = document.querySelector(".laguages__list-block");
const langugesBtns = document.querySelectorAll(".laguages__btn");
const activeContactsBtn = document.querySelector(".contacts__btn");
const contactsBlock = document.querySelector(".body-header__contacts");

console.log(langugesBtns)

for (let element of langugesBtns) {
    element.addEventListener("click", () => {
        languagesListBlock.classList.toggle("laguages__list-block--hidden");
    });
}

activeContactsBtn.addEventListener("click", () => {
    contactsBlock.classList.toggle("body-header__contacts--opened")
})
