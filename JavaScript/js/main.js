// document.write('Hello, ' + '<br />' + '<font color="red">' + 'JavaScript~~' + '</font>');



let kor = 100;
let mat = 100, eng = 95; //비추. 하나씩 해주는게 좋음.

let sum = kor + mat + eng; //변수값을 직접 넣어도 되고, 선언한 변수명을 직접 적어서 계산해 주어도 된다.

//변수를 선언할 때는 변수만 선언하지말고 초기값을 주는게 좋다. 

document.write('총점 = ' + sum + '<br/>'); //sum이란는 메모리에 저장되어진 값을 출력시킨 것이다. 결과값이 무엇인지 안내 멘트 ('총점 =')를 넣어주는 것이 좋다.

// 두단어 이상일떄 변수는 korTotal 카멜 표기법 추천. 문자는 고정시킬 수 있기에 const를 사용할 수있다.


// const pass1 = true;
// const pass2 = 'true';

// document.write(pass1 + '<br />' + pass2 + '<br />');



// alert('Hello, Java~~'); //알림창

// let input = prompt('당신의 이름은?', '홍 길 동');  // 데이터를 입력받을 때 사용 '홍 길 동' 생략 가능(placeholder와 같은 기능)
// document.write(input);

// let input = confirm('정말로 창을 닫으시겠습니까?');
// window.alert(input); 

//alert를 썻기 때문에 결과값(true/false)을 알림창으로 띄워줌. alert를 사용하지 않으면 결과값 출력 없이 닫힘.
//window는 최상위 객체로 alert 앞의 윈도우는 생략 가능하다.