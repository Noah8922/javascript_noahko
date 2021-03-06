const dog = { name: "μμ°", emoji: "πΆ" };

console.log(Object.keys(dog)); /** [ 'name', 'emoji' ] */
console.log(Object.values(dog)); /** [ 'μμ°', 'πΆ' ] */
console.log(Object.entries(dog));
/** [ [ 'name', 'μμ°' ], [ 'emoji', 'πΆ' ] ] */

console.log("name" in dog); /** true */
console.log(dog.hasOwnProperty("name"));
/** true, λλ¬΄ λ²κ±°λ‘μ΄ μμ μ°μ§ μμ */

/** μ€λΈμ νΈμ κ°κ°μ νλ‘νΌν°λ νλ‘νΌν° λμ€ν¬λ¦½ν°λΌκ³  νλ κ°μ²΄λ‘ μ μ₯λμ΄ μμ */
const des = Object.getOwnPropertyDescriptors(dog);
console.log(des);
/** {
  name: { value: 'μμ°', writable: true, enumerable: true, configurable: true },
  emoji: { value: 'πΆ', writable: true, enumerable: true, configurable: true }
} 
name κ° : μμ°/  
writable : μμ ν μ μλμ§, μλ°μ΄νΈ ν  μ μλμ§ / 
enumerable : κ°μ μ΄κ±°ν  μ μλμ§ / 
configurable : ν€μ ν΄λΉνλ μ μ²΄ κ°λ€μ μμ νκ±°λ μμ ν μ­μ ν  μ μλμ§
*/

/** νλλ§ κ°μ§κ³  μ¬ λ */
const decs = Object.getOwnPropertyDescriptor(dog, "name");
console.log(decs);
/** { value: 'μμ°', writable: true, enumerable: true, configurable: true } */

/** μ€λΈμ νΈμ νλ‘νΌν° λμ€ν¬λ¦½ν°λ λμ€μ μμ μ΄ κ°λ₯νλ€. */
Object.defineProperty(dog, "name", {
  value: "λ©λ©",
  writable: false, // μμ μ΄ κ°λ₯νκ² νλμ§, μλ°μ΄νΈ λ  μ μλμ§
  enumerable: false, // λ°μμ μ΄κ±°ν΄μ λ³Ό μ μκ² νλμ§
  configurable: false, // ν€ μμ²΄λ₯Ό μμ ν  μ μκ² νλμ§
});
console.clear();
console.log(dog.name); // λ©λ©
console.log(Object.keys(dog)); // [ 'emoji' ]
/** enumerableλ₯Ό falseλ‘ νκΈ° λλ¬Έμ, keys,values,entriesμλ λμ€μ§ μλ κ²μ λ³Ό μ μλ€. */
delete dog.name; // μλ―Έ μμ
console.log(dog.name); // λ©λ©

/** ν¬μΈνΈ : μλ°μ€ν¬λ¦½νΈ κ°μ²΄μμλ νΉμ ν ν€κ° μμ λλ©΄ μλκ±°λ μ΄κ±°λλ©΄ μλκ±°λ ν€μμ²΄κ° μ­μ λκ±°λ μμ λλ©΄ μλλ κ²½μ°μ μμ κ°μ λ°©λ²μΌλ‘
 * μ‘°κΈλ μΈλ°νκ² λ§λ€ μ μλ€.
 */
