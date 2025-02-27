function toggleNavbar() {
    document.getElementById("navbar").classList.toggle("active");
}

// document.addEventListener("DOMContentLoaded", function () {
//     const paragraph = document.querySelector(".sectiontwop");
//     let lastScrollTop = window.scrollY; 

//     function revealOnScroll() {
//         let currentScroll = window.scrollY;

//         // Check if user is scrolling down
//         if (currentScroll > lastScrollTop) {
//             const paragraphPosition = paragraph.getBoundingClientRect().top;
//             const windowHeight = window.innerHeight;

//             // Show paragraph only if it's entering the viewport
//             if (paragraphPosition < windowHeight * 0.9) {
//                 paragraph.classList.add("show");
//             }
//         } 
//         // Hide paragraph when scrolling up
//         else {
//             paragraph.classList.remove("show");
//         }

//         lastScrollTop = currentScroll; 
//     }

//     window.addEventListener("scroll", revealOnScroll);
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const paragraph = document.querySelector("#companyoverview p");
//     let lastScrollTop = window.scrollY; 

//     function revealOnScroll() {
//         let currentScroll = window.scrollY;

//         // Check if user is scrolling down
//         if (currentScroll > lastScrollTop) {
//             const paragraphPosition = paragraph.getBoundingClientRect().top;
//             const windowHeight = window.innerHeight;

//             // Show paragraph only if it's entering the viewport
//             if (paragraphPosition < windowHeight * 0.9) {
//                 paragraph.classList.add("show");
//             }
//         } 
//         // Hide paragraph when scrolling up
//         else {
//             paragraph.classList.remove("show");
//         }

//         lastScrollTop = currentScroll; 
//     }

//     window.addEventListener("scroll", revealOnScroll);
// });

