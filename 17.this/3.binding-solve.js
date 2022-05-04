/** 문제점
 * 함수를 콜백으로 전달하면 this라는 정보를 잃어버려서
 * 호출하는 사람에 따라서 this가 없어지거나 다른걸로 바뀌기 때문에
 * 예상치 못한 문제가 발생한다.
 */

function Cat(name) {
  this.name = name;
  /** 2. arrow 함수를 사용 : arrow 함수는 렉시컬 환경에서의 this를 기억해요!
   * 화살표 함수 밖에서 제일 근접한 스코프의 this를 가리킴
   */
  this.printName = () => {
    console.log(`고양이의 이름을 출력한다옹: ${this.name}`);
  };
  /** 1. bind함수를 이용해서 수동적으로 바인딩 해주기 */
  /** this.printName = this.printName.bind(this); */
  /** this와 this.printName을 바운드 한 묶은 새로운 함수를 this.printName으로 다시 할당한다. */
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`강아지의 이름을 출력한다옹: ${this.name}`);
  };
}

const cat = new Cat("냐옹");
const dog = new Dog("멍멍");
cat.printName();
dog.printName();

/** this는 누가 부르는지에 따라 this가 달라짐.
 * 오브젝트.함수 하게되면 오브젝트가 this가 된다.
 */
dog.printName = cat.printName;
dog.printName();
cat.printName();
/** 똑같은 this인데 dog에서 호출하면 멍멍, cat에서 호출하면 냐옹이 나오게 된다.  */

function printOnMonitor(printName) {
  console.log("모티너를 준비하고, 전달된 콜백을 실행!");
  printName();
}

printOnMonitor(cat.printName);
