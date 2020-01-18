// Menu
let button = document.querySelector(".page-header__menu-button");
let navigation = document.querySelector(".main-nav__list");

button.addEventListener("click", function() {
  if (button.classList.contains("page-header--open")) {
    button.classList.remove("page-header--open");
    button.classList.add("page-header--close");
    navigation.style.display = "block";
  } else {
    button.classList.remove("page-header--close");
    button.classList.add("page-header--open");
    navigation.style.display = "none";
  }
});

// Slider - mobile
let imgBefore = document.querySelector(".example__img--before");
let imgAfter = document.querySelector(".example__img--after");
let before = document.querySelector(".example__before");
let after = document.querySelector(".example__after");
let sliderSwitchThumb = document.querySelector(".slider__switch-thumb");

before.addEventListener("click", function() {
  sliderSwitchThumb.style.float = "left";
  imgAfter.style.display = "none";
  imgBefore.style.display = "block";
})

after.addEventListener("click", function () {
  sliderSwitchThumb.style.float = "right";
  imgBefore.style.display = "none";
  imgAfter.style.display = "block";
})
