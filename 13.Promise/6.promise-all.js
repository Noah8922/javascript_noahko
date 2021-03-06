function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("๐");
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("๐");
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error("no Orange"));
}

// ๋ฐ๋๋์ ์ฌ๊ณผ๋ฅผ ๊ฐ์ด ๊ฐ์ง๊ณ  ์ค๊ธฐ

getBanana() //
  .then((banana) =>
    getApple() //
      .then((apple) => [banana, apple])
  )
  .then(console.log);
// Promise๋ฅผ ์คํํ๋๋ฐ ์๊ฐ์ด ์ค๋ ๊ฑธ๋ฆฐ๋ค. ์ด 4์ด

/** Promise.all ๋ณ๋ ฌ์ ์ผ๋ก ํ๋ฒ์ ๋ชจ๋  Promise๋ค์ ์คํํ์ฌ ์ฑ๊ณตํ์ ๋๋ง! */
Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log("all", fruits)); // ์ด 3์ด

/** Promise.race ์ฃผ์ด์ง Promise ์ค์ ์ ์ผ ๋นจ๋ฆฌ ์ํ๋๊ฒ๋ง ์ถ๋ ฅํจ! */
Promise.race([getBanana(), getApple()]) //
  .then((fruits) => console.log("race", fruits));

/** Error */
Promise.all([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log("all-error", fruits)) // UnhandledPromiseRejectionWarning ๋ฌ๋ค.
  .catch(console.log);

/** all settled ์คํํ ๊ฒ์ ๋ํ ๋ชจ๋  ๊ฒฐ๊ณผ๋ฅผ ์๊ณ  ์ถ์ ๋ */
Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log("all-error", fruits)) // UnhandledPromiseRejectionWarning ๋ฌ๋ค.
  .catch(console.log);
