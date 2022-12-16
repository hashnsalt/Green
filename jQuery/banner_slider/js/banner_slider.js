//통합모듈
$(function(){

  let eleWidth = $('.frame ul li').innerWidth(); //innerWidth는 padding을 뺀 값.
  let state = false;//li동작 관리 변수
  let playOn = false; //nannerslider의 동작 상태를 관리하는 변수
  let direction = 'left';
  let bannerAuto; //setInterval()이라는 함수는 제어 하기 위한 변수로 사용. 마우스를 올렸을 때 멈추는 기능 같은 것.
  //내가 원하는 동작만 멈추기 위해 변수를 줌.

  function play() {
    if(!playOn) { //동작이 된다면
      playOn = true; //true로 만들어주기
      bannerAuto = setInterval(function(){
        if(direction == 'left') {
          $('.left').click(); //왼쪽으로 이동할 수 있도록 클릭이벤트
        } else {
          $('.right').click();
        }
      }, 2000);
    }

    if(playOn) {
      $('.frame li a').mouseover(function(){
        stop(); //아래의 stop() function 호출
      });
    }

  }//play() 함수.

  function stop(){ //stop이란 것은
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

  function left(){
    stop(); //뭘하던지 멈춰줌
    direction = 'left';
    $('.frame ul').animate({left:eleWidth*-1}, 500, function(){ //-216을 표현하기 위해 -1 곱해줌 이렇게 쓴다. -를 표현하기 위해 //객체만 this를 받을 수 있음.
      $(this).children('li:first').insertAfter($(this).children("li:last"));
      $(this).css('left',0);
      state=false;
      play();
    });
  } // left()

  function right() {
    stop();
    direction='right'; //아무런 동작이 일어나지 않는다 그저 브라우저한테 이제 right로 움직일거라는걸 알려주기 위해 지시해주는 것 뿐.
    $('.frame>ul>li:last').insertBefore($('.frame li:first'));
    $('.frame ul').css('left', eleWidth*-1);
    $('.frame ul').animate({left:0}, 500, function(){
        state = false;
        play();
      });//그런 일이 일어나지마자
  }//right();

  $('.left').click(function(){
    if(!state) {//li의 동작이 없으면
      state = true; //li를 동작해주고
      left();
    }
  });

  $('.right').click(function(){
    if(!state) {
      state = true;
      right();
    }
  });

  $('.stop').click(function(){
    stop();
  });

  $('.play').click(function(){
    play();
  });

  $('.play').click();

});