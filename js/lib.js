const say = function () {};
const cry = () => {};

// 매개변수로 전달된 함수 실행
function run(a) {
  a();
}

run(say);
run(cry);

// 아래처럼 쓸 것을 추천함.
run(function () {});
