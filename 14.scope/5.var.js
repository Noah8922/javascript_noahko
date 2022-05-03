// var의 특징
/** 일반 코딩 방식과 어긋나서 개발하면서도 멘붕 옴
 * 코드의 가독성과 유지보수성에 좋지 않음
 */

/** 1. 변수를 선언하는 키워드 없이 선언 & 할당 가능함
 * 선언인지 재할당인지 구분하기 어렵다
 */
something = "😀";
console.log(something);

/** 2. 중복 선언이 가능하다. 나중에 할당한 값이 이전에 값들에 영향을 미친다. */
var poo = "🍕";
var poo = "🍕";
console.log(poo);

/** 3. 블록 레벨 스코프가 안됨 */
var apple = "사과";
{
  var apple = "🍎";
  {
    var apple = "🍏";
  }
}
console.log(apple); // 🍎, 🍏

/** 4. 함수 레벨 스코프만 지원 됨, 밖에서 안으로 접근 안됨, 오류가 뜸 */
function exampe() {
  var dog = "🐶";
}
/** console.log(dog); /** dog is not defined, 웬열 이건 또 되네 */
