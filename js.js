/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
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

const burgerMenu = document.getElementById("burger_check");
const mobileMenu = document.getElementById("mobile_menu");
burgerMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("showMenu");
  document.getElementById("blur_overlay").classList.toggle("show_blur");
});

functiondisable() {
// To get the scroll position of current webpage
TopScroll = window.pageYOffset || document.documentElement.scrollTop;
LeftScroll = window.pageXOffset || document.documentElement.scrollLeft,

// if scroll happens, set it to the previous value
window.onscroll = function() {
window.scrollTo(LeftScroll, TopScroll);
        };
}