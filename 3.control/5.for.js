// 반목문 Loop statement
// for(변수선언문, 조건식, 증감식) {}
// 실행순서:
// 1. 변수 선언문
// 2. 조건식의 값이 참이면 {} 코드 블럭을 수행
// 3. 증감식을 수행
// 4. 조건식이 거짓이 될 때까지 2번과 3번을 반복함.

for (let i = 0; i < 5; i++) {
  console.log(i);
}
// 증감식을 다양하게 쓸 수 있음
console.log("--------------");
for (let i = 0; i < 10; i = i + 2) {
  console.log(i);
}
console.log("--------------");
// for문 중첩사용 가능
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}

//무한루프 ❌ 조건이 언젠가는 끝날 수 있게.
// for (;;) {
//   console.log("🤣");
// }
console.log("--------------");

// 반복문 제어 : continue, break
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    console.log("여기서는 10은 넘어가고 바로 11부터 시작");
    continue; // continue가 있으면 아래 코드는 실행하지 않고 바로 다음으로 넘어간다. 막다른 길 느낌. 걍 pass~
    console.log("i가 10이 되었다.");
  }
  console.log(i);
}
console.log("--------------");

for (let i = 0; i < 20; i++) {
  if (i === 10) {
    console.log("break가 있으니까 여기서 멈춘다");
    break;
  }
  console.log(i);
}
