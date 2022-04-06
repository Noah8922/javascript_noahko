// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함.
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 2배 값을 출력하고 싶음
// function iterate(max, action)

const print = (a) => {
  for (let i = 0; i < a; i++) {
    console.log(i);
  }
};

const makeDouble = (a) => {
  for (let i = 0; i < a; i++) {
    const result = i * 2;
    console.log(result);
  }
};

function iterate(max, action) {
  return action(max);
}

iterate(5, print);
iterate(5, makeDouble);

iterate(3, (num) => console.log(num));
iterate(3, (num) => console.log(num * 2));

// 콜백함수의 실제 예시
setTimeout(() => {
  console.log("3초뒤에 실행될 거에요");
}, 3000);
