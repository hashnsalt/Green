//1부터 10까지의 출력

// for(let i = 1; i<=10; i++){
//   document.write(i, '번째 출력<br/>');
// }



// 1부터 10까지의 출력

// let cnt = 1;
// while(cnt <= 10){
//   document.write(cnt + '번째 출력', '<br/>');
//   cnt++;
// }


// let num = 1;
// while(1){
//   document.write(num + '번째 출력', '<br/>');
//   if(num>=10) break;
//   num++;
// }


// [문제 01] 30보다 작거나 같은 수 중에서 2의 배수이면서 6의 배수 출력

// let num = 1;
// let result_02 = 0;
// let result_06 = 0;

// while(num<=30){
//   result_02 = num%2;
//   result_06 = num%6;
//   if(result_02 == 0 && result_06 == 0) {
//     document.write('2의 배수: ' + result_02 + '6의 배수: ' + result_06);
//   }
// }


// let num = 1;

// while (num <= 30) {
//   if(num%2 === 0 && num%6 === 0){
//     document.write (num + '<br />');
//   }
//   num++;
// }

//원하는 구구단을 출력하는 프로그램 작성.

let i = parseInt(prompt('몇단을 출력하시겠습니까?'));
let result = 0;


for (i = 2; i<=9; i++) {
  document.write('***' + i + '단 입니다.***');
  for (j = 1; j<=9; j++) {
    result = i*j;
    document.write(i + '*' + j + '=' + result + '<br/>');
  }
}

//do-while 문

// let cnt = 1;
// do {
//   document.write(cnt + '번째 출력<br/>');
//   cnt++;
// } while (cnt <= 5);

//while문

// let cnt = 1;
// while(cnt <= 5 ) {
// document.write(cnt + '번쨰 출력<br/>');
// cnt++;
// }