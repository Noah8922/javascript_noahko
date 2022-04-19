const textObj = new String("Hello World");
const text = "Hello World";
console.log(textObj);

console.log(text);
console.log(text.length);
console.log(text[0]);
console.log(text.charAt(0));
console.log(text[1]);
console.log(text.charAt(1));
console.log(text[2]);
console.log(text.charAt(2));

// 글자의 위치 찾기
console.log(text.indexOf("l")); // 맨처음 나오는 문자의 위치
console.log(text.lastIndexOf("l"));

// 포함 여부 체크하기
console.log(text.includes("h")); // fasle, 대소문자 구분
console.log(text.includes("H")); // true

// 어떤걸로 시작하고 끝나는지
console.log(text.startsWith("He"));
console.log(text.endsWith("!"));

// 텍스트 전부 대문자/ 소문자로 바꾸기
console.log(text.toUpperCase());
console.log(text.toLowerCase());

// 글자 일부분만 가져오기
console.log(text.substring(0, 2)); // He
console.log(text.slice(2, 4)); // ll
console.log(text.slice(-2)); // 뒤에서 2번째 전 글자까지만 0. -1번째 까지만,

// 공백제거
const space = "             space         ";
console.log(space);
console.log(space.trim());

// 내가 원하는 걸로 끊어서 배열 만들 때
const longText = "Get to the point";
console.log(longText.split(" "));
console.log(longText.split(" ", 2));
