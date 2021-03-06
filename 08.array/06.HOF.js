const fruits = ["π", "π", "π", "π"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// λ°°μ΄μ λΉκΈ λΉκΈ λλ©΄μ λ°°μ΄μ μμ νλνλ λ§λ€ μνλ κ²μ ν  λ (forEach)
fruits.forEach(function (value) {
  console.log(value);
});

fruits.forEach((value) => console.log(value)); // μμ μ λ¬ν ν μ½λ°±ν¨μ μ€ν

// μ‘°κ±΄μ λ§λ (μ½λ°±ν¨μ) μμ΄νμ μ°Ύμ λ
// find : μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ λ°ν
const item1 = { name: "π", price: 2 };
const item2 = { name: "π", price: 3 };
const item3 = { name: "π­", price: 1 };
const products = [item1, item2, item3, item2];
let result = products.find((value) => value.name === "π");
console.log(result);

// findIndex : μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ μΈλ±μ€(μμΉ)λ₯Ό λ°ν
result = products.findIndex((value) => value.name === "π");
console.log(result);

// λ°°μ΄μ μμ΄νλ€μ΄ λΆλΆμ μΌλ‘ μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§λμ§ νμΈ
// some : μ‘°κΈμ΄λΌλ λΆλΆλ§μ΄λΌλ κ°λ€λ©΄,,,
// λ°°μ΄μ μμ΄νλ€μ€μ μ΄λ¦μ΄ 'π'μ κ°μκ² νλλΌλ μλ?
result = products.some((item) => item.name === "π");
console.log(result); // true

// λ°°μ΄μ μμ΄νλ€μ΄ μ λΆ μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§λμ§ νμΈ
// λ°°μ΄μ μμ΄νλ€μ΄ μ΄λ¦μ΄ μ λΆ 'π'μ κ°λ?
result = products.every((item) => item.name === "π");
console.log(result); // false

// μ‘°κ±΄μ λ§λ λͺ¨λ  μμ΄νλ€μ μλ‘μ΄ λ°°μ΄λ‘ λ§λ€κΈ°
result = products.filter((item) => item.name === "π");
console.log(result); // [ { name: 'π', price: 3 }, { name: 'π', price: 3 } ]

console.clear();

// Map λ°°μ΄μ μμ΄νλ€μ κ°κ° λ€λ₯Έ μμ΄νμΌλ‘ λ§€νν  μ μλ, λ³νν΄μ μλ‘μ΄ λ°°μ΄ μμ±!
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result);

// Flatmap : μ€μ²©λ λ°°μ΄μ λν΄ λ§€ννλ κ².
result = nums.map((item) => [1, 2]);
console.log(result);

result = nums.flatMap((item) => [1, 2]);
console.log(result);

result = ["dream", "coding"].map((text) => text.split(""));
console.log(result);
// [ [ 'd', 'r', 'e', 'a', 'm' ], [ 'c', 'o', 'd', 'i', 'n', 'g' ] ]
// λκ°μ λ°°μ΄μ΄ λ¨

result = ["dream", "coding"].flatMap((text) => text.split(""));
console.log(result);
// ['d', 'r', 'e', 'a','m', 'c', 'o', 'd', 'i', 'n', 'g']
// νλμ λ°°μ΄λ‘ ν΄μ§

// sort λ°°μ΄μ μμ΄νλ€μ μ λ ¬ν  μ μμ
// λ¬Έμμ΄ ννμ μ€λ¦μ°¨μμΌλ‘ μμλ₯Ό μ λ ¬νκ³ , κΈ°μ‘΄μ λ°°μ΄μ λ³κ²½

const text = ["hi", "abc"];
text.sort();
console.log(text); // μνλ²³ μμ [ 'abc', 'hi' ]

// μ«μκ° λ¬Έμμ΄ ννλ‘ λ³νλμ΄μ κ·Έ μνμμ μ λ ¬μ΄ λκΈ° λλ¬Έμ μ‘°μ¬ν΄μΌ νλ€.
// μ«μκ° λ¬Έμλ‘ μ·¨κΈλμ΄μ μ λ ¬ λλ€. 1 λ€μμ 10 κ·Έλ¦¬κ³  2κ° λμ¨λ€
// 1μ΄ 2 λ³΄λ€ μμ μκΈ° λλ¬Έμ
const number = [0, 5, 2, 4, 1, 10];
number.sort();
console.log(number); // [ 0, 1, 10, 2, 4, 5 ]
number.sort((a, b) => a - b); // μ΄λ»κ² sorting ν  μ μλμ§ κ·Έ κΈ°μ€μ μ μ ν΄μ€μΌ νλ€.
// a-bκ°μ΄ μμμ΄λ©΄ a,b / a-bκ° 0μ΄λ©΄ λμ΄ κ°μ μ / a-bκ° μμμ΄λ©΄ b,a μμλ‘
console.log(number); // [ 0, 1, 2, 4, 5, 10 ]

// reduce λ°°μ΄μ μμλ€μ μ μ΄μ μ μ΄μ κ°μ νλλ‘!
result = [1, 2, 3, 4, 5].reduce((sum, value) => {
  sum += value;
  return sum;
}, 0);
console.log(result);
// sum = κ°μ κ³μν΄μ μ μ₯ν  μΈμ
// 0μ sumμ μ΄κΈ°κ°
// valueμλ κ°κ°μ μμλ€μ΄ μμ°¨μ μΌλ‘ ν λΉμ΄ λλ€.
