const MOB = document.querySelector("#menu-open-button");
const MCB = document.querySelector("#menu-close-button");
const nl = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

const opt = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      nl.forEach(link => link.classList.remove('active'));
      document.querySelector(`.nav-link[href="#${id}"]`).classList.add('active');
    }
  });
}, opt);

sections.forEach(section => observer.observe(section));

MOB.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
})

MCB.addEventListener("click", () => MOB.click());

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    }
  }
});
