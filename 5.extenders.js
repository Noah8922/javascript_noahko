// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log("먹자!");
//   }
//   sleep() {
//     console.log("잔다");
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }

//   eat() {
//     console.log("먹자!");
//   }
//   sleep() {
//     console.log("잔다");
//   }
//   play() {
//     console.log("놀자아~!");
//   }
// }

// 공통된 청사진
class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log("먹자!");
  }
  sleep() {
    console.log("잔다");
  }
}

class Tiger extends Animal {}
const tiger = new Tiger("노랑이");
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {
  constructor(color, owenerName) {
    super(color); // super = 내가 상속하고 있는 부모 클래스를 가르킴, Animal
    this.owenerName = owenerName;
  }
  play() {
    console.log("놀자아~!");
  }
  // 오버라이딩, 자식클래스에서 덮어씌운다. overriding
  eat() {
    super.eat(); // 부모에 있는 함수를 호출한 다음에,
    console.log("강아지가 먹는다");
  }
}

const dog = new Dog("빨강이", "노아");
console.log(dog);
dog.play();
dog.eat();
