// 증가 & 감소 연산자 Increment & Decrement Operator
let a = 0;
console.log(a);

a++; //a = a + 1;
console.log(a);

a--; // a = a -1
console.log(a);

console.clear();

// 주의!!
// a++ 필요한 연산을 하고, 그 뒤 값을 증가시킴
// ++a 값을 먼저 증가하고 필요한 연산

a = 0;
let b = a++;
console.log(b); // 0 일단 할당을 먼저하고
console.log(a); // 1 그 다음에 연산을 한다.

a = 0;
let c = ++a;
console.log(c); //1 연산을 먼저하고 할당함
console.log(a); //1 이미 연산이 끝나있는 상태

a = 0;
console.log(a++); // 0 할당을 끝낸 값
console.log(a); // ++연산을 끝낸 후의 값
