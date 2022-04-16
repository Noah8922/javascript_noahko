const x = 0;
const y = 0;
const coordinate = { x, y }; //{ x: x, y: y };
console.log(coordinate);

function makeObj(name, age) {
  return {
    name: name,
    age: age,
  };
}

// 변수의 이름과 매개변수의 이름이 같다면 생략 가능
function makeObj(name, age) {
  return {
    name,
    age,
  };
}
