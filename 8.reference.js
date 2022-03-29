// 원시타입은 값이 복사되어 전달 됨
let a = 1;
let b = a; //1
b = 2;
console.log(a); //1
console.log(b); //2

// 객체타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨.
let apple = {
  // 0X1234
  name: "사과",
};

let orange = apple; // apple이라는 object가 복사되는 것이 아니라, apple에 할당된 메모리 주소가 복사됨. 0X1234
orange.name = "오렌지"; // 동일한 주소를 가지고 있기 때문에, 배열 밖에서도 내용을 바꿀 수 있음.
console.log(apple);
console.log(orange);
