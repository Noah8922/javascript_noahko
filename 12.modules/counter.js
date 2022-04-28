let count = 0;
/** export default는 하나만 가능하다. */
/**export default function increase() {
  count++;
  console.log(count);
}*/

/** 여러개를 하고 싶을 때는 export 만 쓴다.*/
export function increase() {
  count++;
  console.log(count);
}

export function getCount() {
  return count;
}
