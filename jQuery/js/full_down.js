$(function(){

  //jQuery는 값이 바꿔도 수정하지 않게 끔 작성해줘야함.
  const lnbli = $('.lnb>li');
  const ul = $('.lnb>li>ul');
  const headerMin = $('.inner_header').height();
  const headerMax = headerMin + ul.innerHeight();
  // 헤더의 최고값은 최소값에 숨겨진 ul의 높이도 더해줘야한다.
  let state = false; //제어를 걸기 위한 것. 상태 변화에 대해 정의 함. 이걸로 만약 마우스 오버를 해서 상태변화가 있다면 식으로 if문을 정의할 수 있다. 상태변수를 사용해서. //생략 가능함.
  //선언하지 않으면 불린은 기본값을 false로 가진다.

  lnbli.mouseenter(function(){
    if(!state) {
      //상태 변화가 있다면. 풀다운으로 메뉴가 떨어진다면
      $('.inner_header').stop().animate({
        height: headerMax //innerheader의 높이를 맥스값 만큼 높혀라.
      }, 150, function(){
        ul.stop().fadeIn(150); //ul안에 글자가 나타남 스르륵
      })
      state = true; //상태가 true()가 됨을 정의해줌. 컴퓨터는 눈이 없기 때문에 hover했을 때 상태가 변했다는 결 직접 명시해 줘야한다.
    }//if block;
    $(this).find('ul').addClass('on');
    //네가 올린 그것(this)이 가지고 있는 ul을 찾아서 add 클래스 on
    //콜백 함수는 객체가 같을떄.
    //다시 선언은 객체가 다를 떄.
  }); //lnbli mouseenter_event

  lnbli.mouseleave(function(){
    $(this).find('ul').removeClass('on');
  });//lnbli.mouseleave_event
  //마우스가 올라가서 상태가 발생한 ul을 찾아서 class 'on'을 제거.
  $('.header').mouseleave(function(){
    ul.stop().fadeOut(150,function(){
      //내부의 글자(내용)이 삭제가 되면 콜백 함수 실행.
      $('.inner_header').stop().animate({
        height: headerMin
      }, 150);
    });
    state = false; //생략하면 안됨. 정의해 주지 않으면 다시 사용하지 못함. function문 안에서만 사용 가능.
  });//header mouseleave_event
});