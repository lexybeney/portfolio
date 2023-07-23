/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
const burgerMenu = document.getElementById("burger_check");
const mobileMenu = document.getElementById("mobile_menu");
var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  if (mobileMenu.classList.contains("show_menu")) {
    return;
  }
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    const header = document.getElementById("header");
    header.style.top = "0";
    header.style.height = "70px";
  } else {
    document.getElementById("header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

burgerMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("show_menu");
  document.getElementById("blur_overlay").classList.toggle("show_blur");
});

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("show_menu");
  document.getElementById("blur_overlay").classList.toggle("show_blur");
});
