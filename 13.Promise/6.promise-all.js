function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍌");
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍎");
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error("no Orange"));
}

// 바나나와 사과를 같이 가지고 오기

getBanana() //
  .then((banana) =>
    getApple() //
      .then((apple) => [banana, apple])
  )
  .then(console.log);
// Promise를 실행하는데 시간이 오래 걸린다. 총 4초

/** Promise.all 병렬적으로 한번에 모든 Promise들을 실행하여 성공했을 때만! */
Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log("all", fruits)); // 총 3초

/** Promise.race 주어진 Promise 중에 제일 빨리 수행된것만 출력함! */
Promise.race([getBanana(), getApple()]) //
  .then((fruits) => console.log("race", fruits));

/** Error */
Promise.all([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log("all-error", fruits)) // UnhandledPromiseRejectionWarning 뜬다.
  .catch(console.log);

/** all settled 실행한 것에 대한 모든 결과를 알고 싶을 때 */
Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log("all-error", fruits)) // UnhandledPromiseRejectionWarning 뜬다.
  .catch(console.log);
