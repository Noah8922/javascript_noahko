// 논리 연산자 Logical Operator
// && 그리고
// || 또는
// ! 부정(단항연산자에서 온 것)
// !! boolean 값으로 변환 (단항연산자 응용버전)

let num = 7;
if (num >= 0 && num < 9) {
  //둘다 true일때
  console.log("👍");
}
console.log("=============");

if (num >= 0 || num > 20) {
  // 둘중에 하나만 true 일 때
  console.log("👍");
}
console.log("=============");

if (num != 8) {
  // 둘중에 하나만 true 일 때
  console.log("💪");
}

console.log(true && true); //true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

console.log(!"true"); // false, 문자열은 true인데 !하나를 붙이면 부정하게 되는 것이기 때문에, false가 나온다.
console.log(!!"text"); // true, 앞에 !! 두개를 붙이게 되면 뒤에 오는것의 true or false 값을 검사하는 것.
