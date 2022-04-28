/** Bubble up, Propagating 버블버블업, 에러가 전파되는 올라가는 느낌 */

function a() {
  throw new Error("error!");
}

function b() {
  a();
}

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log("Catched!");
}
console.log("done!");
