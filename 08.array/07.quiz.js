// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
let array = ["🍌", "🍓", "🍇", "🍓"];
// output: [ '🍌', '🥝', '🍇', '🥝' ]
// if문을 쓸때는 삼항연산자를 최대한 사용해보기

function replace(array, from, to) {
  const replaced = Array.from(array);
  result = replaced.map((item) => {
    return item === from ? to : item;
  });
  console.log(result);
}

replace(array, "🍓", "🥝");

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
(input = ["🍌", "🥝", "🍇", "🥝"]), "🥝";
// output: 2

function count(input, fruit) {
  const result = input.filter((item) => item === fruit).length;
  console.log(result);
}

count(input, "🥝");

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

let arr1 = ["🍌", "🥝", "🍇"];
let arr2 = ["🍌", "🍓", "🍇", "🍓"];

function match(arr1, arr2) {
  const result = arr1.filter((item) => arr2.includes(item));
  console.log(result);
}

match(arr1, arr2);

// compare(arr1, arr2);

// 퀴즈 4

// 5이상(보다 큰)의 숫자들의 평균

const nums = [3, 16, 5, 25, 4, 34, 21];
function average(nums) {
  const result2 = nums //
    .filter((item) => item > 5) //
    .reduce((avg, num, _, array) => avg + num / array.length, 0);
  console.log(result2);
}

average(nums);
