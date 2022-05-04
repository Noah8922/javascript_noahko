/** 내부에서는 외부에 접근할 수 있지만, 외부에서는 내부로 접근할 수 없다. */
const text = "Hello";
function func() {
  console.log(text);
}
func(); /** Hello */

function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner : ${x}`);
  }
  return inner;
}
const result = outer();
result();
