// Nullish Coalescing Operator
// ES11 (ECMAScript 2020)
// ?? null, undefined
// || falshy한 경우 설정 (할당) 0,-0,null, undefined, ''
//

let num = 0;
console.log(num || "-1"); // -1, 왜냐하면 0은 false 값이기 때문

let num2;
console.log(num2 ?? "-1"); // -1, num2가 없기 때문에 null값 이기 때문에.
