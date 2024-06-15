const burgerBtn = document.querySelector(".burger");
const navigation = document.querySelector(".navigation");

burgerBtn.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active");
    navigation.classList.toggle("opened");

})