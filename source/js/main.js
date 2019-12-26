

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
