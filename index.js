//DOM追加
const button = document.getElementById('addBtn');
const lists = document.getElementById('lists');

// 関数(メソッド)
function addList(user) {
  //DOM操作
  const list = document.createElement('li');
  list.innerText = user.name;
  lists.appendChild(list);
}

//非同期通信をする関数(async await)
async function getUsers() {
  //データをフェッチして取得
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  //json()メソッドでjsonデータを加工
  const users = await res.json();
  return users;
}

async function listUsers() {
  const users = await getUsers();
  users.forEach(addList);
}

//イベント
button.addEventListener('click', listUsers);
window.addEventListener('load', listUsers);
