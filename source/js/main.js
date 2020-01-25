// Menu
var button = document.querySelector(".page-header__menu-button");
var navigation = document.querySelector(".main-nav__list");

navigation.classList.remove("main-nav__list--nojs");
button.classList.remove('page-header__menu-button--close');
button.classList.add('page-header__menu-button--open');

if (button) {
  button.addEventListener("click", function() {
    if (button.classList.contains("page-header__menu-button--open")) {
      button.classList.remove("page-header__menu-button--open");
      button.classList.add("page-header__menu-button--close");
      navigation.style.display = "block";
    } else {
      button.classList.remove("page-header__menu-button--close");
      button.classList.add("page-header__menu-button--open");
      navigation.style.display = "none";
    }
  });
}

// Slider - mobile
var imgBefore = document.querySelector(".example__img--before");
var imgAfter = document.querySelector(".example__img--after");
var before = document.querySelector(".example__before");
var after = document.querySelector(".example__after");
var sliderSwitchThumb = document.querySelector(".slider__switch");

if (before && after) {
  before.addEventListener("click", function() {
    sliderSwitchThumb.style.justifyContent = "flex-start";
    imgAfter.style.display = "none";
    imgBefore.style.display = "block";
  });

  after.addEventListener("click", function() {
    sliderSwitchThumb.style.justifyContent = "flex-end";
    imgBefore.style.display = "none";
    imgAfter.style.display = "block";
  });
}
