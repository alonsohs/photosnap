const burgerButton = document.querySelector("#header__burgerButton")
const menu = document.querySelector(".menu")
const burgerButtonImage = document.querySelector("#header_bg--img")

burgerButton.addEventListener('click', () => {
    menu.classList.toggle("active")
    if (menu.classList.contains("active"))
        burgerButtonImage.src = "../assets/shared/mobile/close.svg"
    else
        burgerButtonImage.src = "../assets/shared/mobile/menu.svg"
})