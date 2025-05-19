// 데이터 서버에 자료를 호출함.

// 1. xhr 객체 한개 만듦
const xhr = new XMLHttpRequest();

// 2. 주소를 연결함
// 백엔드 호출 시 메소드 5가지(RestAPI 라고 함)
// GET: 자료를 주세요.
// POST: 자료를 추가합니다.
// DELETE: 자료를 삭제해주세요.
// PUT: 자료 전체를 수정해주세요.
// PATCH: 자료 내용에서 일부분만 수정해주세요.
xhr.open("GET", "https://jsonplaceholder.typicode.com/photos");

// 3. 웹 브라우저로 요청을 합니다.
xhr.send();

// 4. 요청 이후 응답이 오기를 기다린다.
xhr.onload = function () {
  console.log("요청이 되어졌을 때 백엔드 회신 정보: ", xhr);
  if (xhr.status === 200) {
    console.log("정상적인 Response 됨");
  } else if (xhr.status === 404) {
    console.log("주소가 잘못되었어요.");
  } else if (xhr.status === 505) {
    console.log("서버의 오류입니다. 잠시 후 실행해주세요.");
  }
};

function getData(api = "posts", fn) {
  // 1. xhr 객체 한개 만듦
  const xhr = new XMLHttpRequest();

  // 2. 주소를 연결함
  xhr.open("GET", `https://jsonplaceholder.typicode.com/${api}`);

  // 3. 웹 브라우저로 요청을 합니다.
  xhr.send();

  // 4. 요청 이후 응답이 오기를 기다린다.
  xhr.onload = function () {
    //console.log("요청이 되어졌을 때 백엔드 회신 정보: ", xhr);
    if (xhr.status === 200) {
      //console.log("정상적인 Response 됨: " + xhr.response);
      // 콜백 함수: 자료가 오면 자료를 활용하고 싶다.
      fn(xhr.response);
    } else if (xhr.status === 404) {
      console.log("주소가 잘못되었어요.");
    } else if (xhr.status === 505) {
      console.log("서버의 오류입니다. 잠시 후 실행해주세요.");
    }
  };
}
// 콜백 함수 만들기: 자료가 들어오면 처리함.
const postsParser = function (res) {
  console.log(res);
};
const commentsParser = function (res) {};
const albumsParser = function (res) {};
const photosParser = function (res) {};
const todosParser = function (res) {};
const usersParser = function (res) {};

// 함수 사용
getData("posts", postsParser);
getData("comments", commentsParser);
getData("albums", albumsParser);
getData("photos", photosParser);
getData("todos", todosParser);
getData("users", usersParser);

function getData(api = "posts") {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://jsonplaceholder.typicode.com/${api}`);
    xhr.send();
    xhr.onload = function () {
      if (xhr.status === 200) {
        // 성공
        resolve(xhr.response);
      } else if (xhr.status === 404) {
        // 실패
        reject();
      } else if (xhr.status === 505) {
        console.log("서버가 불안정합니다. 잠시 후 재접속해주세요.");
      }
    };
  });
}
// 함수 사용
getData("posts")
  .then(function (data) {
    getData("comments");
  })
  .then(function (data) {
    getData("albums");
  })
  .then(function (data) {
    getData("photos");
  })
  .then(function (data) {
    getData("todos");
  })
  .then(function (data) {
    getData("users");
  })
  .catch(function (err) {});
getData("comments").then().catch();
getData("albums").then().catch();
getData("photos").then().catch();
getData("todos").then().catch();
getData("users").then().catch();
