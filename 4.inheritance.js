/** 객체지향 프로그래밍의 장점은 상속을 통한 재사용성에 있다.  */

function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}

Animal.prototype.printNmae = function () {
  console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji, owner) {
  // super(name, emoji)
  Animal.call(this, name, emoji);
  this.owner = owner;
}
/** Dog를 Animal과 연결하기 위해선
 * 인자로 전달한 프로토타입을 베이스로 해서 새로운 오브젝트를 만든다.
 */
Dog.prototype = Object.create(Animal.prototype);
/** Animal에 있는 Prototype을 베이스로 새로운 Object를 만들고 Dog에 연결해라 */
Dog.prototype.play = () => {
  console.log("같이 놀자옹");
};

function Tiger(name, emoji) {
  Animal.call(this, name, emoji);
}

Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = () => {
  console.log("사냥하자...🐇..");
};
const dog1 = new Dog("멍멍", "🐶", "Noah");
dog1.play();
dog1.printNmae();

const tiger1 = new Tiger("어흥", "🦁");
tiger1.hunt();
tiger1.printNmae();

/** 생성자 함수를 쓰고
 * function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}

Animal.prototype.printNmae = function () {
  console.log(`${this.name} ${this.emoji}`);
};

 * 프로토 타입을 연결하고
Dog.prototype = Object.create(Animal.prototype);

 * Call이라는 걸 호출하고
function Dog(name, emoji, owner) {
  // super(name, emoji)
  Animal.call(this, name, emoji);
  this.owner = owner;
}
 */
