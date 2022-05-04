// 구조 분해 할당 Destructuring Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있다.
const fruits = ["🍎", "🥝", "🍌", "🍊"];
const [first, second, ...others] = fruits;
//console.log(fruits[0]);
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2, 8];
const [X, Y, Z = 0] = point;
console.log(X);
console.log(Y);
console.log(Z); //8, 초기 배열에 있는게 최우선순위로 출력됨

function createEmoji() {
  return ["apple", "🍎"];
}
//const array = createEmoji();
//console.log(array);
const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const Noah = { name: "Noah", age: 20, job: "S/W engineer" };

// function display(person) {
//     console.log('이름', person.name)
//     console.log('나이', person.age)
//     console.log('직업', person.job)
// }

// 애초에 받아올 때 구조분해 할 수 있음
function display({ name, age, job }) {
  console.log("이름", name);
  console.log("나이", age);
  console.log("직업", job);
}
display(Noah);

// Object를 받을 때도 사용 가능
// 안에 없는 내용도 추가 가능, pet = "강아지"
// 변수명을 다른걸로 변경 가능함 , job : occupation

const { name, age, job: occupation, pet = "강아지" } = Noah;
console.log(name);
console.log(age);
console.log(occupation);
console.log(pet);

// Quiz
const prop = {
  name: "Button",
  styles: {
    size: 20,
    color: "black",
  },
};

function changeColor({ styles: { color } }) {
  console.log(color);
}

changeColor(prop);
