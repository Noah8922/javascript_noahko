let a = 2;
let b = 3;
let result = a + b * 4;
console.log(result); //14
result = (a + b) * 4; // 원하는 연산을 먼저 하고 싶다면 괄호로 묶어줄것
console.log(result); //20

result = a++ + b * 4;
console.log(result); // 14
