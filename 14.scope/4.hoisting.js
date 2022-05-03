print();
/** 함수보다 위에서 호출해도 가능함, 자바스크립트 엔진이 함수의 선언을 제일 위로 끌어올려주기 때문,
즉 어디에 적어도 제일 위에 적은것 같은 효과를 낼수 있음 */

function print() {
  console.log("Hello");
}

/**console.log(hi); */
/** Cannot access 'hi' before initialization, 초기화 전에는 접근 할 수 없다. 즉 선언은 됐는데 초기화가 안됨
 * 초기화 전, 변수에 접근하면 컴파일 (빌드) 에러가 발생함.
 */
let hi = "hi";
console.log(hi); /** 이건 가능 */
let func1 = function () {};

/** const cat = new Cat();  Cannot access 'Cat' before initialization */
class Cat {} /** 이건 가능 */

let x = 1;
{
  /** console.log(x); Cannot access 'x' before initialization */
  let x = 2;
  /**
   * X는 2라는 것 때문에 블럭안에 X가 선언은 되어서 렉시컬 환경에서도 X를 블럭안에 있다고 판단하지만
   * 아직 초기화가 되지 않았기 때문에 오류가 난다.
   */
}
