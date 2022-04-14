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
// 함수내부에서는 조금더 동기적인 코드를 작성 할 수 있어.
async function fetchFruits() {
  const banana = await getBanana();
  const apple = await getApple(); //Promise의 값이 다 끝날때 까지 기다렸다가.
  return [banana, apple]; // async가 있기 때문에 배열이 resolve될때 출력 된다.
}

fetchFruits() //
  .then((fruits) => console.log(fruits));
