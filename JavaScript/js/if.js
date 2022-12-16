

// let num1 = parseInt(prompt('정수 입력'));
// let num2 = parseInt(prompt('정수 입력'));


// 기본 if 문
// if (num>0) {
//   document.write('양수');
// }

// if (num<0) {
//   document.write('음수');
// }

// if (num == 0) {
//   document.write(0);
// }

// 조건을 만족할 때만 사용할 수 있다. 스크롤 일정 범위 내렸을 때 딴딴딴 나오게끔.



//if-else문

// if (num>0) {
//   document.write('양수');
// }

// else {
//   document.write('양수가 아님');
// }

// if (num1 > num2) {
//   document.write('max = ', num1); //단순한 나열만 해주고 싶으면 '+'말고 ','를 사용해도 된다. 변수만 한개 출력할 때.
// }

// else {
//   document.write('max = ', num2);
// }


// if - else if 문


// let num1 = parseInt(prompt('정수 입력'));
// let num2 = parseInt(prompt('정수 입력'));

// if (num1 > num2) {
//   document.write('max = ', num1);
// }

// else if (num2 > num1) {
//   document.write('max = ', num2);
// }

// else {
//   document.write('두수는 같음');
// }



// //if - else if 
// let num1 = parseInt(prompt('정수 입력'));

// if (num1 > 0) {
//   document.write('양수');
// }

// else if (num1 < 0) {
//   document.write('음수');
// }

// else {
//   document.write(0);
// }


//2.하나의 정수를 입력받아 짝수, 홀수를 판별하여 출력하기

// let num1 = parseInt(prompt('정수를 입력하시오'));

// let result = num1 % 2; 
// 수식을 곧바로 조건식에 집어 넣지 마라. 수정할 때 용의하도록

// if (result == 0){ 
//   document.write('짝수 입니다.');
// }
// else {
//   document.write('홀수 입니다.');  
// }


//4. 방문객의 아이디를 입력받아 "~님의 방문을 환영합니다." 메시지 띄우기. 단, id를 입력받았을 때만 실행.

// let id = prompt('id를 입력하시오');

// if (id) {
//   document.write( id + '님의 방문을 환영합니다.');
// }

// else {
// } 입력이 되지 않을 때 실행 안되도록 하기 위해서 else문을 안써줘도 된다.



// const today = new Date() // 날짜 함수 'new'객체를 선언하는 키워드, 객체를 만들어주는 키워드 /객체를 사용할 수 있게끔 객체 변수로 만들어놓은 것을 instance라고 한다. ex) today

// const year = today.getFullYear(); 


// document.write(today);
// document.write(year);

// if(year >= 2000) {
//   document.write('지금은 2000년대 입니다.');
// }


// let userNo = prompt('주민등록 번호 입력', '123456-1');
// document.write(userNo);

// document.write(gender)


//1. 현재 월과 계절을 출력.

// const today = new Date();

// const month = today.getMonth() + 1; //우리가 사용하는 것 해주려면 +1
// document.write(month);

// if (month >= 12) {
//   document.write('겨울입니다.');
// }

// else if (month >= 10) {
//   document.write('가을입니다.');
// }

// else if (month >= 6) {
//   document.write('여름입니다.');
// }

// else {
//   document.write('봄입니다.');
// }

// 주민등록번호로 성별 구분


// let no = prompt ('주민번호 입력');

// let gender = no.substring(7,7); 
// // 7번째 글자부터 7번째끝까지.

// document.write(gender);

// if(gender = '1' || gender == '3') {
//   document.write('남자');
// }

// else {
//   document.write('여자');
// }

// // 공식처럼 기억하기