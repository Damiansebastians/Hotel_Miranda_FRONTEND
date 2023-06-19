///----------------------MENU MOBILE---------------------------

let menuToggle = document.querySelector(".menu-icon");
let menuItems = document.querySelector(".menu");
let menuImageOpen = document.querySelector(".menu-icon__image__open");
let menuImageClose = document.querySelector(".menu-icon__image__close");

function toggleMenu() {
  menuItems.classList.toggle("menu-open");
  menuImageOpen.classList.toggle("hidden");
  menuImageClose.classList.toggle("hidden");
}

menuToggle.addEventListener("click", toggleMenu);

window.addEventListener("resize", function () {
  if (window.innerWidth > 999) {
    menuItems.classList.remove("menu-open");
    menuImageOpen.classList.remove("hidden");
    menuImageClose.classList.add("hidden");
  }
});
