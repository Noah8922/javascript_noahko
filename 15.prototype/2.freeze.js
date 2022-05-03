/** 오브젝트의 불변성을 추구해야 하는 경우에 오브젝트 안의 속성들을 세밀하고 조절할수 있다.
 * 조정할 때 defineProperty가 아닌 다른 함수를 사용한다.
 */

/** 동결! Object.freeze */
/** 단, 얕은 꽁꽁얼림이 된다.  */
const Noah = { name: "노아" };
const dog = { name: "와우", emoji: "🐶", owner: Noah };
Object.freeze(dog);
dog.name = "멍멍"; //변경❌
dog.age = 4; //추가❌
delete dog.name; //삭제❌
console.log(dog);
/** 아무것도 바뀌지 않음, { name: '와우', emoji: '🐶', owner: { name: '노아' } } */

/** BUT!!!!! 🖐
 * 객체가 참조하는 다른 객체까지는 동결시키지 않았기 때문에
 * 참조하는 객체의 값을 바꾸면 동결시킨 객체의 값도 변하긴 한다.
 */
Noah.name = "노아얌";
console.log(dog); /* { name: '와우', emoji: '🐶', owner: { name: '노아얌' } } */

console.clear();
/** 밀봉! Object.seal
 * 값의 수정 ✅
 * 추가 ❌
 * 삭제 ❌
 * 속성 재정의 ❌
 */
const cat = { ...dog };
//Object.assign(cat, dog);, 위랑 똑같은 방법
Object.seal(cat);
cat.name = "야옹"; /** 이건 반영됨 */
delete cat.emoji; /** 이건 반영 안됨 */
console.log("cat", cat);

/** 이게 동결되었는지 , 밀봉되었는지 확인하기 */
console.log(Object.isFrozen(dog)); // ture
console.log(Object.isSealed(cat)); // ture

/** 확장 금지 PreventExtensions */
const tiger = { name: "어흥" };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger)); // false
tiger.name = "어흐응"; /** 수정가능 */
console.log(tiger);
delete tiger.name;
console.log(tiger); /** {}, 빈 오브젝트 */
tiger.age = 1;
console.log(tiger); /** {}, 빈 오브젝트, 확장 안됨 */

/** POINT : 우리가 특정 객체를 수정이 불가능하게 만들 때, 그리고 어떤것 까지 수정을 못하게 할건지에 따라서 세가지를 유용하게 쓸 수 있다. */
