$(function(){
  // $('section').mousewheel(function(e, delta){//delta는 변수
  //   if(delta > 0) { //mousewheel up
  //     let prev = $(this).prev().offset().top; //내 형의(prev) 탑 좌표를 찾는다.
  //     $('html, body').stop().animate({scrollTop: prev}, 1000);
  //   }else if(delta < 0) {
  //     let next = $(this).next().offset().top; //내 바로 밑의 동생(next)의 좌표를 찾는다.
  //     $('html, body').stop().animate({scrollTop: next}, 1000);
  //   }
  // }); //mousewheel_evet


  $(window).scroll(function(){

    // if($(this).scrollTop() == $('.page02').offset().top) {
      // 수치를 뽑아 낼때는 괄호를 해준다. scrollTop()

    if ($(this).scrollTop() >= $('.page02').offset().top/2){
    // if($(this).scrollTop() > ($('.page02').offset().top - $('.page02').height()/2)) {
      // let sectionPoint = $(window).scrollTop();

      // let i = $(this).index();

      // if(sectionPoint >= $(this).offset().top){

      $('.page02-1').fadeIn(500);
      $('.page02-2').delay(500).fadeIn(500);
      $('.page02-3').delay(1000).fadeIn(500);
    } //box 짠짠짠 이벤트
    else {
      $('.page02 .sub_box div').fadeOut(); //시간은 필요 없음.
    }

    if($(this).scrollTop() >= $('.page03').offset().top/2){
      $('.page03-1').animate({top: 0}, 500);
      $('.page03-2').delay(500).animate({top: 0}, 500);
      $('.page03-3').delay(1000).animate({top: 0}, 500);
    }


  });//window scroll event


});