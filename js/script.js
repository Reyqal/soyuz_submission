// Navbar Highlight
const navLinks = document.querySelectorAll(".nav-link");

// Navbar Highlight When Click
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Navbar Highlight When scroll
window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY + window.innerHeight / 2;

  navLinks.forEach((link) => {
    const section = document.querySelector(link.getAttribute("href"));

    if (
      section.offsetTop < scrollPos &&
      section.offsetTop + section.offsetHeight > scrollPos
    ) {
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
});

// Hamburbur Menu Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", function () {
  this.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close hamburbur menu when a link is clicked
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active"); 
    navMenu.classList.remove("active"); 
  });
});

// Close hamburbur menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && e.target !== hamburger) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

// Smooth scrolling to planets section
function scrollToPlanets() {
  document.getElementById("planets").scrollIntoView({
    behavior: "smooth",
  });
}

// Move to Planet Page
function explorePlanet(planetName) {
  window.location.href = `planets/${planetName}.html`;
}
