const languagesListBlock = document.querySelector(".laguages__list-block");
const langugesBtns = document.querySelectorAll(".laguages-btn");


for(let element of langugesBtns )
element.addEventListener("click", () => {
    languagesListBlock.classList.toggle("laguages__list-block--hidden");
})
