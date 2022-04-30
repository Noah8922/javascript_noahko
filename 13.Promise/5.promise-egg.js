// 비동기코드를 조금더 깔끔하게 작성할 수 잇는 promise에 대해서 알아봄

function fetchEgg(chicken) {
  /** fetch는 보통 네트워크에서 무언가를 가져올 때 사용함. */
  return Promise.resolve(`${chicken} => 🥚`);
  /** 일단 이 프로미스 객체를 가지고 있어 네트워크 통신이 다되면 내가 너에게 알려줄게 */
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  // return Promise.reject(new Error("치킨을 가져올수 없음!")); //reject가 되는 경우 catch를 꼭 써줘야 함.
  return Promise.resolve(`🌲 => 🐓`);
}

// fetchEgg("🐔") //
//   .then((egg) => console.log(egg));

getChicken()
  .then((chicken) => {
    return fetchEgg(chicken);
  })
  .then((egg) => fryEgg(egg))
  .then((friedEgg) => console.log(friedEgg))
  .catch((error) => console.log(error.name));

// getChicken()
//   .catch(() => "🐔")
//   .then(fetchEgg)
//   .then(fryEgg)
//   .then(console.log);
