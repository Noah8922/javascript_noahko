/** 비슷한 유형의 객체들은 생성자 함수와 class를 사용하여 조금 더 편하게 만들 수 있었다.
 * class는 프로토타입을 한단계 감싸는(한단계 큰 범위)
 */

// const dog1 = { name: "뭉치", emoji: "🐶" };
// const dog2 = { name: "코코", emoji: "🐩" };

function Dog(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  /** 인스턴스 레벨의 함수, 만들어진 객체에 다 들어있는 함수, 이건 메모리 낭비, 똑같은 함수가 100개를 만들면 다 들어가 있을 것  */
  /** this.printName = () => {
    console.log(`${this.name} ${this.emoji}`);
  }; 콘솔에 아래처러 함수가 객체안에 똑같이 찍힘, 이게 메모리 낭비라고 하는 거임.
  Dog { name: '뭉치', emoji: '🐶', printName: [Function (anonymous)] } 
  Dog { name: '코코', emoji: '🐩', printName: [Function (anonymous)] }*/
}

/** 메모리 낭비를 방지하기 위해서 prototype level의 함수로 만들 수 있다. 이렇게 만들면 객체안에는 없지만 */
Dog.prototype.printNmae = function () {
  console.log(`${this.name} ${this.emoji}`);
};

const dog1 = new Dog("뭉치", "🐶");
const dog2 = new Dog("코코", "🐩");

console.log(dog1, dog2);
/** <-----------여기까지 복사해서 브라우저에 콘솔 찍어보면 둘다 Object라는 prototype안에 함수가 등록되어 있음 */
/** Dog { name: '뭉치', emoji: '🐶' } Dog { name: '코코', emoji: '🐩' }  */
/** 함수는 사용할 수 있음 */
dog1.printNmae(); /** 뭉치 🐶 */
dog2.printNmae(); /** 코코 🐩 */

/** 오버라이딩
 * 인스턴스 레벨에서 (자식) 동일한 이름으로 함수를 재정의 하면 (오버라이딩 하면)
 * 프로토타입 레벨의(부모) 함수의 프로퍼티는 가려진다. (섀도잉 됨)
 */
dog1.printNmae = function () {
  console.log("안녕!!");
};

dog1.printNmae();

/** 이처럼 프로퍼티 레벨의 함수는 각각 만들어진 객체내에서 공통적으로 사용할 수 있는 함수에 대해서 만든 것 */

/** 인스턴스가 아니라 생성자 함수 이름, 클래스 이름에서만 접근이 가능한 정적 레벨에 대하여 */
Dog.hello = () => {
  console.log("Hello!");
};
// dog1.hello(); 이건 안됨.
Dog.hello();
Dog.MAX_Age = 20;
console.log(dog1);
console.log(dog2);
