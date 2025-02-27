document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav_links");
    const navItems = document.querySelectorAll(".nav_links li");

    hamburger.addEventListener("click", function() {
        navLinks.classList.toggle("show");
        hamburger.classList.toggle("active");
    });
});

let index = 0;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector(".arrow-left");
const rightBtn = document.querySelector(".arrow-right");

document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove("show");
        hamburger.classList.remove("active");
    }
});
function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
}

rightBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
});

leftBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
});
