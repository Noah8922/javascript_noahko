/** 여러가지 기능을 섞을 때 사용할 수 있다.
 * 기본적으로 상속은 단 하나의 부모만 가질 수 있다.
 * 오브젝트는 단 하나의 Prototype을 가르킬수 있다. (부모는 단 하나!)
 * 하지만 여러개의 함수를 상속하고 싶을 때
 * Mixin 사용!
 */

const play = {
  play: function () {
    console.log(`${this.name} 놀아요!`);
  },
};

const sleep = {
  sleep: function () {
    console.log(`${this.name} 자요!`);
  },
};

function Dog(name) {
  this.name = name;
}

Object.assign(Dog.prototype, play, sleep);
const dog = new Dog("멍멍");
console.log(dog);
dog.play();
dog.sleep();

class Animal {}
class Tiger extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
}

Object.assign(Tiger.prototype, play, sleep);
const tiger = new Tiger("어흥");
tiger.play();
tiger.sleep();

/** 여러가지 객체를 재사용해야 한다면, mixin을 사용하면 된다. */
