/** 내부 정보를 은닉하고, 공개함수(public, 외부)를 통한 데이터 조작을 위해
 * 캡슐화와 정보은닉
 * 클래스 private 필드 또는 메소드를 사용한 효과와 동일
 */
function makeCounter() {
  let count = 0;
  function increase() {
    count++;
    console.log(count);
  }
  return increase;
}

const func = makeCounter();
func();
func();
func();

class Counter {
  #count = 0;
  increas() {
    this.#count++;
    console.log(this.#count);
  }
}

const counter = new Counter();
counter.increas();

/** 최신 자바스크립트에서는 타입스크립트에서는 클래스를 이용해서 클로저를 대신할수 있다. */
