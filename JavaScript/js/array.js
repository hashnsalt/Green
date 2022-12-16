//선언방법 1

// let arr = new Array(5); //5객체 길이 생략 가능.

// arr[0] = '홍길동';
// arr[1] = '프론트엔드';
// arr[2] = '20220829';
// arr[3] = '180cm';
// arr[4] = '70kg';

// // document.write(arr[1]);

// for(let i=0; i<5; i++) {
//   //데이터 개수가 5개이기 때문에 이런식으로 표현한다. i<=4는 틀린건 아니지만 표현 잘 안함.
//   document.write('[' + i + ']' + arr[i] + '<br/>');
// }



//선언방법 2_제일 많이 쓰는 방법

// let arr = new Array('홍길동', '프론트엔드', '20220829', '170cm', '70kg');

// for (let i = 0; i<arr.length; i++){
//   //arr.length = 3임. 3보다 작은 배열의 길이 0,1,2 길이를 가짐.
//   document.write(arr[i], '<br/>');
// }




//선언방법 3 js에서는 데이터 타입이 달라도 가능하다.

// let arr = [30, '홍길동', true];

// for(let i in arr) {
//   //i는 초기화할 필요가 없다 배열은 0부터 시작하므로, arr안의 i값을 출력해준다.
//   //arr을 선언할때 대괄호를 쓰지 않고 배열 함수 생성 new Array(30, '홍길동', true); 로 해주어도 됨.
//   document.write(arr[i], '<br/>');
// }


// //3명의 학생의 이름과 국어, 영어, 수학 점수를 저장하는 배열 생성. 단, 각기 다른 배열명으로 4개의 배열 생성.

// //우리반 학생의 국어 총점, 영어 총점, 수학총점

// let arr01 = ['홍길동', 90, 80, 60];
// let arr02 = ['장길산', 90, 90, 80];
// let arr03 = ['홍경래', 90, 95, 90];

// for(let i in arr01 ){
//   document.write(arr01[1]+ arr02[1] + arr03[1]);
// }



let arr01 = ['홍길동', 90, 80, 60];
let arr02 = ['장길산', 90, 90, 80];
let arr03 = ['홍경래', 90, 95, 90];


// for(let i = 1; i<=3; i++) {
//   if (i==1){
//     sumKor = arr01[i] + arr02[i] + arr03 [i];
//   } else if (i==2) {
//     sumEng = arr01[i] + arr02[i] + arr03 [i];
//   } else if (i==3) {
//     sumMath = arr01[i] + arr02[i] + arr03 [i];
//   }
// }
// document.write(sumKor + '<br/>' + sumEng + '<br/>' + sumMath);


// let studentName = arr01[0] + arr02[0] + arr03[0];
// let studentKo = arr01[1] + arr02[1] + arr03[1];
// let studentEng = arr01[2] + arr02[2] + arr03[2];
// let studentMath = arr01[3] + arr02[3] + arr03[3];

// document.write('학생이름: ' + studentName + '<br/> 국어 총점:' + studentKo + '<br/> 영어 총점:' + studentEng + '<br/> 수학총점:' + studentMath);