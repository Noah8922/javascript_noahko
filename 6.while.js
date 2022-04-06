// While(조건) {}
// 조건이 false가 될때 까지 {} 코드를 반복 실행
// while 따로 변수를 초기화 하거나 증가하는 부분이 들어가 있지 않기 때문에,
// 우리가 외부에서 해줘야 함
// continue, break 사용 가능

let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}
// 조건이 맞을 떄만 while을 실행 할 때
let isActive = false; // false이기 때문에 실행되지 않을 것이다.
let i = 0;
while (isActive) {
  console.log("아직살아있다.");
  if (i === 1000) {
    break;
  }
  i++; // 증감식이 없을 경우 무한루프 쌉가능~ because of i = 0에서 바뀌지 않기 때문~
}

let isActived = false; // false이기 때문에 실행되지 않을 것이다.
let j = 0;
while (isActive) {
  console.log("아직살아있다.");
  if (j === 1000) {
    break;
  }
  j++; // 증감식이 없을 경우 무한루프 쌉가능~ because of i = 0에서 바뀌지 않기 때문~
}

// 조건에 상관없이 꼭 한번은 무조건 실행되어야 한다면,
do {
  console.log(
    "do-while이기 때문에 무조건 한번을 실행되지만 이후 조건문 검사에서 탈락하기 때문에 더 이상 실행 안됨"
  );
} while (isActive);
