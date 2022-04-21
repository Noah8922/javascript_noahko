// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
let array = ["🍌", "🍓", "🍇", "🍓"];
// output: [ '🍌', '🥝', '🍇', '🥝' ]
const replace = (array, from, to) => {
  const newArr = Array.from(array);
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === from) {
      newArr[i] = to;
    }
  }
  return newArr;
};

// 재사용성을 높이기 위해서는 최대한 외부에서 값을 외부에서 받아올 수 있도록
const result = replace(array, "🍓", "🥝");
console.log(result);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
(input = ["🍌", "🥝", "🍇", "🥝"]), "🥝";
// output: 2
const count = (input, item) => {
  let a = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === item) {
      a++;
    }
  }
  console.log(a);
};

count(input, "🥝");
count(input, "🍌");

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

let arr1 = ["🍌", "🥝", "🍇"];
let arr2 = ["🍌", "🍓", "🍇", "🍓"];

const compare = (arr1, arr2) => {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  console.log(result);
};

compare(arr1, arr2);
