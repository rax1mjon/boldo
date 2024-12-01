// const loading = document.getElementById("loading");

// const loadingDuration = 10000;

// setTimeout(() => {
//   loading.classList.add("loading-none");
// }, loadingDuration);

window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("header");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("humburger");
  const navLinks = document.getElementById("header--nav");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("header--nav__active");
  });
});

// dark-light

const body = document.body;
const modeToggle = document.querySelector(".toggle");

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
});

window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    backtop.classList.add("backtop-show");
  } else {
    backtop.classList.remove("backtop-show");
  }
}

// corusel 

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    760: {
      items: 2,
    },
    1100: {
      items: 3,
    },
  },
});