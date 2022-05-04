//let은 재할당 가능
let a = 1;
a = 2;

//const는 재할당이 불가능
//1.상수
//2.상수변수 또는 변수

const text = "hello";
//text = "hi"; //에러나서 프로그램 닫힘, 이렇게 하면 안됨.

//1.상수
const MAX_FRUITS = 5;

//2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: "apple",
  color: "red",
  display: "🍎",
};
console.log(apple); //{ name: 'apple', color: 'red', display: '🍎' }
apple.name = "orange"; // 메모리 셀에 재할당이 불가능하지만, 즉 다른 메모리 주소를 담을 수 는 없다. 하지만 오브젝트 내용은 변경이 가능하다.
console.log(apple); //{ name: 'orange', color: 'red', display: '🍎' }
