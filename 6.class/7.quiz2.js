// 정직원과 파트타임직원을 나타낼수 있는 클래스를 만들어보자
// 직원들의 정보 : 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

// class Staff {
//   #name;
//   #dept;
//   #workHour;
//   constructor(name, dept, workHour) {
//     this.#name = name;
//     this.#dept = dept;
//     this.#workHour = workHour;
//   }
//   regular() {
//     console.log(
//       `${this.#dept}의 ${this.#name}의 이번달 월급은 ${
//         this.#workHour * 10000
//       } 입니다.`
//     );
//   }

//   partTime() {
//     console.log(
//       `${this.#dept}의 ${this.#name}의 이번달 월급은 ${
//         this.#workHour * 8000
//       } 입니다.`
//     );
//   }
// }

// class Employee extends Staff {}
// const employee = new Employee("노아", "프론트엔드", "320");
// employee.partTime();

class Staff {
  #name;
  #dept;
  #workHourperMonth;
  #payRate;
  constructor(name, dept, workHourperMonth, payRate) {
    this.#name = name;
    this.#dept = dept;
    this.#workHourperMonth = workHourperMonth;
    this.#payRate = payRate;
  }
  calculatePay() {
    return this.#workHourperMonth * this.#payRate;
  }
}

class FullTimeEmployee extends Staff {
  static #PAY_RATE = 10000;
  constructor(name, dept, workHourperMonth) {
    super(name, dept, workHourperMonth, FullTimeEmployee.#PAY_RATE);
  }
}

class PartTimeEmployee extends Staff {
  static #PAY_RATE = 8000;
  constructor(name, dept, workHourperMonth) {
    super(name, dept, workHourperMonth, PartTimeEmployee.#PAY_RATE);
  }
}
const noah = new FullTimeEmployee("노아", "s/w", "320");
const ellie = new PartTimeEmployee("엘리", "s/w", "320");
console.log(noah.calculatePay());
console.log(ellie.calculatePay());
