const fruits = ["🍌", "🍓", "🍇", "🍓"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 배열을 빙글 빙글 돌면서 배열의 요소 하나하나 마다 원하는 것을 할 때 (forEach)
fruits.forEach(function (value) {
  console.log(value);
});

fruits.forEach((value) => console.log(value)); // 요소 전달한 후 콜백함수 실행

// 조건에 맞는 (콜백함수) 아이템을 찾을 때
// find : 제일 먼저 조건에 맞는 아이템을 반환
const item1 = { name: "🍔", price: 2 };
const item2 = { name: "🍟", price: 3 };
const item3 = { name: "🌭", price: 1 };
const products = [item1, item2, item3, item2];
let result = products.find((value) => value.name === "🍟");
console.log(result);

// findIndex : 제일 먼저 조건에 맞는 아이템의 인덱스(위치)를 반환
result = products.findIndex((value) => value.name === "🍟");
console.log(result);

// 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
// some : 조금이라도 부분만이라도 같다면,,,
// 배열의 아이템들중에 이름이 '🍟'와 같은게 하나라도 있니?
result = products.some((item) => item.name === "🍟");
console.log(result); // true

// 배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
// 배열의 아이템들이 이름이 전부 '🍟'와 같니?
result = products.every((item) => item.name === "🍟");
console.log(result); // false

// 조건에 맞는 모든 아이템들을 새로운 배열로 만들기
result = products.filter((item) => item.name === "🍟");
console.log(result); // [ { name: '🍟', price: 3 }, { name: '🍟', price: 3 } ]

console.clear();

// Map 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성!
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result);

// Flatmap : 중첩된 배열에 대해 매핑하는 것.
result = nums.map((item) => [1, 2]);
console.log(result);

result = nums.flatMap((item) => [1, 2]);
console.log(result);

result = ["dream", "coding"].map((text) => text.split(""));
console.log(result);
// [ [ 'd', 'r', 'e', 'a', 'm' ], [ 'c', 'o', 'd', 'i', 'n', 'g' ] ]
// 두개의 배열이 됨

result = ["dream", "coding"].flatMap((text) => text.split(""));
console.log(result);
// ['d', 'r', 'e', 'a','m', 'c', 'o', 'd', 'i', 'n', 'g']
// 하나의 배열로 펴짐

// sort 배열의 아이템들을 정렬할 수 있음
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경

const text = ["hi", "abc"];
text.sort();
console.log(text); // 알파벳 순서 [ 'abc', 'hi' ]

// 숫자가 문자열 형태로 변환되어서 그 상태에서 정렬이 되기 때문에 조심해야 한다.
// 숫자가 문자로 취급되어서 정렬 된다. 1 다음에 10 그리고 2가 나온다
// 1이 2 보다 앞서 있기 때문에
const number = [0, 5, 2, 4, 1, 10];
number.sort();
console.log(number); // [ 0, 1, 10, 2, 4, 5 ]
number.sort((a, b) => a - b); // 어떻게 sorting 할 수 있는지 그 기준점을 정해줘야 한다.
// a-b값이 음수이면 a,b / a-b가 0이면 둘이 같은 수 / a-b가 양수이면 b,a 순서로
console.log(number); // [ 0, 1, 2, 4, 5, 10 ]

// reduce 배열의 요소들을 접어서 접어서 값을 하나로!
result = [1, 2, 3, 4, 5].reduce((sum, value) => {
  sum += value;
  return sum;
}, 0);
console.log(result);
// sum = 값을 계속해서 저장할 인자
// 0은 sum의 초기값
// value에는 각각의 요소들이 순차적으로 할당이 된다.
