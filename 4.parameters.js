// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨 (배열임)
// 매개변수 기본값 Default Parameters a =1, b =2
function add(a = 1, b = 2) {
  // add()를 대비, 아무것도 지정하지 않았을 떄 default값 지정.
  console.log(a);
  console.log(b);
  console.log(arguments);
  console.log(arguments[0]);
  return a + b;
}

add(); // undefined
add(1, 2, 3); // 마지막 값은 무시됨

// Rest 매개변수 Rest Parameters, 배열로 들어오게 된다.
function sum(...numbers) {
  console.log(numbers);
}

sum(1, 2, 3, 4, 5, 6, 7);

// 일정부분 지정하는 경우
function sum(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers); //3,4,5,6,7
}

sum(1, 2, 3, 4, 5, 6, 7);
