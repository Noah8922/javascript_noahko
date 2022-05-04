// Iterable 하다는건! 순회가 가능하다는 거지!
// [Symbol.iterator]() : IterableIterator<T>
// 심볼정의를 가진 개게나, 특정한 함수가 IterableIterator<T>를 리턴한다는 것은
// 순회 가능한 객체다! 라는것을 의미한다.
// 순회가 가능하면 무엇을 할 수 있나?
// 바로! 빙글빙글 도는 반복문, 연산자들을 사용할 수 있어.

const array = [1, 2, 3];
console.log(array.values());
console.log(array.entries());
console.log(array.keys());

// iterator 사용해 보기
const iterator = array.values();
while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}

for (let item of array.values()) {
  console.log(item);
}

// // 일반적인 Object에서는 for-of를 사용할 수 없다. iterable하지 않기 때문에
// const obj = { id: 123, name: "Noah" };
// for (let item of obj) {
//   console.log(item);
// //TypeError: obj is not iterable}

// 대신에 for-in은 사용 가능
const obj2 = { id: 123, name: "Noah" };
for (let key in obj2) {
  console.log(key);
}
