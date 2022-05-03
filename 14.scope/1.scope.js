/** 스코프란 식별자가 유효한 범위를 나타냄
 * 그 범위는 코드 블럭에 의해 결정됨
 * 코드 블럭 : { }, if() { }, for() { }, function() { }
 */

/** 블럭 외부에서는 블럭 내부의 변수를 참조할 수 없음. */
{
  const a = "a";
  console.log(a);
}
const b = "b";
/** console.log(a);, ReferenceError: a is not defined */

/** 함수 외부에서는 함수 내부의 변수를 참조 할수 없음 */
function print() {
  const message = "Hello World";
  /** message는 print라는 함수에만 쓰이는 지역변수 */
  console.log(message);
}
/** console.log(message);, ReferenceError: message is not defined*/

/** 함수의 매게변수에도 접근할 수 없음 */
function sum(a, b) {
  console.log(a, b);
}
/** console.log(a, b); , ReferenceError: a is not defined */
