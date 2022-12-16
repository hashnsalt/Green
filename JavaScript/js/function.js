

//함수 선언 1

// let i = 0;//전역변수
// function myFunc() {
//   //let i = 0;//function함수 모듈 안에 넣으면 i라는 변수가 계속 초기화됨. 지역변수.

//   i++;
//   document.write('hello' + i + '<br/>');
// }//함수 정의 영역- 함수를 정의했을 때는 메모리에 로드되었을 뿐임. 실행되는 것은 아니라 화면에 나타나지 않음. 
// //실행되게 하고 싶다면 함수를 호출(call)해줘야한다. 
//먼저 저장해줘야 함. 상단정의.


// myFunc(); //함수 호출: 함수를 실행하는 방법.
// myFunc();



//함수 선언 2_익명 함수

// let i = 0;

// let myFunc = function() {//함수라는 데이터를 저장한 변수(myFunc)
//   i++;
//   document.write('JavaScript' + i + '<br/>');
// }

// myFunc();


//함수 문제01 두개의 정수를 입력받아 사칙연산을 계산하는 함수를 작성하고 호출하여 실행하는 프로그램 작성.

// let num01 = parseInt(prompt('첫번째 정수를 입력하세요.'));
// let num02 = parseInt(prompt('두번째 정수를 입력하세요.'));


// function operator() {//입력되는 것이 안에 들어가 줘야 한다. 그래야 실행될때마다 다른 값을 넣을 수 있으므로.
//   let add = num01 + num02;
//   let sub = num01 - num02;
//   let mul = num01 * num02;
//   let share = num01 / num02;
//   document.write('덧셈: ' + add +'<br/> 뺄셈: ' + sub + '<br/> 곱셈: ' + mul + '<br/> 나눗셈: ' + share);
// }

// operator();



// //매개변수


// function operator(x, y) {//매개변수
//   let add = x + y;
//   let sub = x - y;

//   document.write('x + y = ' + add + '<br/>');
//   document.write('x - y = ' + sub + '<br/>');
// }

// operator(10, 5); //인수값


// // id/pw입력 받아 id/pw넣어서 로그인이라는 함수 호출. 다 맞으면 로그인, 그렇지 않으면 id/pw 틀렸습니다 호출.


// let id = 'greenweb';
// let pw = 'webd'

// function login() {
//   let userId = prompt('Id를 입력하세요.');
//   let userPw = prompt('Pw를 입력하세요.');

//   if (userId === id && pw === userPw) {
//     document.write('로그인 되었습니다.');
//   } else if(pw != userPw) {
//     document.write('pw가 틀렸습니다');
//   } else if(userId != id) {
//     document.write('id가 틀렸습니다');
//   }  
// }

// login();



// //teacher 


// let userId = prompt('Id를 입력하세요.');
// let userPw = prompt('Pw를 입력하세요.');
// login(userId, userPw); //변수 이름이 같지만, 변수값이 다르면 다른 장소에 저장된다. 그렇기 때문에 변수 이름을 다르게 저장해도 된다.




// //두개의 정수를 입력 받아 두수중 큰수를 출력하는 함수 프로그램 생성

// function max_int(num01, num02) {
//   //변수처리 let max=0;
//   if(num01 > num02) {
//     document.write(num01);
//   } else {document.write(num02)};
// }

// let int01 = prompt('첫번째 정수를 입력하세요.');
// let int02 = prompt('두번째 정수를 입력하세요.');
// max_int(int01, int02);







// 재귀함수(다시 자신의 함수를 부름)


// let num = 0;
// function myFnc() {
//   num++;
//   document.write(num, '<br/>');
//   if (num == 10) return;
//   myFnc();//재귀함수
// }

// myFnc();


//피보나치수열 5!

// let num = 0;
// function myFnc() {
//   for(num = 5; num = 0; num--) {
//     document.write(num, '<br/>');
//   }
//   myFnc();
// }

// myFnc();


//

let num = 6;

function myFnc() {
  num--;
  if(num === 0) return;
  document.write(num + '*');
  myFnc();
}

myFnc();


// 함수 문제02 이탈리안 메뉴 주문 함수를 작성하고 3명의 음식을 주문하는 프로그램(3번 호출)

// let menu01 = 'spagetti';
// let count = 0;

// function order() {
//   count++;
//   document.write(count + '번째 고객님이'+ menu01 + '를 주문하였습니다<br/>');
// }

// for(let i = 0; i<=2; i++){
//   order();
// }

// let count = 0;
// function order(){
//   count++;
//   let str = prompt('스파게티(S||s), 피자(P||p), 음료(D||d)');
//   let menu = '';
//   switch(str) {
//     case 'S':
//     case 's': menu = 'spagetti';
//     break;
//     case 'P':
//     case 'p': menu = 'Pizza';
//     break;
//     case 'D':
//     case 'd': menu = 'drink';
//     break;
//     default: document.write('없는 메뉴 입니다.');
//   }

//   document.write(count + '번째 손님이 ' + menu + '를 주문하셨습니다. <br/>');
// }

// order();
// order();
// order();

//함수 문제03 입력된 횟수만큼 "환영합니다!"를 출력하는 함수 프로그램 작성.


// let num = parseInt(prompt('방문객 수를 입력하세요.'));

// function count() {
//   document.write('환영합니다.'); //함수 정의
// }

//   for(i = 0; i <num ;i++){
//     count();
//   }



