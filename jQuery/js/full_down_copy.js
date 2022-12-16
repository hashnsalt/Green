$(function(){

  const lnbLi = $('.lnb>li');
  const ul = $('.lnb>li>ul');
  const headerMin = $('.inner_header').height(); //30px
  const headerMax = headerMin + ul.innerHeight();
  let state = false;

  lnbLi.mouseenter(function(){
    if(!state) {
      $('.inner_header').stop().animate({
        height: headerMax
      }, 150, function(){
        ul.stop().fadeIn(150);
      })
      state = true;
    }
    $(this).find('ul').addClass('on');
  });

  lnbLi.mouseleave(function(){
    $(this).find('ul').removeClass('on');
  });

  $('.header').mouseleave(function(){
    ul.stop().fadeOut(150, function(){
      $('.inner_header').stop().animate({
        height: headerMin
      }, 150);
    });
    state = false; //정의를 해주지 않으면 다시 사용하지 못함.
  });

});