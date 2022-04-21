// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지

const fruits = ["🍌", "🍎", "🍇", "🍑"];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

// 특정한 아이템의 위치를 찾을 때
console.log(fruits.indexOf("🍎"));

// 배열안에 특정한 아이템이 있는지 체크
console.log(fruits.includes("🍎"));

// 추가 - 제일 뒤에 추가
let length = fruits.push("🍒"); // 배열자체를 수정 변경
console.log(fruits); //[ '🍌', '🍎', '🍇', '🍑', '🍒' ]
console.log(length); // 5, 배열의 길이를 리턴해줌

// 추가 - 제일 앞에 추가
length = fruits.unshift("🍕"); // 배열자체를 수정 변경
console.log(fruits); // [ '🍕', '🍌', '🍎', '🍇', '🍑', '🍒' ]
console.log(length); // 6

// 제거 - 제일 뒤
let lasItem = fruits.pop(); // 제일 마지막에 제거된 아이템이 리턴됨
console.log(fruits); // [ '🍕', '🍌', '🍎', '🍇', '🍑' ]
console.log(lasItem); // 🍒

// 제거 - 제일 앞
lasItem = fruits.shift(); // 제일 마지막에 제거된 아이템이 리턴됨
console.log(fruits); // [ '🍌', '🍎', '🍇', '🍑' ]
console.log(lasItem); // 🍕

// 중간에 추가 및 삭제
const deleted = fruits.splice(1, 1); // 배열 자체를 수정하고 업데이트 해줌
console.log(fruits); // [ '🍌', '🍇', '🍑' ]
console.log(deleted); // [ '🍎' ]
fruits.splice(1, 0, "🍏", "🥝", "🍆");
console.log(fruits); // [ '🍌', '🍏', '🥝', '🍆', '🍇', '🍑' ]

// ---------------------------------- 기존에 배열 자체를 변경하는 함수

// ---------------------------------- 새로운 배열을 만드는 함수
let newArr = fruits.slice(0, 2); //0은 포함 2는 미포함, 0부터 1까지
console.log(newArr);
console.log(fruits); // 기존 배열 그대로 유지
newArr = fruits.slice(); // 아무것도 입력 안했을 떄는 배열 전체 반환
newArr = fruits.slice(1); // 1부터 끝까지
newArr = fruits.slice(-1); // 뒤에서부터 한칸 땡겨진 아이템 부터 반환
console.log(newArr);

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]

// 배열의 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4); // [ 6, 5, 4, 3, 2, 1 ]
console.clear();
// 중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
  [1, 2, 3],
  [4, [5, 6]],
];
console.log(arr);
console.log(arr.flat()); // 1단계만 풀어줌
console.log(arr.flat(2)); // 2단계 까지 풀어줌

arr = arr.flat(3);
// 특정한 값으로 배열을 채우기
arr.fill(0); //배열자체를 수정
console.log(arr);

arr.fill("s", 1, 3);
console.log(arr);

arr.fill("a", 1);
console.log(arr);

// 배열을 문자열로 합하기
let text = arr.join();
console.log(text);

text = arr.join(" | ");
console.log(text);
