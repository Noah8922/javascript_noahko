// 자바스크립트는 순차적으로 진행되는 언어이지만, 런타임(호스트) 환경에서 제공해주는 다양한 API가 있다.
// WebAPI, setTimeout, setInterval, fetch, eventListener, DOM API
// API들은 비동적으로 실행하기 때문에, 멀티 스레드에서 실행됨, 다양한 일들을 동시 다발적으로 진행 할 수 있음.
// 자바스크립트는 call stack에 쌓인 콜백만 실행하게 된다.

function execute() {
  console.log("1");
  setTimeout(() => {
    console.log("2");
  }, 3000);
  console.log("3");
}

execute();
