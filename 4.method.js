// 이처럼 객체는 서로 연관된 정보와 함수들을 묶어서 관리할수 있음

const apple = {
  name: "apple",
  display: function () {
    console.log(`${this.name} : 🍎`);
  },
};

apple.display();
