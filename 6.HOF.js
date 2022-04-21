const fruits = ["🍌", "🍓", "🍇", "🍓"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 배열을 빙글 빙글 돌면서 배열의 요소 하나하나 마다 원하는 것을 할 때 (forEach)
fruits.forEach(function (value) {
  console.log(value);
});

fruits.forEach((value) => console.log(value)); // 요소 전달한 후 콜백함수 실행

// 조건에 맞는 (콜백함수) 아이템을 찾을 때
// find : 제일 먼저 조건에 맞는 아이템을 반환
const item1 = { name: "🍔", price: 2 };
const item2 = { name: "🍟", price: 3 };
const item3 = { name: "🌭", price: 1 };
const products = [item1, item2, item3, item2];
let result = products.find((value) => value.name === "🍟");
console.log(result);

// findIndex : 제일 먼저 조건에 맞는 아이템의 인덱스(위치)를 반환
result = products.findIndex((value) => value.name === "🍟");
console.log(result);

// 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
// some : 조금이라도 부분만이라도 같다면,,,
// 배열의 아이템들중에 이름이 '🍟'와 같은게 하나라도 있니?
result = products.some((item) => item.name === "🍟");
console.log(result); // true

// 배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
// 배열의 아이템들이 이름이 전부 '🍟'와 같니?
result = products.every((item) => item.name === "🍟");
console.log(result); // false

// 조건에 맞는 모든 아이템들을 새로운 배열로
result = products.filter((item) => item.name === "🍟");
console.log(result); // [ { name: '🍟', price: 3 }, { name: '🍟', price: 3 } ]
