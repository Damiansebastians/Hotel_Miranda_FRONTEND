///-----------MENU MOBILE---------------------

const toggleMenu = document.querySelector(".toggle__menu");
const menuMobile = document.querySelector(".menu__mobile");
const closeImage = document.querySelector(".toggle__menu__close");
const openImage = document.querySelector(".toggle__menu__open");

toggleMenu.addEventListener("click", () => {
  if (menuMobile.style.display === "none") {
    menuMobile.style.display = "block";
    closeImage.style.display = "block";
    openImage.style.display = "none";
  } else {
    menuMobile.style.display = "none";
    closeImage.style.display = "none";
    openImage.style.display = "block";
  }
});

//--------SLIDER-------------

const swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//-------------SLIDER 2-------------

var swiper2 = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

