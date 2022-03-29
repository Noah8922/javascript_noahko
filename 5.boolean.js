//불리언 타입
//!!을 붙이면 값을 true 혹은 false 로 변환 할 수 있다.

let 참 = true;
let 거짓 = false;
console.log(참);
console.log(거짓);

// 활용 예
let isFree = true;
let isActivated = false;
let isEnrolled = true;
console.log(isActivated);

console.clear();
//Falsshy  거짓인 값
console.log(!!0);
console.log(!!-0);
console.log(!!"");
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

//Truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!"text");
console.log(!!{});
console.log(!!Infinity);
