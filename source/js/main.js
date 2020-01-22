// Menu
var button = document.querySelector(".page-header__menu-button");
var navigation = document.querySelector(".main-nav__list");

if (button) {
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
}

// Slider - mobile
var imgBefore = document.querySelector(".example__img--before");
var imgAfter = document.querySelector(".example__img--after");
var before = document.querySelector(".example__before");
var after = document.querySelector(".example__after");
var sliderSwitchThumb = document.querySelector(".slider__switch-thumb");

if (before && after) {
  before.addEventListener("click", function() {
    sliderSwitchThumb.style.float = "left";
    imgAfter.style.display = "none";
    imgBefore.style.display = "block";
  });

  after.addEventListener("click", function() {
    sliderSwitchThumb.style.float = "right";
    imgBefore.style.display = "none";
    imgAfter.style.display = "block";
  });
}
