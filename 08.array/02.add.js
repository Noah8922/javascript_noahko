const fruits = ["π", "π", "π", "π"];

// λ°°μ΄ μμ΄νμ μ°Έμ‘°νλ λ°©λ²
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// μΆκ°, μ­μ  - Bad β
// μΈλ±μ€λ‘ μ κ·Όνλ λ°©μμ μ’μ§ μμ.
fruits[4] = "π";
console.log(fruits);

delete fruits[1];
console.log(fruits); // [ 'π', <1 empty item>, 'π', 'π', 'π' ] λ¨μμμ.
