/** 자바스크립트의 함수는 만능 슈퍼맨!
 * 함수처럼 사용, 생성자 함수로 사용 (클래스)
 * 하지만, 이걸 사용하기 위해서 불필요한 무거운 프로토타입(많은 데이터를 담고 있는 Ex.부모는 누군지, 이건 뭔지) 객체가 생성됨
 */

const dog = {
  name: "Dog",
  /** 객체 내에서 함수 표현식을 사용하는 것은 좋지 않다. 더 무거워진다. */
  play: function () {
    console.log("논다멍");
  },
};
dog.play();
const obj = new dog.play();
/** 이렇게 함수를 사용하면, 생성자 함수로도 사용할 수 있기 때문에 자체적으로 무거운 프로토타입을 가지고 있다.  */
console.log(obj);

/** ES6 */
const cat = {
  name: "cat",
  play() {
    // 객체의 메서드 (오브젝트에 속한 함수)
    console.log("냐옹");
  },
};

cat.play();
// const obj1 = new cat.play(); // app crushed, cat.play is not a constructor (cat.play는 생성자가 아님)

/** 화살표 함수의 특징
 * 1. 문법이 깔끔함
 * 2. 생성자 함수로 사용이 불가능 (무거운 프로토타입을 만들지 ❌)
 * 3. 함수 자체 arguments를 가지고 있지 않음
 * 4. this에 대한 바인딩이 정적으로 결정됨
 *  - 함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩됨
 */

function sum(a, b) {
  console.log(arguments); /** [Arguments] { '0': 1, '1': 2 } */
}
sum(1, 2);

const add = (a, b) => {
  console.log(arguments);
  // arrow함수 안에서 arguments란, 화살표 함수가 만든 새로운 별도의 객체가 아니라, 함수 외부의 argument를 참조만 한다.
};
add(1, 2);

const printArrow = () => {
  console.log(this);
  /** 화살표를 감싸고 있는, 즉 함수가 정의된 곳에서의 한단계 감싸고 있는 스코프의 this정보를 간직함 */
};
printArrow();
cat.printArrow = printArrow;
cat.printArrow();

/** 최종정리
 * 자바스크립트에서 this는 누가 호출하느냐에 따라 결정됨
 * 정적으로 바인딩을 하고 싶으면
 * 수동적인 방법과 화살표 함수를 사용하면 됨
 * 일반 함수를 객체안에서 사용하면
 * 생성자 함수로도 사용이 가능하기 때문에 객체가 뚱뚱하고 무거워짐
 * 이걸 해결하기 위해서
 * 객체 내에서 바로 함수를 선언하거나
 * 화살표 함수를 사용하면 됨
 */
