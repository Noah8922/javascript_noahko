// 주어진 배열에서 중복을 제거 하라
const fruits = ["🍌", "🍎", "🍇", "🍌", "🍎", "🍑"];
//  ['🍌', '🍎', '🍇', '🍑']
const setFruits = new Set(fruits);
console.log([...setFruits]);

// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);
const set3 = new Set([]);

function findIntersection(set1, set2) {
  set1.forEach((item) => (set2.has(item) ? set3.add(item) : ""));
  return set3;
}

function findIntersection2(set1, set2) {
  const array = [...set1].filter((item) => set2.has(item));
  return new Set(array);
}
// set1.forEach((item) => {
//   if (set2.has(item)) {
//     set3.add(item);
//   } else {
//     return;
//   }
// });

console.log(findIntersection(set1, set2));
console.log(findIntersection2(set1, set2));
