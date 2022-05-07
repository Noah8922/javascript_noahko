// null, undefined

let variable;
console.log(variable); // undefined

variable = null;
console.log(variable); // null

let activeItem; // 아직 활성화된 아이템이 있는지 없는지 모르는 상태!
activeItem = null; //활성화된 아이템이 없음

//조금더 자세한 내용
console.log(typeof null); // object, 값이 없는 걸로 정함. 여기는 값이 빈 박스임
console.log(typeof undefined); //undefined, 값이 정해지지 않음. 이 박스 뭐가 들어갈지 정해지지도 않음.
