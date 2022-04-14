// callback 지옥이 되지 않도록, Callback이 중첩되지 않도록 깔끔하게 사용 할 수 있도록 도와줌.

function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error("seconds가 0보다 작음")); // error obj를 만듦
    }
    setTimeout(resolve, seconds * 1000);
  });
}
// Pormise object를 리턴하는데 이걸 가지고 있으면 어느 시점에 있어 타임아웃이 끝나고 나면 성공했는지 실패했는지 알려줄게
// Promise 만들때 두가지 인자를 전달받아서 무언가 처리하는 콜백함수를 전달해야 합니다.
// Promise 콜백 함수안에서 우리가 비동기적인 일을 수행할 건데요.
// 성공적으로 수행했을 때 즉, then을 호출할 때 사용할 resolve라는 함수와  실패했을 때 사용할 rejcet를 받아와야 해요.
// resolve함수와 reject 함수를 실행할수 있다.

//   runInDelay(2)
//   .then(필요한일을 수행)
//   .catch(에러를 처리)
//   .finally(최종적으로 무조건 호출)

runInDelay(2)
  .then(() => {
    console.log("타이머 완료");
  })
  .catch(console.error)
  .finally(() => console.log("끝났다"));

// 에러가 발생할 수도 있는데 catch 가 되어 있지 않는 경우 UnhandledPromiseRejectionWarning이 뜸
// 에러가 reject 되어있는데 그것에 대한 handling이 되지 않았다.

runInDelay().then(() => {
  console.log("타이머 완료");
});
//   .catch(console.error)
//   .finally(() => console.log("끝났다"));
