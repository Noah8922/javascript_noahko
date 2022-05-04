/**변수규칙
 * 라틴문자(0-9, a-z, A-Z), _(언더바)
 * 대소문자 구분함
 * 추천 : camelCase (likethis) ✅
 * 한국어 ❌
 * 예약어 ❌
 * 숫자로 시작 ❌
 * 특수문자 ❌ (_, $ 두가지는 예외)
 * 이모지 ❌
 * 변수 이름을 1,2,3로 구분 ❌
 */

let apple;
let redApple;

// Bad case❌
let num = 20; // 의미를 알수 없음

// Better case ✅
let myAge = 20; // 의미를 알수 있음

//Bad case ❌
let audio1;
let audio2; //이렇게하면 1은 뭐고 2는 뭐지? 하게 됨

// Better case ✅
let backgroundAudio;
let windAudio;

//꿀팁 🍰
let audioBackground;
let audioWind; // 이렇게 하면 audio만 치면 관련 내용들이 자동 완성 됨.
