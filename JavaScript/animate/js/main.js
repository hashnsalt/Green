

///////////////////////// top button /////////////////////////////

const topBtn = document.querySelector('.top_btn');

topBtn.addEventListener('click', () => {
  // gsap이 가지고 있는 메서드 중에 to(요소, 시간, {애니메이션})라는 매서드가 있음.
  gsap.to(window, 0.5, {
      scrollTo: 0
    })
});


window.addEventListener('scroll', () => {
  if(window.scrollY > 200) {
    gsap.to(topBtn, 0.3, {
      opacity: 1
    })
  } else {
    gsap.to(topBtn, 0.3, {
      opacity: 0
    })
  }
})


///////////////////////// img_box /////////////////////////////

const imgEls = document.querySelectorAll('.img_box div');

imgEls.forEach((imgEl, index) => {
  //delay를 주기위해 index변수값을 쓰겠다.
  gsap.to(imgEl, 1.5, {
    delay: index * 0.5, //박스1 = index:0 * 0.5 = 0초 이런 식으로 인덱스 값으로 딜레이를 줌.
    opacity: 1
  })
})


////////////////////////// txt_box ///////////////////////////

const txtEls = document.querySelectorAll('.txt_box div'); //배열로 등록

window.addEventListener('scroll', () => {

  if(window.scrollY > 300) {
    gsap.to(txtEls[0], 0.5, { //배열로 받아옴.
      opacity: 1
    });
    gsap.to(txtEls[1], 0.5, {
      delay: 0.5,
      opacity: 1
    });
    gsap.to(txtEls[2], 0.5, {
      delay: 1,
      opacity: 1
    });
  }
 });


 ////////////////////////// scroll-magic notice_box /////////////////////////

 const noticeEls = document.querySelectorAll('.notice_box');//div를 쓰지마라

 noticeEls.forEach((noticeEl) => {
  new ScrollMagic.Scene({  // Scene이라는 매서드를 이용해서 어느 시점이 오면 동작하게끔 속성을 셋팅.
    triggerElement: noticeEl,
    // triggerhook이 감지 되었을 때 실행 되어야 하는 요소.=>noticeEl
    triggerHook: 0.5 
    //어느 지점에서 스크롤이 굴러왔을때 나타나게 할건가. 감시선이라고 보면 됨. 화면의 50%=> 0.5 = 50%,  1 = 100% 
  }).setClassToggle(noticeEl, 'show') //noticeEl에 show라는 클래스를 적용하겟다. 시점에 오면 클래스 추가, 그렇지 않으면 초기화면.
    .addTo(new ScrollMagic.Controller());
 })


 ////////////////////////// swiper ////////////////////////////////////

 const swiper = new Swiper('.visual_swiper .swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  // autoplay: {
  //   delay: 2000
  //   // 2초동안 실행이 되도록
  // },
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar'
  },
  centeredSlides: true,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  }
 });