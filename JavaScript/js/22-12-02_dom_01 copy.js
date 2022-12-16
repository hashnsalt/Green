// document.querySelectorAll('.box03 li').style.backgroundColor = 'yellow';

document.querySelector('.box02').style.fontSize = '30px';

let li = document.querySelectorAll('.box03 li');

li.forEach((value) => {
  value.style.backgroundColor = 'gray';
});