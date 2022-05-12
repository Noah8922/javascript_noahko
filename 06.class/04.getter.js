// 접근자 프로퍼티 (Accessor Property)

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    //get을 하게 되면 함수를 호출하는 것처럼이 아니라 속성에 접근하는 것처럼 접근할수 있다.
    return `${this.lastName} ${this.firstName}`;
  }
  set fullName(value) {
    // 어떤 값을 할당한다면 set이 발동하게 된다.
    console.log(value);
  }
}

const student = new Student("수지", "김");
console.log(student.firstName);
console.log(student.fullName);
student.fullName = "김철수";
