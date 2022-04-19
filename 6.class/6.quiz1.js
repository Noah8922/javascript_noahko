// 카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터 만들기

// class Counter {
//   constructor(numberOfPeople) {
//     if (numberOfPeople < 0) {
//       numberOfPeople = 0;
//     }
//     this.count = numberOfPeople;
//   }
//   increment() {
//     console.log(`현재 ${this.count + 1} 입니다.`);
//     numberOfPeople = this.count + 1;
//   }
// }

// const counetr = new Counter(0);
// counetr.increment();
// counetr.increment();

class Counter {
  #value;
  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    } else {
      this.#value = startValue;
    }
  }

  get value() {
    return this.#value;
  }

  increment = () => {
    this.#value++;
  };
}

const counetr = new Counter(0);
counetr.increment();
counetr.increment();
console.log(counetr.value);
