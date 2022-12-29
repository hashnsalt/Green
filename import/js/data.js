const shoppingList = [
  {
    id: "sam01", //키값으로 사용할 것이기 때문에 구분할 수 있는 명칭이면 된다.
    name: "캠핑어묵탕",
    price: 5000,
    src: "./js/images/best_01.png"
  }, //하나의 객체가 들어감.
  {
    id: "sam02",
    name: "모듬어묵",
    price: 8000,
    src: "./js/images/best_02.png"
  },
  {
    id: "sam03",
    name: "모듬실속어묵",
    price: 12000,
    src: "./js/images/best_03.png"
    //날짜순으로 정렬할수도 있음. date: 22-12-20 비싼 순 싼순으로도 정렬할 수 있음.
  },
  {
    id: "sam04",
    name: "한끼어묵",
    price: 10000,
    src: "./js/images/best_04.png"
  },
  {
    id: "sam05",
    name: "세트어묵",
    price: 9000,
    src: "./js/images/best_05.png"
  },
  {
    id: "sam06",
    name: "땡초어묵",
    price: 10000,
    src: "./js/images/best_06.png"
  },
  {
    id: "sam07",
    name: "옛날어묵",
    price: 11000,
    src: "./js/images/best_07.png"
  },
  {
    id: "sam08",
    name: "어묵바",
    price: 5000,
    src: "./js/images/best_08.png"
  },


]

export default shoppingList //배열 객체를 다른 파일에서 import할 수 있도록 내보내기(export) 처리를 해준다.