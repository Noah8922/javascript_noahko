// 자바스크립트는 순차적으로 진행되는 언어이지만, 런타임(호스트) 환경에서 제공해주는 다양한 API가 있다.
// WebAPI, setTimeout, setInterval, fetch, eventListener, DOM API
// API들은 비동적으로 실행하기 때문에, 멀티 스레드에서 실행됨, 다양한 일들을 동시 다발적으로 진행 할 수 있음.
// 자바스크립트는 call stack에 쌓인 콜백만 실행하게 된다.

function execute() {
  console.log("1");
  setTimeout(() => {
    // 브라우저와 노드에서 모두 제공하는 API
    console.log("2");
  }, 3000);
  console.log("3");
}

execute();

/** setTimeout을 사용하면 어쨌든 후순위로 밀린다. 0초를 해도 제일 마지막에 출력된다.
 * Call stack이 비어있을 때만 Task Queue에서 가져온다.
 * 자바스크립트는 동기적으로 수행이 되지만, Web API를 통해서 비동기적으로 코드를 수행할 수 있다.
 * 위의 코드를 예시로 들면, 콘솔로 1,3 찍는 쓰레드와 setTimeout으로 2를 찍는 쓰레드가 따로 돌아가고 있다.
 */
