


// document.write('Hello, JavaScript~~~');

// console.log('Hello, JS!!!');


// let kor = parseInt(prompt('국어 점수'));
// // parseInt: 정수형으로 바꿔줌. parseFloat: 실수형으로 바꿔줌.
// let eng = parseInt(prompt('영어 점수'));

// let sum = kor + eng;

// document.write('점수 합계 : ' + sum);


// let num1 = 5;
// let num2 = 3;
// let add = 0;
// let sub = 0;

// add = num1 + num2;
// sub = num1 - num2;

// document.write('sum = ' + add + '<br />');
// document.write('subject = ' + sub); //오버라이딩. 

//합계와 뺄셈의 변수를 같이 사용하면 합의 변수 값을 마이너스 변수 값이 덮어씀.

//선언 영역, 계산 영역, 출력 영역을 구분지어서 코딩하기.


//1. 두 수 입력받아 사칙 연산

let num1 = parseInt(prompt('num1'));
let num2 = parseInt(prompt('num2'));

let sum = num1 + num2;
let sub = num1 - num2;

document.write('num1 + num2 = ' + sum + '<br />');
document.write('num1 + num2 = ' + sub + '<br />');


//2. 국어, 영어 수학 점수를 변수에 할당하여 총점과 평균을 출력.

const kor = 100;
const eng = 90;
const math = 70;

sum = kor + eng + math;
avg = (kor + eng + math)/3;

document.write('국어 점수 : ' + kor + '<br />');
document.write('영어 점수 : ' + eng + '<br />');
document.write('수학 점수 : ' + math + '<br />');
document.write('총 점 = ' + sum + '<br />');
document.write('평 균 = ' + avg + '<br />');


//3. ID와 PW를 입력받아 하나의 변수로 출력. 하나의 변수를 출력해라는 말은 하나로 출력해란 말.

let userId = prompt('ID: ');
let userPw = prompt('PW: ');

// document.write('ID : ' + userId + userPw + '<br />'); //이렇게 해도 되고,
let result = userId + userPw;

document.write(result + '<br />');

//4. 반지름을 입력받아 원의 둘레와 넓이를 출력
//넓이: 파이 * r^2
//둘레: 파이 * r * 2

let r = parseInt(prompt('r'));
const pi = 3.141592;

width = (r * r) * pi;
round = (r * 2) * pi;

document.write('원의 넓이 : ' + width + '<br />');
document.write('원의 둘레 : ' + round );