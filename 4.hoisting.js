// 함수의 호이스팅은 함수의 선언문 전에 호출이 가능하게 해줌
// 함수의 선언문은 선언 이전에도 호출이 가능함

print();

function print() {
  console.log("hello");
}

//변수(let, const)와 클래스는 선언만 호이스팅이 되고,
// 초기화는 안됨
// 초기화 전, 변수에 접근하면 컴파이(빌드) 에러가 발생

//console.log(hi); //Cannot access 'hi' before initialization
let hi = "hi";
let func1 = function () {};

// const cat = new Cat(); // Cannot access 'Cat' before initialization
class Cat {}

let x = 1;
{
  //console.log(x); // Cannot access 'x' before initialization
  let x = 2; //  X라는 변수가 선언까지만 호이스팅이 되었지만 초기화 되지는 않은 상태
}