// 사용예제 1

function add(a, b) {
  console.log("Activated");
  return a + b;
}

const result = add(1, 2);
console.log(result);

// 사용 예제 2
function makeFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
let lastName = "김";
let firstName = "지수";
console.log(makeFullName(firstName, lastName));

let lastName2 = "박";
let firstName2 = "철수";
console.log(makeFullName(firstName2, lastName2));
