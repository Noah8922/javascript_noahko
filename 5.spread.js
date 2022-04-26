// Spread 연산자, 전개구문
// 모든 Iterable은 Spread 될 수 있다.
// 순회가 가능한 모든 것들은 촤르르르르륵 펼쳐 질 수 있다.
// func(...iterable)
// [...iterable]
// {...obj}
// Ecmascript 2018

function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];

console.log(add(nums[0], nums[1], nums[2]));
// 같은 내용
console.log(add(...nums));

// Rest parameters
function sum(first, second, ...nums) {
  console.log(nums);
}

sum(1, 2, 0, 1, 2, 4); // [ 0, 1, 2, 4 ], 첫번째랑 두번째 제외하고 다 nums로 들어감

// Array concat
const fruits1 = ["🍎", "🥝"];
const fruits2 = ["🍌", "🍊"];
let arr = fruits1.concat(fruits2);
console.log(arr);
let arr2 = [...fruits1, ...fruits2];
console.log(arr2);

// Object
const Noah = { name: "Noah", age: 20, home: { address: "home" } };
const updated = {
  ...Noah,
  job: "S/W engineer",
};
console.log(Noah);
console.log(updated);
