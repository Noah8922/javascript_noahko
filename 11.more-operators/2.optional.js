// 옵셔널 체이닝 연산자, Optional chaining Operator
// ES11 (ECMASCript 2020)
// ?.
// null 또는 undefined 을 확인 할 때
let item = { price: 1 };
const price = item?.price;
console.log(price);

let obj = { name: "🐶", owner: { name: "Noah" } };
function printName(obj) {
  const ownerName = obj?.owner?.name;
  console.log(ownerName);
}

printName(); //undefined, 인자를 넘겨주지 않았기 때문
printName(obj); // Noah,
