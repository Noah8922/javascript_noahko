/** JSON : Javascript Object Notation
 * 서버와 클라이언트(브라우저, 모바일) 간의 HTTP 통신을 위한
 * 오브젝트 형태의 텍스트 포맷
 * stringify(object) : JSON, object to JSON
 * Parse(JSON) : object / JSON to object
 */

const Noah = {
  name: "Noah",
  age: 20,
  eat: () => {
    console.log("eat");
  },
};

/** 직렬화 Serializing : (객체를 문자열로 바꾸는 것) */
const json = JSON.stringify(Noah);
console.log(Noah); /** { name: 'Noah', age: 20, eat: [Function: eat] } */
console.log(json);
/** {"name":"Noah","age":20}, 함수는 데이터가 아니기 떄문에 JSON에는 들어오지 않는다. */

/** 역직렬화 Deseiralizing : 서버로 부터 받아온 JSON을 object로 바꾸고 싶을 때 */
const obj = JSON.parse(json);
console.log(obj);
/** { name: 'Noah', age: 20 }, 순수 문자열에서 object형태로 전환 */
