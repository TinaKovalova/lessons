const formActiveBtn = document.querySelector(".search-active__btn");
const searchForm = document.querySelector(".search-form");
const contacts = document.querySelectorAll(".contacts");

formActiveBtn.addEventListener("click",() => {
    searchForm.classList.toggle("active");
})

for (let element of contacts) {
   element.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active")
})
}
