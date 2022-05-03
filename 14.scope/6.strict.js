/**엄격모드 Strict Mode
 * 리액트와 같은 프레임워크 사용시 기본적으로 엄격 모드임
 */
"use strict";

/** delete 사용해서 변수 지우기 안됨 */
// var x = 1
// delete x;

/** 선언하지 않은 변수 사용 불가
 * ❌
function add(x) {
    var a = 2;
    b = a + x;
  }
  add(1); // b is not defined */

/** ✅ */
function add(x) {
  var b;
  var a = 2;
  b = a + x;
  console.log(b);
}
add(1); // b is not defined

/** for문에서도 선언하지 않은 변수 사용 불가, const num 이라고 해야함 
 * ❌
const array = [1, 2, 3];
for (num of array) {
  console.log(num);
  /** num is not defined 
} */

/** ✅ */
const array = [1, 2, 3];
for (const num of array) {
  console.log(num);
}
