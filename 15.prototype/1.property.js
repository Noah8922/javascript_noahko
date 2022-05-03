const dog = { name: "와우", emoji: "🐶" };

console.log(Object.keys(dog)); /** [ 'name', 'emoji' ] */
console.log(Object.values(dog)); /** [ '와우', '🐶' ] */
console.log(Object.entries(dog));
/** [ [ 'name', '와우' ], [ 'emoji', '🐶' ] ] */

console.log("name" in dog); /** true */
console.log(dog.hasOwnProperty("name"));
/** true, 너무 번거로운 작업 쓰지 않음 */

/** 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장되어 있음 */
const des = Object.getOwnPropertyDescriptors(dog);
console.log(des);
/** {
  name: { value: '와우', writable: true, enumerable: true, configurable: true },
  emoji: { value: '🐶', writable: true, enumerable: true, configurable: true }
} 
name 값 : 와우/  
writable : 수정할수 있는지, 업데이트 할 수 있는지 / 
enumerable : 값을 열거할 수 있는지 / 
configurable : 키에 해당하는 전체 값들을 수정하거나 완전히 삭제할 수 있는지
*/

/** 하나만 가지고 올 때 */
const decs = Object.getOwnPropertyDescriptor(dog, "name");
console.log(decs);
/** { value: '와우', writable: true, enumerable: true, configurable: true } */

/** 오브젝트의 프로퍼티 디스크립터는 나중에 수정이 가능하다. */
Object.defineProperty(dog, "name", {
  value: "멍멍",
  writable: false, // 수정이 가능하게 하는지, 업데이트 될 수 있는지
  enumerable: false, // 밖에서 열거해서 볼 수 있게 하는지
  configurable: false, // 키 자체를 수정할 수 있게 하는지
});
console.clear();
console.log(dog.name); // 멍멍
console.log(Object.keys(dog)); // [ 'emoji' ]
/** enumerable를 false로 했기 때문에, keys,values,entries에도 나오지 않는 것을 볼 수 있다. */
delete dog.name; // 의미 없음
console.log(dog.name); // 멍멍

/** 포인트 : 자바스크립트 객체에서도 특정한 키가 수정되면 안되거나 열거되면 안되거나 키자체가 삭제되거나 수정되면 안되는 경우에 위와 같은 방법으로
 * 조금더 세밀하게 만들 수 있다.
 */
