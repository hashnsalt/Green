// 01. 두 수를 변수에 할당하여 큰값, 작은 값 사용.


// let num1 = 20;
// let num2 = 10;

// let max = 0;
// let min = 0;

// if (num1 > num2) {
//   max = num1;
//   min = num2;
// } else {
//   max = num2;
//   min = num1;
// }

// document.write('max = ' + max + '<br />');
// document.write('min = ' + min + '<br />');

// 02.하나의 수를 입력 받아 짝수인지 홀수 인지를 판별.

// let number = parseInt(prompt('정수를 입력하세요'));

// let result = num % 2

// if (result == 0) {
//   document.write('짝수입니다.');
// } else {
//   document.write('홀수입니다.');
// }


// 03. 현재 시간이 오전인지 오후인지 판별.

// const today = new Date();
// string,number은 new를 빼도 사용가능.

// document.write(today + '<br />');

// let hour = today.getHours();

// document.write(hour + '<br />');

// if (12 >= hour) {
//   document.write('오전');
// }

// else {
//   document.write('오후');
// }


//conform함수

// 5.회원탈퇴 시 나타나는 알림 창에서 확인을 선택했을 경우 '정상적으로 탈퇴 되었습니다.' 취소를 선택했을 경우 '다음에 다시 방문해 주세요.' 라는 알림 메세지 출력하기.


// let answer = confirm('정말로 탈퇴하시겠습니까?');

// if(answer == true ) {
//   alert('정상적으로 탈퇴되었습니다.');
// } else {
//   alert('다음에 다시 방문해 주세요~~');
// }


// 6. 국어 영어 수학 점수를 입력 받아, 총점, 평균, 학점 구하기.


// let ko = parseInt(prompt('국어 점수를 입력하세요.'));
// let eng = parseInt(prompt('영어 점수를 입력하세요.'));
// let math = parseInt(prompt('수학 점수를 입력하세요.'));

// let sum = ko + eng + math;
// let avg = sum / 3;

// let score = '';

// if(avg == 100 || avg >= 90) { //100점도 A라는 점을 확실하게 명시하게 위해 써주는 것. 써줘도 되고 안써줘도 됨.
//   score = 'A';
// }

// else if (avg >= 80) {
//   score = 'B';
// }

// else if (avg >= 70) {
//   score = 'C';
// }

// else if (avg >= 60) {
//   score = 'D';
// }

// else {
//   score = 'F';
// }

// document.write('국어점수: ' + ko + '<br />');
// document.write('영어점수: ' + eng + '<br />');
// document.write('수학점수: ' + math + '<br />');
// document.write('총  점: ' + sum + '<br />');
// document.write('평  균: ' + parseInt(avg) + '<br />');
// document.write('학  점: ' + score + '<br />');



//Q. 쇼핑몰에서 구입 가격에 따라 할인율을 달리하여 결제할 수 있는 이벤트를 진행한다. 다음 할인율을 이용하여 구입가와 할인가 출력하기.
/* 
10000원 이상: 10%
5000원 이상: 5%
3000원 이상: 3%
1000원 이상: 1%
*/

// let buyMoney = parseInt(prompt('구매할 상품 금액'));

// let productMoney = 0;
// let saleMoney = 0;

// if (10000 <= buyMoney) {
//   saleMoney = buyMoney * 0.1;
// }

// else if (5000 <= buyMoney) {
//   saleMoney = buyMoney * 0.05;
// }

// else if (3000 <= buyMoney) {
//   saleMoney = buyMoney * 0.03;
// }

// else if (1000 <= buyMoney) {
//   saleMoney = buyMoney * 0.01;
// }


// document.write('상품 구입가: ' + buyMoney + '<br />' + '상품할인가: ' + parseInt(saleMoney));

// let buyPrice = parseInt(prompt('구매할 상품 금액'));

// let discount = 0;
// let salePrice = 0;

// if (buyPrice >= 10000) {
//   discount = 0.1;
// } else if (buyPrice >= 5000) {
//   discount = 0.05;
// } else if (buyPrice >= 3000) {
//   discount = 0.03;
// } else if (buyPrice >= 1000) {
//   discount = 0.01;
// }

// salePrice = buyPrice * discount;

// document.write('상품 구입가: ' + buyPrice + '<br />');
// document.write('상품 할인가: ' + discount * 100 + '% <br />');
// document.write('총 구매 금액: ' + salePrice);


//Q.회원 등급 산정 프로그램 작성, 등급과 등급에 따른 혜택을 정하여 출력하기.

// let membershipScore = parseInt(prompt('멤버십 점수를 입력해 주세요'));
// let memberRank = '';
// let plusItems = '';

// if (membershipScore >= 1000000) {
//   memberRank = 'Gold';
//   plusItems = '태초의 주문서';
// }

// else if (membershipScore >= 500000) {
//   memberRank = 'Silver';
//   plusItems = '고대의 주문서 2단계';
// }

// else {
//   memberRank = 'Bronze';
//   plusItems = '고대의 주문서 1단계';
// }


// document.write('회원의 등급은 ' + memberRank + '입니다. <br />');
// document.write('이달의 혜택은 ' + plusItems + '입니다. <br />');
