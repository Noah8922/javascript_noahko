const obj = {
  name: "노아",
  age: "20,",
};
//코딩하는 시점에, 정적으로 접근이 확정됨
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶을때 대괄호 표기법 사용!
function getvalue(obj, key) {
  return obj[key];
  //obj.key불가능 왜냐면 안에 key라는 값이 없기 때문에, key안에는 뭐가들어갈지 모름
}

console.log(getvalue(obj, "name"));

// 추가
function addKey(obj, key, value) {
  obj[key] = value;
}

addKey(obj, "job", "engineer");
console.log(obj); // { name: '노아', age: '20,', job: 'engineer' }

// 삭제
function deleteKey(obj, key) {
  delete obj[key];
}

deleteKey(obj, "name");
console.log(obj); // { age: '20,', job: 'engineer' }
