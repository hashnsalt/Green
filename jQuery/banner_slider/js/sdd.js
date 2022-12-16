
$(function(){

  const eleWidth = $('.frame li').innerWidth(); //innerWidth는 padding을 뺀 값.
  let state = false;
  let playOn = false; //동작이 안되는 상태
  let direction = 'left';
  let bannerAuto; //setInterval()이라는 함수는 제어 하기 위한 변수로 사용. 마우스를 올렸을 때 멈추는 기능 같은 것.

  function play() {
    if(!playOn) { //동작이 된다면
      playOn = true; //true로 만들어주기
      bannerAuto = setInterval(function(){
        if(direction == 'left') {
          $('left').click();
        } else {
          $('right').click();
        }
      }, 2000);
    }

    if(playOn) {
      $('.frame li a').mouseover(function() {
        stop(); //아래의 stop() function 호출
      });
    }

  }//play() 함수.

  function stop() { //stop이란 것은
    if(playOn) { //만약 움직고 있다면
      playOn = false; //멈추게끔 사용
      clearInterval(bannerAuto);
    }
    $('.frame li a').mouseout(function(){
      play();
    });
    $('.frame li a').click(function(){
      location.href;
    });
  } //stop()

  function left() {
    stop();
    direction = 'left';
    $('.frame>ul').animate({left: eleWidth * -1}, 500, function() { //-216을 표현하기 위해 -1 곱해줌 이렇게 쓴다. -를 표현하기 위해 //객체만 this를 받을 수 있음.
      $(this).children('li:first').insertAfter().children('li:last');
      $(this).css('left',0);
      state=false;
      play();
    });
  }

});