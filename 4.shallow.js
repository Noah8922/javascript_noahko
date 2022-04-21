// 얕은 복사 shallow copy - 객체는 메모리 주소 전달
// 자바스크립트에서 복사할 때는 항상 얕은 복사가 이루어짐!
// Array.from, concat, spread(...), object.assign
// 기존의 Object를 전달하고 복사할 때는
// 새로운 Object가 만들어지는 것이 아니라, 얕은 복사가 이루어짐
const pizza = { name: "🍕", price: 2 };
const ramen = { name: "🍜", price: 3 };
const sushi = { name: "🍣", price: 1 };
const store1 = [pizza, ramen]; // pizza의 데이터가 저장된 메모리 주소를 복사해옴
const store2 = Array.from(store1);
console.log("store1", store1);
console.log("store2", store2);

store2.push(sushi);
console.log("store1", store1);
console.log("store2", store2);

pizza.price = 4;
console.log("store1", store1);
console.log("store2", store2);
