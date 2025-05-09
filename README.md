# JavaScript 기초

- 반드시 스스로 개념을 정리하셔야 합니다.
- 타인에게 특히, 초등학생에게 설명을 정도로 쉽게 개념을 정리하시면 좋습니다.

## 1. 기초 상식

- HTML5: 웹 브라우저에 데이터를 보여주는 형식을 지정한 문법 구조
- CSS3: 데이터를 잘 보여주기 위해서 꾸며주는 용도의 문법
- JS

```
1. css 제어: 레이아웃 변경하도록 지시
2. html 제어: 데이터의 결과를 CRUD 하도록 지시
3. Server, DB, 데스크탑 Application 제어: Node.js 로 가능함.
```

## 2. JS 의 종류는 2가지

### 2.1. 웹 브라우저용 JS (Web API)

- Web API 는 웹 브라우저에 미리 기능이 만들어져 있는 JS 기능
- 주로 직접 코딩하는 것이 아니고 미리 만들어진 기능을 사용하는 것을 학습하면 됨.

### 2.2. 데이터 관리용 JS (ES6)

- 이전에 JS 는 웹 브라우저마다 모두 달랐다.
- 이에 대한 불편함을 해소하기 위해서 JS 의 문법을 통일하였다.
- 기준이 ECMAScript 라고 하며 ES6 가 가장 기준이 된다.

## 3. 실습

### 3.1. 웹 브라우저에서 JS 실행하기

- `F12` 실행 > `Console 탭`을 선택: console 탭은 js 의 결과를 보는 곳

```js
console.log("안녕!");
```

```js
console.clear();
```

```js
alert("안녕!");
```

- 1줄 이상 작성하는 경우는 `Shift + Enter` 키를 입력하여야 함.

```js
console.log("안녕하세요.");
console.log("좋은 금요일입니다.");
```

### 3.2. html에서 JS 실행하기

- index.html 파일을 생성합니다.

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>자바스크립트</title>
  </head>
  <body></body>
</html>
```

## 4. `JS 작성 위치` 고민하기

- `<script></script>` 태그를 지원합니다.

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>자바스크립트</title>
    <script>
      console.log("1. 안녕!");
    </script>
  </head>
  <body>
    <script>
      console.log("2. body 입니다.");
    </script>
  </body>
</html>

<script>
  console.log("3. html 끝 입니다.");
</script>
```

### 4.1. 3번 자리, 즉 html 의 끝이 좋다.

- 일반적으로 css 와 html 을 제어하는 것이 js 의 목적이다.
- `웹 브라우저가 css 와 html 을 모두 읽고 난 후의 자리`

### 4.2. 1번 자리 즉, head 자리는 `기능`을 정의

- 내가 즉, 개발자가 만든 많은 `기능들`을 코딩하기 좋은 자리
- 다른 개발자가 만든 많은 `기능들`을 불러와서 사용하기 좋은 자리

## 5. js 도 외부에 파일을 만들어서 관리하자.

- js 폴더 생성
- js 폴더에 `lib.js` 파일 생성
- `js/lib.js` 내용

```js
// 커피를 출력하는 기능
function 커피머신(_msg) {
  console.log(_msg);
}
console.log("1. 안녕!");
```

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>자바스크립트</title>
    <script src="js/lib.js"></script>
  </head>
  <body>
    <script>
      console.log("2. body 입니다.");
    </script>
  </body>
</html>

<script>
  console.log("3. html 끝 입니다.");
  커피머신("아이스커피 나왔습니다.");
</script>
```

# JavaScript 문법

## 1. 변수(Variables)

- 웹 브라우저에 `값 보관 시 사용할 공간`

### 1.1. 필요로 한 값들을 파악하기

#### 1.1.1. 단계 1 (필요로 한 기능에 대해서 서술 - 피그마, UI 다이어그램)

- 나는 `사용자 정보`를 입력 받아서 `DB 에 보관`하고 싶다.
- 사용자가 로그인을 하고 나면 사용자 정보를 화면에 출력하고 싶다.

#### 1.1.2. 단계 2 (어떤 정보를 보관할지 결정한다. - 요구사항 명세서)

```
이름, 주민번호, 전화번호, 주소(우편번호, 상세주소), 이메일, 아이디, 비밀번호, 동의체크
```

#### 1.1.3. 단계 3 (각각의 정보를 보관할 공간을 마련)

```
이름: 글자 20자 제한
주민번호: 글자 13자 제한
전화번호: 글자 11자 제한
우편번호: 글자 5자 제한
상세주소: 글자 50자 제한
이메일: 글자 20자 제한
아이디: 글자 16자 제한
비밀번호: 글자 16자 제한
동의체크: 참/거짓 숫자 1자 제한
```

### 1.2. 각 항목에 대해서 웹 브라우저에서 임시로 보관하는 작업

#### 1.2.1. 단계 1

- 웹 브라우저 메모리 `빈 공간` 요청

```js
var
let
const
```

#### 1.2.2. `var` 라고 작성을 하면 `변수` 로 인정

- `hoisting` 으로 오류가 발생할 소지가 높음
- 미리 만들지 않고 사용해도 되는 문제
- 이건 옛날 JS 버전에서만 씁니다.

```
무조건 공간에다가 undefined 라는 값을 넣어버린다.
호이스팅의 대상이 된다.
```

#### 1.2.3. `let` 라고 작성을 하면 `변수` 로 인정

- `hoisting` 의 문제를 사전에 차단한다.
- `let` 으로 작성 시 미리 사용하면 오류로 알려준다.
- 수시로 내용이 바뀐다.

#### 1.2.4. 'const`라고 작성을 하면 `상수` 로 인정

- `hoisting` 의 문제를 사전에 차단한다.
- `const` 으로 작성 시 미리 사용하면 오류로 알려준다.
- 절대로 내용이 변하지 않는다.

#### 1.2.5. 실제로 var, let, const 중에 선택합니다.

- 값이 사용자마다 변할것이다. 그래서 `let` 을 선택했어요.

```js
let 이름: 글자 20자 제한
let 주민번호: 글자 13자 제한
let 전화번호: 글자 11자 제한
let 우편번호: 글자 5자 제한
let 상세주소: 글자 50자 제한
let 이메일: 글자 20자 제한
let 아이디: 글자 16자 제한
let 비밀번호: 글자 16자 제한
let 동의체크: 참/거짓 숫자 1자 제한
```

### 1.3. 메모리 공간에 이름 짓는 법(명명법)

- 정말 중요합니다. 이름을 잘못 지으면 다른 개발자에게 혼란을 줌.
- 개발자들은 코딩 컨벤션이 있습니다.
- 변수의 철자는 `명사+명사` `영어`로 하셔야 합니다.
- 숫자 및 공백 및 특수 기호는 절대 안돼요.
- 허용되는 특수 기호는 오로지 `_`, `$` 입니다.

#### 1.3.1. Camel Case

- 반드시 소문자로 시작하고 새로운 명사는 대문자로 시작함.
- 많은 프로그래머들이 변수라고 생각합니다.

#### 1.3.2. Snake Case

- 변수를 모두 소문자로 작성하고 `_` 로 연결함.

#### 1.3.3. Kebab Case

- 이름을 소문자로 작성하고 `-`로 연결함.
- 파일 또는 css 파일에서는 사용합니다.
- 예) Next.js 의 파일명은 Kebab 이 표준입니다.

#### 1.3.4. Pascal Case

- 이름을 대문자로 작성하고 새로운 단어는 대문자로 시작함.
- 혹시 객체 변수 아닌가?
- 혹시 클래스 정의 아닌가?

#### 1.3.5. 대문자

- 상수명으로 판단함.

#### 1.3.6. 적용하기

```js
let userName: 글자 20자 제한
let userNum: 글자 13자 제한
let userPhone: 글자 11자 제한
let userPost: 글자 5자 제한
let userAddress: 글자 50자 제한
let userEmail: 글자 20자 제한
let userId: 글자 16자 제한
let userPassword: 글자 16자 제한
let userAgree: 참/거짓 숫자 1자 제한
```

### 1.4. 데이터 종류 (원시 데이터: Primitive Data Type)

- number: 숫자
- string: 글자 (문자, 문자열로 구분)
- boolean: true/false
- undefined: 값이 없어요. (변수 초기값으로 자동 셋팅)
- null: 개발자가 값이 없다고 지정함. (값이 비었다로 셋팅하라)
- symbol: 절대로 겹치지 않는 변수이다.

#### 1.4.1. 적용하기

```js
let userName = ""; // 20자 제한
let userNum = ""; // 13자 제한
let userPhone = ""; // 11자 제한
let userPost = ""; // 5자 제한
let userAddress = ""; // 50자 제한
let userEmail = ""; // 20자 제한
let userId = ""; // 16자 제한
let userPassword = ""; // 16자 제한
let userAgree = false; // 숫자 1자 제한
```

### 1.5. var, let, const 정확히 제약사항 파악하기

- 웹 브라우저에 저장할 내용, 즉 변수가 있다면 아래를 고민하자.

#### 1.5.1. `1순위는 const` 입니다.

- 변수를 만든다면 나는 var, let, const 중에 무엇을 선택할까?
- const 는 변하지 않을 것이다라는 작성법
- 필요하면 즉, 값이 코딩하다 보니 바뀌어야 하는 경우에 let 으로 변경한다.

- const 의 특징
  - 만들기 전에 사용할 수 없다. (호이스팅 문제 해결됨)

```js
console.log(userName); // Error
const userName = "홍길동";
```

- 동일한 이름으로 변수를 또 생성할 수 없다. (변수 생성 중복 방지)

```js
const userAge = 10;
const userAge = 40; // Error
```

- 값을 변경할 수 없다.

```js
const userCity = "대구";
userCity = "서울"; // Error
```

#### 1.5.2. `2순위는 let` 입니다.

- 만들기 전에 사용할 수 없다. (호이스팅 문제 해결: const 와 동일)

```js
console.log(userName); // Error
let userName = "홍길동";
```

- 동일한 이름으로 중복 생성할 수 없다. (중복 에러 생성: const 와 동일)

```js
let userAge = 20;
let userAge = 30; // Error
```

- 값을 나중에 변경할 수 있다. (const 와의 유일한 차이점)

```js
let userCity = "대구";
userCity = "서울"; // 괜찮다.
```

#### 1.5.3. `var 는 사용하지 않는다.`

- 호이스팅 통과되어 버림. (추후 오류의 원인이 될 수 있음)
- 동일한 이름으로도 중복 생성 가능. (추후 오류의 원인이 될 수 있음)
- 값도 변경이 가능하다.
- 기존 코드에서 var 를 사용한 케이스가 있으면 그냥 유지한다.

### 1.6. 참조형 데이터 종류 (Reference Data Type)

- 만약 interpark 사이트의 Banner 영역의 데이터를 js 에서 관리하려고 한다.
- 배너는 링크 주소, 이미지 주소, 고유한 ID 가 있다.
- 하나의 배너는 변수 3개씩 가지고 있다.
- 총 5개의 배너가 있다.

```js
// 첫 번째 배너
const bannerUrl_1 = "https://~";
const bannerImg_1 = "https://~";
const bannerId_1 = "1";
// 두 번째 배너
const bannerUrl_2 = "https://~";
const bannerImg_2 = "https://~";
const bannerId_2 = "2";
// 세 번째 배너
const bannerUrl_3 = "https://~";
const bannerImg_3 = "https://~";
const bannerId_3 = "3";
// 네 번째 배너
const bannerUrl_4 = "https://~";
const bannerImg_4 = "https://~";
const bannerId_4 = "4";
// 다섯 번째 배너
const bannerUrl_5 = "https://~";
const bannerImg_5 = "https://~";
const bannerId_5 = "5";
```

#### 1.6.1. 객체

- 관련 있는 기본형 데이터들을 묶어서 하나로 만들기

```js
const 객체명 = {}; // 1단계

// 2단계
const 객체명 = {
  이름 (key Name 키명, Property 속성명): 값 (Key Value, Value), // , 로 연결
  이름: 값,
  이름: 값,
};

const 객체명 = {
  key Name: Key Value, // , 로 연결
};

const 객체명 = {
  Property: Value, // , 로 연결
};
```

```js
// 첫 번째 배너
const bannerUrl_1 = "https://~";
const bannerImg_1 = "https://~";
const bannerId_1 = "1";

const banner_1 = {
  url: "https://~",
  img: "https://~",
  id: "1",
};

// 두 번째 배너
const bannerUrl_2 = "https://~";
const bannerImg_2 = "https://~";
const bannerId_2 = "2";

const banner_2 = {
  url: "https://~",
  img: "https://~",
  id: "2",
};
```

- 객체 변수 정보에 담겨진 속성 즉, 키명을 통한 값 사용(호출)

```js
객체명.키명;
banner_1.url;

["객체명"].키명;
["banner_1"].url;
```

#### 1.6.2. 배열

- 하나의 이름으로 여러 개의 데이터를 묶어서 관리

```js
const userArray = [1, 2, 3, "안녕", false, null, undefined];

const banner = [
  { url: "http~", img: "http~", id: "1" },
  { url: "http~", img: "http~", id: "2" },
  { url: "http~", img: "http~", id: "3" },
];

const bannerId = ["1", "2", "3"];
```

- 배열의 요소에 값 사용(호출)

```js
배열명[인덱스번호];
banner[0];
banner[1];
```

### 1.7. 변수 종합 예제

- 인터파크 티켓 랭킹 작업

```js
// 섹션의 타이틀
const sectionTitle = "티켓 랭킹";
console.log(sectionTitle);
// 섹션의 설명글
const sectionDesc = "~~~";
console.log(sectionDesc);
// 섹션의 카테고리
const sectionCategoryArr = ["뮤지컬", "콘서트", "스포츠"];
console.log(sectionCategoryArr);
console.log(sectionCategoryArr[0]);
console.log(sectionCategoryArr[1]);
console.log(sectionCategoryArr[2]);

// 티켓의 타이틀 정보
const ticketTitleArr = [
  "팬텀 10주년 기념 공연",
  "뮤지컬 <메디슨 카운티의 다리>",
  "뮤지컬 <라이카>",
];
console.log(ticketTitleArr[0]);
console.log(ticketTitleArr[1]);
console.log(ticketTitleArr[2]);

// 티켓의 이미지 경로
const ticketImgArr = ["https://a.jpg", "https://b.jpg", "https://c.jpg"];

// 티켓의 링크 경로
const ticketUrlArr = ["https://a.html", "https://b.html", "https://c.html"];

// 티켓의 순위
const ticketRankArr = [1, 2, 3];

// 티켓의 공연 장소
const ticketPlaceArr = ["대구", "서울", "제주"];

// 티켓의 공연일시
const ticketDayArr = ["05/07", "05/09", "05/04"];

// 위의 사항을 효율적으로 관리하기 위한 작업
const ticket_1 = {
  title: "팬텀 10주년 기념 공연",
  img: "https://a.jpg",
  url: "https://a.html",
  rank: 1,
  place: "대구",
  day: "05/07",
};
console.log(ticket_1);
console.log(ticket_1.title);
console.log(ticket_1.img);
console.log(ticket_1.url);
console.log(ticket_1.rank);
console.log(ticket_1.place);
console.log(ticket_1.day);

const ticket_2 = {
  title: "뮤지컬 <메디슨 카운티의 다리>",
  img: "https://b.jpg",
  url: "https://b.html",
  rank: 2,
  place: "서울",
  day: "05/09",
};
console.log(ticket_2);
console.log(ticket_2[title]);
console.log(ticket_2[img]);
console.log(ticket_2[url]);
console.log(ticket_2[rank]);
console.log(ticket_2[place]);
console.log(ticket_2[day]);

const ticket_3 = {
  title: "뮤지컬 <라이카>",
  img: "https://c.jpg",
  url: "https://c.html",
  rank: 3,
  place: "제주",
  day: "05/04",
};
const ticketInfoArr = [ticket_1, ticket_2, ticket_3];
// 보통 아래의 형태로 데이터가 들어오는 것을
// JavaScript Object Notation 즉, JSON 이라고 합니다.

const ticketInfoJsonArr = [
  {
    title: "팬텀 10주년 기념 공연",
    img: "https://a.jpg",
    url: "https://a.html",
    rank: 1,
    place: "대구",
    day: "05/07",
  },
  {
    title: "뮤지컬 <메디슨 카운티의 다리>",
    img: "https://b.jpg",
    url: "https://b.html",
    rank: 2,
    place: "서울",
    day: "05/09",
  },
  {
    title: "뮤지컬 <라이카>",
    img: "https://c.jpg",
    url: "https://c.html",
    rank: 3,
    place: "제주",
    day: "05/04",
  },
];
console.log(ticketInfoJsonArr[0].title);
console.log(ticketInfoJsonArr[1].title);
console.log(ticketInfoJsonArr[2].title);
```

## 2. 연산자 (Operator)

- 연산을 해서 결과값을 만드는 `기호`
- 연산자에 의한 새로운 `결과값이 나오는 것을 연산식`

### 2.1. 사칙 연산 (`+ - * /`)

- `+ 연산자`

```js
const numA = 0;
const numB = 1;
const result = numA + numB; // 1
```

```js
const strA = "안녕";
const strB = "hello";
const result = strA + strB; // "안녕hello"
```

```js
// 숫자 + 글자 는 글자로 인정함.
const strA = "홍길동";
const numAge = 20;
const result = "저기~ " + strA + "님은 나이가 " + numAge + "이군요!"; // "저기~ 홍길동님은 나이가 20이군요!"

// 아래처럼 템플릿 문법을 추천합니다. 흔히 백틱 이라고 합니다.
const resultTemplate = `저기~ ${strA}님은 나이가 ${numAge}이군요!`;
```

- 참고 예제

```html
<div class="section">
  <div class="box_wrap">
    <a href="https:~">뮤지컬 팬텀</a>
    <img src="https:~" alt="뮤지컬 팬텀 배너이미지" />
  </div>
</div>
```

```js
const link = "https~";
const img = "https~";
const title = "뮤지컬 팬텀";
const alt = "뮤지컬 팬텀 배너이미지";

let tag = '<div class="section">';
tag = tag + ' <div class="box_wrap">';
tag = tag + '    <a href="' + link + '">' + title + "</a>";
tag = tag + '    <img src="' + img + '" alt="' + alt + '" />';
```

```js
const link = "https~";
const img = "https~";
const title = "뮤지컬 팬텀";
const alt = "뮤지컬 팬텀 배너이미지";

const tag = `<div class="section">
  <div class="box_wrap">
    <a href="${link}">${title}</a>
    <img src="${img}" alt="${alt}" />
  </div>
</div>`;
```

```js
const numA = 5;
const numB = 8;
const resultA = `${numA} + ${numB} = ${numA + numB}`; // 5 + 8 = 13
const resultB = `${numA} - ${numB} = ${numA - numB}`; // 5 - 8 = -3
const resultC = `${numA} * ${numB} = ${numA * numB}`; // 5 * 8 = 40
const resultD = `${numA} / ${numB} = ${numA / numB}`; // 5 / 8 = 0.625
```

- `+ 연산자`

```js
const a = 1; // number
const b = "1"; // string
// 1단계 number => string 으로 물어보지 않고 변환(암묵적 데이터 타입 변환)
// string + string => string
const result = a + b; // 11
```

- `- 연산자`

```js
const numA = 100;
const numB = 10;
const result = numA - numB; // 90
```

```js
const numA = "100"; // string
const numB = 10; // number
// string 을 number 로 암묵적 변환
// number - number
const result = numA - numB; // 90
```

```js
const numA = "ABC"; // string
const numB = 10; // number
// string 을 number 로 암묵적 변환 실패
// string - number
const result = numA - numB; // NaN (Not a Number)
```

- ` * / 연산자`

```js
const numA = 4;
const numB = 2;
const resultMulti = numA * numB; // 8
const resultDevide = numA / numB; // 2
```

### 2.2. 나머지 연산 (`%`)

- 총 게시글 52개
- 한 페이지당 5개 목록
- 몇 페이지가 필요한가?
- 마지막 페이지에서 보여주어야 하는 게시글 수?

```js
const total = 52;
const count = 5;
const totalPage = total / count; // 소숫점 나옴
const totalPageNumber = Math.ceil(totalPage); // 올림
const lastCount = total % count; // 나머지 나옴
```

### 2.3. 복합 연산자 (연산 타이핑 수를 줄인다.)

```js
const numA = 5;
let result = numA + 3; // 5 + 3 = 8
// 코딩에 의한 가독성이 떨어집니다.
// 그런데 프로그래머들은 많이 사용하는 방식입니다.
// result = result + 10; 을 줄여서 작성함.
result += 10; // 18
// result = result - 5;
result -= 5; // 13
// result = result * 4;
result *= 4; // 20
// result = result / 2;
result /= 2; // 10
// result = result % 2; %는 나머지 연산자, 모듈러 연산자
result %= 2; // 0
```

### 2.4. 증감 연산자 ( ++ -- )

- 개발자는 타이핑 수를 줄이려고 노력합니다.

```js
let num = 2;
num = num + 1;
num += 1;
num++;
++num;
```

```js
let num = 5;
num = num - 1;
num -= 1;
num--;
--num;
```

```js
let num = 20;
// 후에 배치된 후치연산
let numA = num--; // 20
num; // 19
```

### 2.5. 논리 연산자

- `무조건 이해` 하셔야 합니다.
- `falsy` 한 값의 종류 (js 에서 false 라고 판단하는 값)

```js
"";
0;
undefined;
null;
NaN;
false;
```

- 최종 결과가 true 인지 false 인지 결과를 변수에 저장

#### 2.5.1. OR 연산자 (또는)

- 2개 중 1개만 true 이면 true, 나머지는 false

```js
let result = true || true;
result = false || false;
result = false || true;
result = "" || true;

const userPass;
result = userPass || "비밀번호를 넣으세요";
```

#### 2.5.2. AND 연산자 (그리고)

- 둘 다 true 면 true, 아니면 false
- 변수에 결과값은 true, false 가 담겨진다.

```js
let result = true && true;
result = false && true;
result = false && false;
```

#### 2.5.3. NOT 연산자 (반대)

```js
let result = !true;
result = !false;
```

#### 2.5.4. 실습 예제

```js
let nickName = "";
let displayName = nickName || "Guest";
console.log(displayName); // Guest
```

```js
let title = null;
let result = title || "제목 없음";
console.log(result); // 제목 없음
```

```js
let totalMoney = 0;
let result = totalMoney || "장바구니가 비었습니다.";
console.log(result); // 장바구니가 비었습니다.
```

```js
let isLogin = true;
let result = isLogin && "환영합니다.";
console.log(result); // 환영합니다.
```

```js
let isAdmin = false;
let result = isAdmin && "관리자 메뉴 표시";
console.log(result); // false
```

```js
let config = {};
config.theme = config.theme || "light";
console.log(config); // {theme: "light"}
```

```js
let options = {
  lang: null,
  fontSize: 0,
};
let lang = options.lang || "ko";
let fontSize = options.fontSize || 20;
```

### 2.6. 비교 연산자

- 정말 중요합니다.

```js
// 데이터 값의 종류는 비교하지 않음
let resultA = "1" == 1; // true
// 데이터 값과 데이터 종류도 비교함.
let resultB = "1" === 1; // false

let resultC = 1 > 2;
let resultD = 1 < 2;
let resultE = 1 >= 2;
let resultF = 1 <= 2;
let resultG = 1 != 2;
let resultH = 1 !== 2;
```

### 2.7. 병합 연산자

- 내가 FrontEnd 라면 반드시 알아야 함.
- 일반적으로 기본값 셋팅에서 활용
- falsy 가 아니라 `null, undefined` 일 때만 값을 비교할 경우
- 아래에서 기대한 코드는 `0` 값이 나오길 기대하고 코드 진행함.

```js
let userName = null;
let displayName = userName ?? "Guest"; // Guest

let userPoint = 0;
let displayPoint = userPoint ?? 500000; // 0
```

- `??` 연산자는 null 과 undefined 만 비교한다.
- 나머지는 `||` 과 같다.

```js
let userPoint2 = undefined;
let displayPoint2 = userPoint2 ?? 500000; // 500000
```

```js
let formInput = {
  name: "",
  email: null,
  phone: undefined,
};
const name = formInput.name ?? "이름 없음";
const email = formInput.email ?? "이메일 없음";
const phone = formInput.phone ?? "전화 없음";
```

### 2.8. 옵셔널체이닝

- FE 라면 아랑야 합니다.
- 대상은 객체가 입니다.
- `{ 속성: 값, }`

```js
const user = {
  profile: null,
};
const age = user.profile.age; // null error 발생 후 서비스 멈춤
const age2 = user.profile?.age ?? "정보가 없어서 나이 정보를 몰라요.";
```

### 2.9. 3항 연산자

- 연산자가 3개라서 3항 연산자라고 합니다.
- `결과 = 조건식 ? 참일 때 결과 : 거짓일 때 결과`
- 활용 빈도가 매우 높습니다.

```js
const userRole = "ADMIN"; // 사용자 등급
// const url = 조건 ? 참 : 거짓;
const url = userRole === "ADMIN" ? "admin.html" : "guest.html";
```

```js
const age = 10;
const result = age < 19 ? "동의서 필요" : "성인 인증";
```

```js
const goodCount = 10;
const result = goodCount > 0 ? "재고가 있어요" : "재고가 없어요";
```

```js
const user = {
  isLogin: true,
  name: "아이유",
};
const result = user.isLogin ? `${user.name} 님 반가워요.` : "로그인 해 주세요.";
```

```js
let num = 5;
let result = num % 2 === 0 ? "짝수" : "홀수";
```

## 3. 조건문 (Condition)

### 3.1. if 문

- `참/거짓`을 판단하여 코드 분기 실행함.

```js
if (조건) {
  조건이 참이면 실행;
}
```

```js
if (조건) {
  조건이 참이면 실행;
} else {
  조건이 거짓이면 실행;
}
```

```js
if (조건1) {
  조건1이 참이면 실행;
} else if (조건2) {
  조건2이 참이면 실행;
} else if (조건3) {
  조건3이 참이면 실행;
} else {
  모든 조건이 거짓이면 실행;
}
```

- 예제) 로그인이 된 경우에 메세지 출력하기

```js
const isLogin = true;
if (isLogin === true) {
  console.log("로그인하셨네요. 반갑습니다.");
  console.log("오늘도 좋은 하루되세용.");
}
if (isLogin) {
  console.log("로그인하셨네요. 반갑습니다.");
}

// 아래처럼 하시면 힘들어요. 코드 가독성이 떨어져요.
if (isLogin) console.log("로그인하셨네요. 반갑습니다.");
```

- 예제) 로그인 된 경우의 메세지와 로그인 안된 경우의 메세지 출력하기

```js
const isLogin = true;

if (isLogin) {
  console.log("어서오세요.");
} else {
  console.log("로그인하셔야 됩니다.");
}
```

- 예제) 나이에 따라서 다른 메세지 출력하기 (조건이 2개 이상인 경우)

```js
const age = 19;

if (age >= 60) {
  console.log("어르신이시네요.");
} else if (age >= 50) {
  console.log("50대시네요.");
} else if (age >= 40) {
  console.log("40대시네요.");
} else if (age >= 30) {
  console.log("30대시네요.");
} else if (age >= 19) {
  console.log("청년이시네요.");
} else {
  console.log("미성년이시네요.");
}
```

- 예제) 사용자가 입력한 항목이 값이 없을 경우 메세지 보내기

```js
const name = "홍길동";
const pass = "1234";
const useInfoCheck = false; // 사용자 정보 활용 동의
const useEmailCheck = false; // 이메일 수신 동의

if (name === "") {
  alert("이름을 입력하세요.");
  return;
}
if (!name) {
  alert("이름을 입력하세요.");
  return;
}

if (pass === "") {
  alert("비밀번호를 입력하세요.");
  return;
}
if (!pass) {
  alert("비밀번호를 입력하세요.");
  return;
}

if (!useInfoCheck) {
  alert("개인정보 동의를 체크하세요.");
  return;
}

if (useEmailCheck === false) {
  alert("이메일 수신 동의를 체크하세요.");
  return;
}
```

### 3.2. switch 문

- `여러 개의 값` 중 하나의 `값`이 같은지 판단 후 실행 (값을 비교)

```js
switch (값) {
  case 비교값1:
    실행 코드;
    break;
  case 비교값2:
    실행 코드;
    break;
  case 비교값3:
    실행 코드;
    break;
  default:
    실행 코드;
    break;
}
```

- 예제) 엘리베이터 층 예제

```js
const layer = 5; // 값
switch (layer) {
  case 1:
    console.log("1층 내리세요.");
    break;
  case 2:
    console.log("2층 내리세요.");
    break;
  case 3:
    console.log("3층 내리세요.");
    break;
  case 4:
    console.log("4층 내리세요.");
    break;
  case 5:
    console.log("5층 내리세요.");
    break;
  default:
    console.log("당신은 내릴 층이 없습니다.");
    break;
}
```

- if 와 switch 종합 예제

```js
const userRole = "ADMIN";
if (userRole === "MEMBER") {
  console.log("회원");
} else if (userRole === "ADMIN") {
  console.log("관리자");
} else {
  console.log("비회원");
}

switch (userRole) {
  case "MEMBER":
    console.log("회원");
    break;
  case "ADMIN":
    console.log("관리자");
    break;
  default:
    console.log("비회원");
    break;
}
```

## 4. 반복문 (Loop)

### 4.1. for 구문

- 주어진 `횟수만큼` 반복 실행 (`개발자가 반복 횟수를 아는 경우`)

```js
for (초기값은 단 한 번만 실행; 조건식의 결과가 true/false; 증감식은 조건식을 false 로 만들기 위한 것) {
  할 일 코드 작성;
}
```

```js
const total = 10; // 반복 횟수

for (let i = 0; i < total; i++) {
  console.log(`현재 ${i} 입니다.`);
}
```

```js
// 장바구니 담긴 제품 가격 모음
const bucketsArr = [1000, 500, 700, 400];
// 반복 횟수
const total = bucketsArr.length;
// 반복문이 없다면
let totalPrice = bucketsArr[0] + bucketsArr[1] + bucketsArr[2] + bucketsArr[3];
// 반복문을 활용한다면
let totalPriceFor = 0;
for (let i = 0; i < 4; i++) {
  totalPriceFor = totalPriceFor + bucketsArr[i];
  // totalPriceFor += bucketsArr[i];
}
```

- 예제) 제품의 이름과 가격 및 재고를 html 태그로 출력하는 예제
- 예제) 백엔드에서 제품의 목록은 json 으로 주어진다.

```js
// 백엔드에서 가져온 자료 json
const goodData = [
  { id: 542, name: "사과", price: 1000, stock: 10 },
  { id: 5557, name: "딸기", price: 200, stock: 0 },
  { id: 2147, name: "키위", price: 5000, stock: 5000 },
];
// 반복 횟수
const total = goodDate.length;
for (let i = 0; i < total; i++) {
  // 제품 1개를 뽑아서 보관한다.
  const good = goodData[i];
  // html 만들기
  const tag = `<div id="${good.id}" class="good-box">
    <p>제품명: ${good.name}</p>
    <p>가격: ${good.price}</p>
    <p>재고 수량: ${good.stock || "재고가 없어요"}</p>
  </div>`;
}
```

- 예제) 구구단
- 가까운 for 문에서 `break` 는 반복문 빠져나오고 종료됨.
- 가까운 for 문에서 `continue` 는 반복문 실행 건너뛰고 계속 실행.

```js
const total = 9;
for (let i = 1; i <= total; i++) {
  console.log(i + "단");

  // 종료하기
  if (i === 6) {
    break;
  }

  // 건너뛰기
  if (i % 3 === 0) {
    continue;
  }

  for (let j = 1; j <= total; j++) {
    if (j === 6) {
      break;
    }
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
```

### 4.2. for in 구문

### 4.3. for of 구문

### 4.4. while 구문

### 4.5. do while 구문

## 5. 함수 (Function)
