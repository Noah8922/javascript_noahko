//문자열 타입
let string = "안녕하세요";
string = `안녕!`;
console.log(string);

// 특수문자 출력하는 법
string = "'안녕!'";
console.log(string);

string = "안녕!\n노아야!\t\t내 이름은"; // \n 한줄바꿈, \t 탭
console.log(string);

{
  /* <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String">MDN string</a>; */
}

// `` : 템플릿 리터럴 (Template Literal)
let id = "Noah";
let greeting = "'안녕!, " + id + "🙌\n즐거운 하루 보내요!'";
console.log(greeting);

//위의 불편함을 간단하게

greeting = `'안녕, ${id}🙌
즐거운 하루 보내요`;
console.log(greeting);
