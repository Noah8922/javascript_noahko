// 동등 비교 관께 연산자 (Equality operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 갑과 타입이 다름

console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == 3);
console.log(2 == "2"); //타입은 다르지만 담고 있는 2는 똑같다.
console.log(2 === "2"); // 타입과 값 모두가 다르다. ✅
console.log(true == 1);
console.log(true === 1);
console.log(false == 0);
console.log(false === 0);
console.clear();

const obj1 = {
  name: "js",
};

const obj2 = {
  name: "js",
};

console.log(obj1 == obj2); //false : 메모리 주소가 다르기 때문에
console.log(obj1 == obj2); //false : 값 자체가 다르다.
console.log(obj1.name == obj2.name);
console.log(obj1.name === obj2.name);

let obj3 = obj2; // 동일한 메모리 주소를 가지고 있다.
console.log(obj3 == obj2);
console.log(obj3 === obj2);
