
// let a = 10;
// let b = 20;
// let result = '';


// a > b ? document.write('JS') : document.write('hello~'); 
// 일회용임.

// result = a > b ? 'JavsScript!' : 'Hello~';
// document.write(result); 주로 이렇게 쓰는게 좋음


// let num1 = 5;
// let num2 = 2;
// let max = 0;
// let min = 0;

// num1 > num2 ? document.write(num1) : document.write(num2);

// max = num1 > num2 ? num1 : num2;
// document.write(max);

// num1 > num2 ? (max = num1, min = num2) : (max = num2, min = num1);
// document.write('max= ' + max + ', min= ' + min);


// max = num1 > num2 ? num1 : num2;
// min = num1 < num2 ? num1 : num2;

// document.write('max= ' + max + ', min= ' + min);


//1. 두 개의 수를 입력 받아 큰 수 출력

// let num1 = parseInt(prompt('첫번째 수 입력'));
// let num2 = parseInt(prompt('두번째 수 입력'));

// let max = 0;

// max = num1 > num2 ? num1 : num2;

// document.write('max= ' + max);

// 2. 하나의 정수를 입력받아 홀수, 짝수 구분

// let num = parseInt(prompt('숫자를 입력하시오.'));

// let result = num % 2;

// result === 0 ? document.write('짝수') : document.write('홀수');

// 숫자를 입력받아 숫자를 비교하므로 result == 0 ? 처럼 '='을 두개 써도 된다.


// 4. 학생의 하루 지출 내역은 교통비(3000원), 식비(6000원), 음료(3000원)이다.
// 하루 용돈 10000원으로 지출 비용을 계산하여라.
// 초과일 경우 'oo원 초과'로 출력하시오.

// let car_pay = 3000;
// let food_pay = 6000;
// let drink_pay = 3000;

// let day_pay = 10000;

// let result = day_pay - (car_pay + food_pay + drink_pay);

// result <= 0 ? document.write( -result + '초과') : document.write('초과아님');


//teacher_solution

// let pocketMoney = 10000;
// let expense = 0;
// let restMoney = 0;

// expense = 3000 + 6000 + 3000;
// restMoney = pocketMoney - expense;

// restMoney > 0 ? document.write( -restMoney + '원 초과') : document.write('초과아님');


//본인의 신장과 체중을 입력 받아 적정 체중을 판단을 하시오.

// let kg = parseInt(prompt('체중을 입력하세요'));
// let cm = parseInt(prompt('신장을 입력하세요'));

// let result = parseInt((cm - 100) * 0.9);

// kg == result ? document.write('적정 체중: ' + result) : (kg >= result ? '과체중' : '체중 미달');


// 숫자를 3개를 입력받으시오. max, mid, min 값을 구하시오.


// let num1 = parseInt(prompt('첫번째 수를 입력하시오.'));
// let num2 = parseInt(prompt('두번째 수를 입력하시오.'));
// let num3 = parseInt(prompt('세번째 수를 입력하시오.'));

// num1 > num2 && num1 > num3 == true ? document.write('max= ' + num1) : (num2 > num3 && num2 > num1 == true ? document.write('max= ' + num2) : (num3 > num1 && num3 > num2 == true ? document.write('max = ' + num3) : document.write('min= ' + num3)); 


// let num1 = parseInt(prompt('첫번째 수를 입력하시오.'));
// let num2 = parseInt(prompt('두번째 수를 입력하시오.'));
// let num3 = parseInt(prompt('세번째 수를 입력하시오.'));

// let max = 0, mid = 0, min = 0;

// num1 > num2 ? max = num1 : (num2 > num3 ? (mid = num2, min = num3) : (mid = num3, min = num2));
// num2 > num3 ? max = num2 : (num1 > num3 ? (mid = num1, min = num3) : (mid = num3, min = num1));
// num3 > num1 ? max = num3 : (num1 > num2 ? (mid = num1, min = num2) : (mid = num2, min = num1));

// num1 > num2 && num1 > num3 ? max = num1 : (num2 > num3 ? (mid = num2, min = num3) : (mid = num3, min = num2));
// num2 > num1 && num2 > num3 ? max = num2 : (num1 > num3 ? (mid = num1, min = num3) : (mid = num3, min = num1));
// num3 > num1 && num3 > num2 ? max = num3 : (num1 > num2 ? (mid = num1, min = num2) : (mid = num2, min = num1));

// document.write('max = ', max);
// document.write('mid = ', mid);
// document.write('min = ', min);

// 이렇게 쓰는 것이 더 좋다. 위의 방식은 절대값이 제일 큰 값을 정해주고 코드를 짯기 때문에 모순이 있을 수가 있다.