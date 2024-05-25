var swiper = new Swiper(".swiper-View-03", {
  spaceBetween: 10,
  loop: true,
  autoplay: {delay: 2000,},     
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {slidesPerView: 2,},
    768: {slidesPerView: 3,},
    1024: {slidesPerView: 3,},
  },
});