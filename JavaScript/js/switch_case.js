

//swich-case문을 if문으로 변환


// let num = parseInt(prompt('번호를 선택하세요.'));

// let result = '';


// if (num == 1) {
// //  document.write('예금조회');
//  result = '예금조회';
// }

// else if (num == 2) {
//  // document.write('예금출금');
//  result = '예금조회';
// }

// else if (num == 3) {
//  // document.write('예금입금');
//  result = '예금조회';
// }

// else if (num == 4) {
//  // document.write('예금이체');
//  result = '예금조회';
// }

// else {
//  document.write('잘못 눌렀음.');
// }

// document.write(result);

//  ' == ' 부등호가 2개이기 때문에 prompt로 그대로 받아도 형태만 같으면 같음 처리가 된다.



// if문을 switch-case문으로

// let num = parseInt(prompt('번호를 선택하세요.'));
// let result = '';

// switch(num) {
//   case 1: result = '예금 조회';
//   break;
//   case 2: result = '예금 출금';
//   break;
//   case 3: result = '예금 입금';
//   break;
//   case 4: result = '예금 이체';
//   break;
//   default:
//     document.write('잘못 눌렀음.');
// }

// document.write(result);


// let num01 = parseInt(prompt('첫번째 정수를 입력하세요'));
// let num02 = parseInt(prompt('두번째 정수를 입력하세요'));
// let operator = prompt('부호를 입력하세요');
// let result = 0;


//Q. 두수와 연산자를 입력받아 결과 값을 도출하는 문제

// switch(operator) {
  
//   case '+' : result = num01 + num02;
//   break;

//   case '-' : result = num01 - num02;
//   break;

//   case '*' : result = num01 * num02;
//   break;

//   case '/' : result = num01 / num02;
//   break;

//   defalt :
//   document.write('잘못 입력하셨습니다.');

// }

// document.write('결과값: ' + result + '<br />');
// document.write('연산식: ' + num01 + operator + num02 );


//switch -> if

// let num01 = parseInt(prompt('첫번째 정수를 입력하세요'));
// let num02 = parseInt(prompt('두번째 정수를 입력하세요'));
// let operator = prompt('부호를 입력하세요');
// let result = 0;

// if ( operator == '+') {
//   result = num01 + num02;
// } else if (operator == '-') {
//   result = num01 - num02;
// } else if (operator == '*') {
//   result = num01 * num02;
// } else if (operator == '/') {
//   result = num01 / num02;
// } else {
//   document.write('잘못 입력하셨습니다.');
// }

// document.write('결과값: ' + result + '<br />');
// document.write('연산식: ' + num01 + operator + num02);


// let site = prompt('네이버, 다음 네이트 구글 중 즐겨찾는 검색사이트 입력');
// let url;

// switch(site) {
//   case '네이버': url = 'www.naver.com'; //http: 프로토콜이 들어가면 링크 실행이 안되니까 꼭 걸어줘야함. 지금은 같이 걸꺼라서 아직 안잡아줌.
//   break;
//   case '다음': url = 'www.daum.net';
//   break;
//   case '네이트': url = 'www.nate.com';
//   break;
//   case '구글': url = 'www.google.com';
//   break;
//   default:
//     alert('잘못된 사이트를 입력하셨습니다~~~');
// }

// if (url) location.href = 'http://' + url; //중괄호 써줘도 되고 안써줘도 된다. location: href 링크의 위치로 이동한다.


// let str = prompt('해당 음식의 처음 스펠링을 입력하세요.(대소문자 구분 없음)');

// switch(str) {
//   case 'P':
//   case 'p': document.write('Pizza를 주문하셨습니다.');
//   break;

//   case 'S':
//   case 's': document.write('Spaghetti를 주문하셨습니다.');
//   break;
  
//   case 'R':
//   case 'r': document.write('Risotto를 주문하셨습니다.');
//   break;

//   case 'D':
//   case 'd': document.write('Drink를 주문하셨습니다.');
//   break;
  
//   default:
//     document.write('메뉴에 없습니다.');
// }


//switch -- > if 

// let str = prompt('해당 음식의 처음 스펠링을 입력하세요.(대소문자 구분 없음)');
// let menu = '';

// if(str == 'P' || str == 'p') {
//   menu = 'Pizza';
// } else if (str == 'S' || str == 's') {
//   menu = 'Spaghetti';
// } else if (str == 'R' || str == 'r') {
//   menu = 'Risotto';
// } else if (str == 'D' || str == 'd') {
//   menu = 'Drink';
// } else {
//   document.write('메뉴에 없습니다.');
// }

// document.write( menu + '를 주문하셨습니다.');


// Q.math.floor 함수를 사용하여 학점 계산.



// let ko = parseInt(prompt('국어 점수를 입력하세요.'));
// let eng = parseInt(prompt('영어 점수를 입력하세요.'));
// let math = parseInt(prompt('수학 점수를 입력하세요.'));

// let sum = ko + eng + math;
// let avg = Math.floor(sum / 3);

// let score = '';

// switch(avg) {
//   case 100:
//   case 90: score = 'A';
//   break;
//   case 80: score = 'B';
//   break;
//   case 70: score = 'C';
//   break;
//   case 60: score = 'D';
//   break;
//   case 50:
//   case 40:
//   case 30:
//   case 20:
//   case 10:
//   case 0: score = 'F';
//   break;
//   default:
//     document.write('잘못 입력 했습니다.');  
// }

//   document.write('학점: ' + score + '<br />' );
//   document.write('평균: ' + avg + '<br />' );



// Q. 지역명을 입력하면 지역번호를 알려주는 프로그램 작성하기 

// 서울:02 경기:031 부산:051 대구:053 인천:032 강원:033 광주:062 대전:042 울산:052 
// 전북:063 전남:061 제주:064 
// 그외지역) 아직 등록되어 있지 않습니다.

// let local = prompt('지역을 입력하세요.');

// let localNum = '';

// switch (local) {
//   case '서울': localNum = '02';
//   break;
//   case '경기': localNum = '031';
//   break;
//   case '부산': localNum = '051';
//   break;
//   case '대구': localNum = '053';
//   break;
//   case '인천': localNum = '032';
//   break;
//   case '강원': localNum = '033';
//   break;
//   case '광주': localNum = '062';
//   break;
//   case '대전': localNum = '042';
//   break;
//   case '울산': localNum = '052';
//   break;
//   case '전북': localNum = '063';
//   break;
//   case '전남': localNum = '061';
//   break;
//   case '제주': localNum = '064';
//   break;
//   default:
//     document.write('아직 등록되어 있지 않습니다.');
// }

// document.write(localNum);


//switch --> if문

// let local = prompt('지역을 입력하세요.');
// let localNum = '';

// if (local == '서울') {
//   localNum = '02';
// } else if (local == '경기') {
//   localNum = '031';
// } else if (local == '부산') {
//   localNum = '051';
// } else if (local == '대구') {
//   localNum = '053';
// } else if (local == '인천') {
//   localNum = '032';
// } else if (local == '강원') {
//   localNum = '033';
// } else if (local == '광주') {
//   localNum = '062';
// } else if (local == '대전') {
//   localNum = '042';
// } else if (local == '울산') {
//   localNum = '052';
// } else if (local == '전북') {
//   localNum = '063';
// } else if (local == '전남') {
//   localNum = '061';
// } else if (local == '제주') {
//   localNum = '064';
// } else {
//   alert('아직 등록되어 있지 않습니다.');
//   let local = prompt('지역을 입력하세요');

// }

// document.write(localNum);


//<select id="hz" onchange="homzzang()">

// <option value="">선택

// <option value="HTML">HTML

// <option value="CSS">CSS

// <option value="JS">JS

// </select>



// <p id="view"></p>



// <script>

// function homzzang() {

//   var x = document.getElementById("hz").value;

//   document.getElementById("view").innerHTML = x + "선택";

// }

// </script>

  function selectBox(this) {
    let x = document.getElementById("selBox").value;
    document.getElementById("view").innerHTML = "지역번호: " +  x;
    }

    selectBox();