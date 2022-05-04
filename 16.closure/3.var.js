function loop() {
  const array = [];
  /** var와 let의 차이점! */
  for (let i = 0; i < 5; i++) {
    array.push(function () {
      console.log(i);
    });
  }
  return array;
}

const array = loop();
array.forEach((func) => func());

/** var를 사용했을 때 
 * 5
5
5
5
5
=> var는 블럭 스코프는 없고 함수 스코프만 있기 때문에 최종값으로 된 var = 5를 다 참조할수 밖에 없다.
*/

/** let을 썻을때
 *0
1
2
3
4
 */
