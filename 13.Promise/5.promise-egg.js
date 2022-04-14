function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error("치킨을 가져올수 없음!")); //reject가 되는 경우 catch를 꼭 써줘야 함.
  //return Promise.resolve(`🌲 => 🐓`);
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

getChicken()
  .catch(() => "🐔")
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);
