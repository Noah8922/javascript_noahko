{
  const x = 1;
  {
    const y = 2;
    console.log(x);
  }
  console.log(x);
  //   console.log(y); / y is not defined
}

/** 안에서는 밖을 참조할 수 있지만, 밖에서는 안을 참조할 수 없다.*/

const text = "global"; /** 전역변수, 전역 스코프 (글로벌 변수, 글로벌 스코프) */
{
  const text =
    "inside block1"; /** 지역 변수(로컬변수), 지역 스코프(로컬 스코프) */
  {
    console.log(text); /** inside block1 */
  }
}
