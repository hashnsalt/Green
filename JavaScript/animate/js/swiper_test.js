 ////////////////////////// swiper ////////////////////////////////////

 const swiper = new Swiper('.vs_swiper .swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  // innerWidth: auto,
  loop: true,
  // autoplay: {
  //   delay: 2000
  //   // 2초동안 실행이 되도록
  // },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },
  centeredSlides: true,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
 });