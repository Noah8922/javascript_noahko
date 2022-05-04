"use strict";
/**
 * 글로벌텍스트의 this
 * - 브라우저 : window
 * - 노드 : 모듈
 */
/** this는 모듈을 가르킴 */
const x = 0;
module.exports.x = x;
console.log(this);
console.log(globalThis);
/** globalThis.setTimeout() === setTimeout()
 * globalThis는 생략이 가능하다.
 */
console.clear();

/**
 * 함수 내부에서의 this
 * 엄격모드에서는 undefined, 함수 내부에 this가 없음.
 * 느슨한 모드에서는 globalThis
 */
function func() {
  console.log(this);
}
func();

/**
 * 생성자 함수 또는 클래스에서의 this, 앞으로 생성될 인스턴스 자체를 가르킴
 */
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(this.name);
    /** this.name은 캣의 이름을 가르키는데
     * 엄밀히 말하면, 앞으로 만들어질 인스턴스의
     * 즉 cat1 오브젝트 안에있는 name을 가르키고 있다.
     */
  };
}
const cat1 = new Cat("냐옹");
const cat2 = new Cat("미야옹");
console.log(cat1);
cat1.printName();
cat2.printName();
