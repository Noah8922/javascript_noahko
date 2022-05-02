/** 비동기적인 코드를 동기적인 형태로 즉, 절차적으로 사용할 수 있는 방법 */
/** 동기적인 코드처럼 보이지만 결국은 비동기임 */

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
function fetchFruits() {
  return getBanana() //
    .then((banana) =>
      getApple() //
        .then((apple) => [banana, apple])
    );
}
/** async하게 되면 비동기임을 말해준다. 비동기처럼 행동은 하는데,
 * 즉 이 함수를 호출하면 promise가 리턴이 되는데,
 * 함수내부에서는 조금더 동기적인 코드를 작성 할 수 있어. */
async function fetchFruits() {
  const banana = await getBanana();
  const apple = await getApple();
  /** await가 없으면 promise가 반환된다. Promise의 값이 다 끝날때 까지 기다렸다가. */
  return [banana, apple]; // async가 있기 때문에 배열이 resolve될때 출력 된다.
}

fetchFruits() //
  .then((fruits) => console.log(fruits));
