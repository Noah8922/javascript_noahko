class Animal {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  printName = () => {
    console.log(`${this.name} ${this.emoji}`);
  };
}

class Dog extends Animal {
  constructor(name, emoji, owner) {
    super(name, emoji);
    this.ower = owner;
  }
  play() {
    console.log("같이 놀자옹");
  }
}

class Tiger extends Animal {
  hunt() {
    console.log("사냥하자..🐇..");
  }
}

const dog1 = new Dog("멍멍", "🐶", "노아");
console.log(dog1);
dog1.printName();
dog1.play();
const tiger1 = new Tiger("어흥", "🦁");
console.log(tiger1);
tiger1.printName();
tiger1.hunt();

console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Tiger);
console.log(tiger1 instanceof Tiger);
