import shoppingList from "./data.js";
// shoppingList();

const section = document.querySelector('.product_best');


for(let i=0; i<shoppingList.length; i++) { //전체 상품 계시. 8개만 뽑겠다하면 length를 8개로 바꿔준다.

let bestDiv = document.createElement('div');
bestDiv.setAttribute('class', 'best_box');//클래스 추가

let bestImg = document.createElement('img');
bestImg.setAttribute('src', shoppingList[i].src);
bestDiv.appendChild(bestImg);

// section.appendChild(bestDiv);

let bestNameDiv = document.createElement('div');

let bestNameText = document.createTextNode(shoppingList[i].name);

bestNameDiv.appendChild(bestNameText);
bestDiv.appendChild(bestNameDiv);

let bestPrice = document.createElement('div');
let bestPriceText = document.createTextNode(shoppingList[i].price);
bestPrice.appendChild(bestPriceText);
bestDiv.appendChild(bestPrice);

section.appendChild(bestDiv);

} 