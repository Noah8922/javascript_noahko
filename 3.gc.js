/** 글로벌 변수는 앱이 종료될때까지 계속 유지됨 */
const global = 1;
{
  /** 블럭 내부에서만 local이 존재하다가 */
  const local = 1;
  /** 블럭이 끝날 때 GC에 의해 소멸 됨 */
}

function print() {
  /** 함수 내부에서도 블럭안에서 필요한 경우에는
   * 필요한 곳에서! 블럭 안에서 변수를 선언하고 사용해야 함
   */
  if (true) {
    let temp = 0;
  }
}
