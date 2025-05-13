// 기본 함수
function say() {
  console.log("안녕!");
}
// 표현식 함수
const say = function () {
  console.log("안녕!");
};
// 화살표 함수
const sayArrow = () => {
  console.log("안녕!");
};
// 실행 코드가 1줄이면 {} 블럭 생략 가능
const sayArrow2 = () => console.log("안녕!");
// 실행 코드가 1줄이면 {} 블럭 생략 가능
// 매개변수 () 가 생략이 가능하다.
const sayArrow3 = (_word) => console.log(_word);
// 실행 코드가 1줄이면 {} 블럭 생략 가능
// 매개변수 2개 이상은 () 가 필수.
const sayArrow4 = (_word, _name) => console.log(_word + _name);

const appName = "JavaScript World";
{
  console.log(appName);
}

function say2() {
  console.log(appName);
}
say2();

{
  // 지역 변수
  const appName = "JavaScript World";
  console.log(appName);
}

function say3() {
  console.log(appName);
}
say3();

// 전역 자리

// 지역 자리
{
  function say4(_name) {
    console.log(_name + " 안녕!");
  }
}
say4("박길동");

// 전역 자리
function say5(_word) {
  console.log("기본 실행 함수: " + _word);
}

// 개발자: 홍길동 지역 자리
{
  const say5 = (_name) => console.log(_name + " Hello");
  say5("홍길동");
}

// 개발자: 고길동 지역 자리
{
  const say5 = (_name) => console.log(_name + " 반가워!");
  say5("고길동");
}

say5("테스터");
