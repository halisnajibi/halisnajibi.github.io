// hamburgaer
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-aktif");
  hamburger.classList.toggle("bulat");
  navMenu.classList.toggle("hidden");
});

// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// klik diluar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-aktif");
    navMenu.classList.add("hidden");
  }
});

// darkmode toggle
const darkToggle = document.querySelector("#tombol-tema");
const html = document.querySelector("html");
darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
});
