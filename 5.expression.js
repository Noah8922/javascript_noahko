// 함수 선언문 function name()  {}
// 함수 표현식 모든 표현식은 문인데, 문중에서도 값으로 표현될 수 있는게 표현식이다.
// const name = function () {}
// 함수도 객체이기 때문에 다른 변수에 할당하거나 재할당하는 것이 가능함.
// 표현식으로 작성한 함수는 함수 이름을 쓸 필요 없음

let add = function (a, b) {
  return a + b;
};

console.log(add(1, 2)); // function이 가지고 있는 메모리 주소에 add를 저장하고 add를 호출해서 인자를 넘겨주면 function을 불러오게 된다.

// 화살표 함수 const name = () => {}

add = (a, b) => {
  return a + b;
};

console.log(add(1, 2));

// return만 하는 간단한 함수라면
add = (a, b) => a + b;

console.log(add(1, 2));

// 생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸

// 많이 사용되지는 않음
//IIF (Immediately-Invoked Function Expressions)
(function run() {
  console.log("💪");
})();
