function add(a, b) {
  // 일련의 메모리 주소를 가지게 됨
  console.log(a);
  console.log(b);
  return a + b;
}

const sum = add; // add와 동일한 메모리 주소를 가지게 됨, 똑같이 호출할 수 있음, 메모리 주소를 복사하는 것이랑 같음

console.log(add(1, 2));
console.log(sum(1, 2));
