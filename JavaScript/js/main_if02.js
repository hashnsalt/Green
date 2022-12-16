
// let num = parseInt(prompt('정수를 입력하세요'));

// let result = num % 2;

// if(result == 0) {
// //나머지가 0인 것들 중에서 0이 아닌 짝수를 찾고 싶을 때, 중첩 if를 씀.
//   if(num == 0) {
//     document.write('0입니다.');
//   } else {
//     document.write('0이 아닌 짝수');
//   }
// } else {
//   document.write('홀수');
// }



// 01. 세수를 입력받아 max,mid,min 값 구하기

// let num1 = parseInt(prompt('첫번째 수를 입력하세요'));
// let num2 = parseInt(prompt('두번째 수를 입력하세요'));
// let num3 = parseInt(prompt('세번째 수를 입력하세요'));

// let max = 0;
// let mid = 0;
// let min = 0;

// if (num1 > num2 && num1 > num3 ) {
//   max = num1;
//   if (num2 > num3) {
//     mid = num2;
//     min = num3;
//   }
//   else { 
//     mid = num2;
//     min = num3;
//   }
// }
// else if(num2 > num1 && num2 > num3) {
//   max = num2;
//   if (num1 > num3) {
//     mid = num1;
//     min = num3;
//   }
//   else { 
//     mid = num3;
//     min = num1;
//   }
// }
// else if(num3 > num1 && num3 > num2) {
//   max = num3;
//   if (num1 > num2) {
//     mid = num1;
//     min = num2;
//   }
//   else { 
//     mid = num2;
//     min = num1;
//   }
// }

// //else if 문만 써줘도 되고 else문을 안써줘도 된다.


// document.write('max = ' + max + '<br />' + 'mid = ' + mid + '<br />' + 'min = ' + min);



//아이디, 패스워드를 입력 받고, 로그인 정보 출력하기. 단, 아이디와 패스워드 중 틀린 항목을 정확히 알림 창으로 알려 주어야 함. 


// const id = 'Green Computer';
// const pw = '1234';

// let userId = prompt('아이디를 입력하세요.');
// let userPw = prompt('비밀번호를 입력하세요.');

// if ( id != userId ) {
//   alert('아이디가 틀렸습니다.');
// }
// else if ( pw != userPw ) {
//   alert('비밀번호가 틀렸습니다.');
// }
// else if (id != userId && pw != userPw) {
//   alert('아이디와 비밀번호가 틀렸습니다.')
// }
// else {
//   document.write('아이디: ' + userId + '<br />');
//   document.write('비밀번호: ' + userPw);
// }




// const id = 'GreenComputer';
// const pw = '1234';

// let userId = prompt('아이디를 입력하세요');
// let userPw = prompt('비밀번호를 입력하세요.');

// if ( id != userId && pw != userPw) {
//   if ( id != userId && pw == userPw) {
//     alert('아이디가 틀렸습니다.');
//   } else if ( pw != userPw ) {
//     alert('비밀번호가 틀렸습니다.');
//   } else {
//     alert('아이디와 비밀번호가 틀렸습니다.');
//   }
// }
// else if ( id == userId && pw == userPw) {
//   document.write('아이디: ' + userId + '<br />');
//   document.write('비밀번호: ' + userPw);
// }



//Q.성별을 입력받아, 남자가 선택되었을 경우
/* 군필: '진짜 사나이 입니다.' */
/* 미필: '그냥 사나이 입니다.' */
/* 여자가 선택되었을 경우 '여자 입니다.' 
그 외  '잘못 입력되었습니다.'*/
// 남자 일때 군필 미필 입력 받기.
// let armed = prompt('군필:1, 미필:2'); 을 넣어서 작성.

// let registNo = prompt('주민등록번호를 입력하세요.');

// let gender = registNo.slice(6,7);

// document.write(gender + '<br/>');

// if ( gender == 1 || gender == 3) {
//   document.write('남자 <br />');

//   let sol = confirm('군필입니까?');

//   if (sol == true) {
//     document.write('진짜 사나이 입니다.');
//   } else {
//     document.write('그냥 사나이 입니다.');
//   }

// }

// else if (gender == 2 || gender == 4) {
//   document.write('여자');
// }

// else {
//   document.write('잘못 입력되었습니다.');
// }