// 퀴즈
// 문자열의 모든 캐릭터를 하나씩 출력해라
const text = "Hello World!";
const length = text.length;

for (let i = 0; i < length; i++) {
  console.log(text[i]);
}

// 사용자들의 id를 잘라내어 각각의 id를 배열로 보관
const ids = "user1, user2, user3, user4";
const arr = ids.split(", ");
console.log(arr);

// 1초에 한번씩 시계를 (날짜포함) 출력해보자
// const now = new Date();
// function bringTime() {
//   console.log(now);
// }
// setInterval(bringTime, 1000);
setInterval(() => {
  const now = new Date();
  console.log(now.toLocaleString("ko-KR"));
}, 1000);
