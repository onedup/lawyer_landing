// import Swiper bundle with all modules installed

// import styles bundle

// init Swiper:
const swiper = new Swiper('.testimonial__container', {
  // configure Swiper to use modules
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

  slidesPerView: 2,

  spaceBetween: 30,
});

