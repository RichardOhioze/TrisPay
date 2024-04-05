let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav-mobile');
let header = document.querySelector('header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if (window.scrollY > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }

}


// testimonial slider
var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// FAQ
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(faqItem => {
    const questionBtn = faqItem.querySelector(".faq-question");
    const answer = faqItem.querySelector(".faq-answer");

    questionBtn.addEventListener("click", () => {
        questionBtn.setAttribute("aria-expanded", !questionBtn.hasAttribute("aria-expanded") || questionBtn.getAttribute("aria-expanded") === "false");

        answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
});


