/* setTimeout(() => {
  console.log("Test messagee...");
}, 2000);

setInterval(() => {
  console.log("Test message setInterval...");
}, 1000);
 */
const sayHi = (cb) => {
  //console.log('Hellooo')
  cb();
};

sayHi(() => {
  console.log("Helloooo");
});

import fetch from "node-fetch";
import axios from "axios";

/* fetch('https://jsonplaceholder.typicode.com/users/1')
.then((data) => data.json())
.then((users) => {
    console.log("Kullanıcılar yüklendi", users)
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((data) => data.json())
    .then((todos) => console.log("Todo yüklendi", todos))
})
 */

async function getData() {
  const users = await (
    await fetch("https://jsonplaceholder.typicode.com/users/1")
  ).json();
  console.log(users);

  const post = await (
    await fetch("https://jsonplaceholder.typicode.com/todos/1")
  ).json();
  console.log(post);
}

//getData()

async function getUsers() {
  const { data: users } = await axios("https://jsonplaceholder.typicode.com/users/1");
  console.log("Users", users);

  const { data: todo } = await axios("https://jsonplaceholder.typicode.com/todos/1");
  console.log("Todos", todo);
}

getUsers();
