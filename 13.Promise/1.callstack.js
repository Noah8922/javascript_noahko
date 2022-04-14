// 자바스크립트는 위에서 아래로 읽기 때문에 동기적으로 실행
// 동적으로 객체를 생성하는 경우에 Memory Heap에 생성되고
// Call Stack은 우리의 함수 실행 순서를 기억한다.
// 전역에서 C를 호출하면 C가 쌓이고 C에서 B를 호출하면 B가 쌓이고 B에서 A를 호출하면 A가 쌓인다.
// A가 반환되면 A가 빠지고 차례로 B,C도 빠지게 된다.
// 하나의 싱글 컨텍스트 스택 싱글 쓰레드
// 자바스크립트는 기본적으로 동기적으로 진행 / 하나가 끝나야 하나가 진행된다. 동기사랑 나라사랑 / 의리게임

function a() {
  return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}

const result = c();
console.log(result);
