const map = new Map([
  ["key1", "🍎"],
  ["key2", "🍌"],
]);
console.log(map);

// 사이즈
console.log(map.size);

// 존재하는지 확인
console.log(map.has("key1"));
console.log(map.has("key6"));

// 순회
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

// 찾기
console.log(map.get("key1")); // 🍎
console.log(map.get("key2")); // 🍌
console.log(map.get("key4")); // undefined

// 추가
map.set("key3", "🥝");
console.log(map); // Map(3) { 'key1' => '🍎', 'key2' => '🍌', 'key3' => '🥝' }

// 삭제
map.delete("key3");
console.log(map); // Map(2) { 'key1' => '🍎', 'key2' => '🍌' }

// 전부삭제
map.clear();
console.log(map); // Map(0) {}

// 오브젝트와의 큰 차이점
const key = { name: "milk", price: 10 };
const milk = { name: "milk", price: 10, description: "맛있는 우유" };
const obj = {
  [key]: milk,
};
console.log(obj);
const map2 = new Map([[key, milk]]);
console.log(map2);
console.log(obj[key]); // { name: 'milk', price: 10, description: '맛있는 우유' }
console.log(map2[key]); // undefined, 키값으로는 접근 불가능
console.log(map2.get(key)); // { name: 'milk', price: 10, description: '맛있는 우유' }
