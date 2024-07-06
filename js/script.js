const mobileMenu = document.querySelector(".mobile-menu-items");
const toggleBtn = document.querySelector(".mobile-menu-toggle");

toggleBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

//Change navbar background on scroll
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) navbar.classList.add("navbar-scroll");
  else navbar.classList.remove("navbar-scroll");
});
