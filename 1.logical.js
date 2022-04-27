// 논리연산자 Logical Operator
// && 그리고 둘다 true
// || 또는  둘중에 하나라도 true
// 단축 평가 : short-circuit evaluation

const obj1 = { name: "🐔" };
const obj2 = { name: "🐶", owner: "Noah" };

if (obj1 && obj2) {
  // 값이 있기 때문에 boolean으로 평가 됨, true
  console.log("둘다 true");
}

// 조건문 밖에서 쓰면 평가가 단축 됨, 앞에 것이 트루일 때 변수에 뒤에거를 할당한다.
let result = obj1 && obj2; // &&는 둘다 트루여야 하는데, 앞에게 트루이면 뒤에거를 할당하는 것이고
console.log(result);

result = obj1 || obj2;
// ||는 둘중에 하나만 트루여도 되니까 앞에것이 트루라면 뒤에거는 볼 것도 없다. 바로 앞에거 할당한다.
console.log(result); //{ name: '🐔' }

result = false || obj2;
console.log(result); // { name: '🐶', owner: 'Noah' }

// 활용예
// 조건이 truthy 일때 && 이 내용을 해야할 경우
// 조건이 falshy 일때 || 이 내용을 해야할 경우

function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error("주인이 없음");
  }
  animal.owner = "바뀐주인!";
}
function makeNewOwenr(animal) {
  if (animal.owner) {
    throw new Error("주인이 있어");
  }
  animal.owner = "새로운주인!";
}

console.clear();

obj1.owner && changeOwner(obj1); // false && 실행 안됨
obj2.owner && changeOwner(obj2); // true && 실행 됨
console.log(obj1);
console.log(obj2);

obj1.owner || makeNewOwenr(obj1); // false && 뒤에거가 실행됨
obj2.owner || makeNewOwenr(obj2); // true && 앞에거에서 끝남
console.log(obj1);
console.log(obj2);

// null 또는 undefined인 경우를 확인할 때
// let item; // = { price: 1 };
// const price = item.price;
// console.log(price); // Cannot read property 'price' of undefined

let item = { price: 1 };
const price = item && item.price;
console.log(price); // 1

// 기본값을 설정, 인자로 아무것도 주지 않았을 때
function print(message) {
  console.log(message);
}
print(); //undefined

// || 연산자로 기본값 설정
function print1(message) {
  const text = message || "no message";
  console.log(text);
}
print1(); // no message

// Default Message를 쓰면 되지 않는가
function print1(message = "no message") {
  console.log(message);
}
print1(""); // ' '

// 차이점이 있음
// default parameter는 인자가 null과 undefined인 경우에만 사용가능
// || 연산자는 falshy 한 경우 설정(할당), 0,-0, null, undefined, ''(빈문자열)
