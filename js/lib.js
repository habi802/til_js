async function getAllData() {
  try {
    const apiUrl = "https://jsonplaceholder.typicode.com";
    // BE 데이터 연동 시도
    let res = await fetch(`${apiUrl}/posts`);
    let data = await res.json();

    res = await fetch("https://jsonplaceholder.typicode.com/posts");
    data = await res.json();

    res = await fetch("https://jsonplaceholder.typicode.com/comments");
    data = await res.json();

    res = await fetch("https://jsonplaceholder.typicode.com/albums");
    data = await res.json();

    res = await fetch("https://jsonplaceholder.typicode.com/photos");
    data = await res.json();

    res = await fetch("https://jsonplaceholder.typicode.com/todos");
    data = await res.json();

    res = await fetch("https://jsonplaceholder.typicode.com/users");
    data = await res.json();
  } catch (error) {
    console.log("Error 입니다.");
  }
}

getAllData();
