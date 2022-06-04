// 산술연사자 (Arithmetic operator)
//+ 더하기
//- 뺴기
//* 곱하기
/// 나누기
//% 나머지값
// **  제곱

console.log(5 + 2); // 7
console.log(5 - 2); // 3
console.log(5 * 2); // 10
console.log(5 / 2); // 2.5
console.log(5 % 2); // 1
console.log(5 ** 2); //es7, 25
console.log(Math.pow(5, 2)); // 25

// + 연산자 주의점!
let text = "두개의 " + "문자를";
console.log(text); // 두개의 문자를
text = "1" + 1; // 숫자와 문자열을 더하면 문자열로 변환됨.
console.log(text); // 11
