

// // [예제1] 짝수 출력
// for(let i=0; i<=100; i+=2 ) {
//   document.write(i + '<br />');
// }

// // [예제2] 홀수 출력
// for(let i=1; i<=100; i+=2 ) {
//   document.write(i + '<br />');
// }

// // [예제3] 100부터 0까지 출력.
// for(let i=100; i>=0; i-- ) {
//   document.write(i + '<br />');
// }

//[문제]

// // [문제01] 1부터 100까지의 합 5050
// let sum = 0;

// for(let i=1; i<=100; i++ ) {
//   sum += i;
//   // document.write('sum: ' + sum + '<br />');
// }

//  document.write('sum: ' + sum + '<br />'); //반복해서 넣어줘야할 구문, 아닐 구문 구분.


// // [문제02]에서 10까지 짝수의 합, 홀수의 합 구하기 even_sum: odd_sum:

// let evenSum = 0;
// let oddSum = 0;
// let result = 0;

// for(let i=1; i<=10; i++ ) {
//   result = i % 2;
//   if (result) {
//     evenSum += i;
//   }
//   else {
//     oddSum += i;
//   }
// }

// document.write('evenSum: ' + evenSum + '<br />' + 'oddSum: ' + oddSum);

// // [문제03] 안에 계산식 안써주고 변수만 쓰도록 연습하기.


// 구구단 2단 출력

// let mul = 0;

// for ( let i = 1; i<=10; i++){

//   mul = i * 2;

//   document.write(mul + <br />);
// }
    

//teacher_구구단 2단

// let dan = 2;

// document.write('***' + dan + '단*** <br/>');
// for( let i = 1; i<=9; i++) {
//   document.write(dan + '*' + i + ' = ' + dan * i + '<br/>');
// }




// [문제 04] 1에서 100까지의 수중 5의 배수이면 blue; 7의 배수이면 pink; 7의 배수 이면서 5의 배수이면 red 값의 글자색 출력

// let five = 0;
// let seven = 0;

// for ( let i = 1; i <= 100; i++){
//   five = i % 5;
//   seven = i % 7;
 
//  if(five == 0) {
//     document.write('<font color="red">' + i + '</font>');
//   } else if(seven == 0) {
//     document.write('<font color="blue"> + i + </font>');
//   }
// }


// teacher_code;
// for(let i =1; i<=100; i++){
//   if(i%5 === 0 && i%7 === 0){
//     document.write('<font color="red">' + i + '</font>&nbsp;&nbsp;');
//   } else if ( i%5 === 0 ) {
//     document.write('<font color="blue">' + i + '</font>&nbsp;&nbsp;');
//   } else if ( i%7 === 0 ) {
//     document.write('<font color="pink">' + i + '</font>&nbsp;&nbsp;');
//   } else {
//     document.write(i + '&nbsp;&nbsp;');
//   }

//   if( i%10 === 0) {
//     document.write( '<br/>');
//   }//10열씩 띄워주겠다.
// }



// //[예제04]6일때 나옴

// for (let i = 1; i<=10; i++){
//   if(i==6) break;
//   document.write(i, '<br/>');
// }//6이 안나옴. 6이 됬을때 for문을 나오므로


// for (let i = 1; i<=10; i++){
//   document.write(i, '<br/>');
//   if(i==6) break;
// }//6이 나옴. 아직 if문을 만나지 않았으므로.




// [예제05]입력받은 데이터의 합구하기. 무한 루프 설명 문제. 무한 루프를 빠져나오기 위해서 break문을 사용. 0을 입력받으면 프로그램 멈춤.

// let input = 0;
// let sum = 0;

// for (let i = 0;;i++) { //for(;;) 이렇게 써도 됨. 조건식은 언제 끝날지 몰라서 비워둠.
//   input = parseInt(prompt(i + '번째 누적할 데이터 입력 (종료: 0)'));
//   if(input === 0) break; // 0일떄 for문을 나온다.

//   sum = sum + input;
// }

// document.write('sum = ' + sum);






//[문제05]1에서 100까지의 합 계싼 중 합이 100보다 커지면 i는 얼마인지 sum이 얼마인지

// let sum = 0;
// let i = 0;
// //전역 변수. 프로그램이 종료되면 종료됨.

// for(i = 0;; i++) { //이렇게 넣으면 모듈 안에 실행되는 지역 변수이기 때문에 for문 밖의 documen.write는 먹지 않는다. let 을 대신해서 for(var i = 0;;) var를 쓰면 나옴.
//  // 아니면 for문 밖에서 선언 해주면 나온다.
//   sum += i;
//   if(sum>100) break;
// }

// document.write('i :' + i + '<br />' + 'sum: ' + sum); 



// //또 다른 방법 _count

// let sum = 0;
// let count = 0;
// //1. 전역 변수로 count를 준후 

// for(let i = 0;; i++) {
//   sum += i;
//   if(sum>100) {
//     count = i; //2. 지역변수 i를 전역변수 const로 대입
//     break;
//   }
// }

// document.write('i :' + count + '<br />' + 'sum: ' + sum); //3.i가 대입된 전역변수 const 사용. 


// [문제06]공인인증서가 맞으면 로그인 되었습니다 출력, 5번 틀렸으면 빠져나옴.


//else if (num != userId) {
//   alert('공인인증서가 틀렸습니다.');
//   userId = prompt('공인인증서를 입력하세요');
// } 

// const num = '12345';

// for(let i = 1;; i++){

// let userId = prompt('공인인증서를 입력하세요');

// if (num === userId) {
//   document.write('로그인이 되었습니다.');
//   break;
// }

//   else if (i > 5) {
//     document.write('로그인 제한');
//     break;
// }
// }  

//문구 자체를 변수로 줘서 나오게 할 수 있음.



//continue문 - 조건이 만족하면 다음에 오는 실행문 무시하고 증감식.


// for(let i=1; i<=10; i++) {
//   if(i%2 == 0) continue;
//   document.write(i, "<br/>");
// }



// 남자 회원수 출력

// let memberNo;
// let count = 0;
// let gender = '';

// for(let i=1;;i++) {
//   memberNo = prompt( i + '번쨰 회원번호 입력', '2211040(여자), 2211041(남자), 종료(0)');
//   if(memberNo === 0) break;

//   gender = memberNo.slice(6,7);
//   if(gender == '0') continue;

//   count++;
  
// }

// document.write('남자 회원수 = ' + count);


// //[문제 07] 입력받는 데이터중 짝수의 합을 구하려고 함.(입력개수에는 제한 x, 5개의 짝수의 합)


// let number = parseInt(prompt('정수입력:'));
// let evenSum = 0;

// for(let i = 0;; i++) {
//   if(i%3 == 0) continue;
//   evenSum += evensum;
// }

// document.write('짝수의 합:' + evenSum);


//teacher_

// let input = 0;
// let evenSum = 0;
// let count = 0;

// for( let i = 1;;i++) {
//   input = parsInt(prompt(i + 'd입력'));
//   if(i%2 === 1) continue; 
//   count++ //증감식으로 바로 올라감.
//   evenSum += input;
//   if(count === 5) break; 
// }

// document.write('짝수의 개수:' + count + '<br />');
// document.write('짝수의 합:' + sum + '<br />');


// //다중 for문


// for (let i = 1; i<=5; i++) {
//   for(let j = 1; j<=5; j++) {
//     document.write('(' + i + ',' + j + ')','<br />');
//   }
// }


//구구단

// for(let i = 1; i <= 9; i++) {
//   document.write('***' + i + '단 입니다.***' + '<br />');
//   for(let j = 1; j <= 9; j++){
//     let mul = i*j;
//     document.write(i + '*' + j + '=' + mul + '<br />');
//   }
//   document.write('<br />');
// }

// for(let i = 2; i <=9; i++) {
//   document.write('&nbsp;*' + i + '단 입니다.* &nbsp;');
// } 
// document.write('<br/>');

// for(let i = 1; i <= 9; i++ ) {
//   for(let j = 2; j <=9; j++) {
//     let mul = i*j;
//     document.write(j + '*' + i + '=' + mul + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
//   }
//   document.write('<br/>');
// }


// 3행 5열의 형태로 1부터 15까지 출력하기


// for (let i = 1; i <= 3; i++) {
//   document.write('<br/>');
//   for (let j = 1; j <= 5; j++){
//     document.write( j + '&nbsp;&nbsp;');
//   }
// }