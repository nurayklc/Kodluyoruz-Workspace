// *********** Fonksiyonlarla Calismak *********

function helloWorld(params) {
  console.log("Hello World");
}

function hello() {
  console.log("Merhabaaaaaaaaaaaaaa");
  helloWorld();
}

let userName = prompt("Kullanıcı Adı: ");
let age = prompt("Yaş: ");
let info = document.querySelector("#info");

function userCheck(userName, age) {
  if (userName && age >= 18) {
    info.innerHTML = "Ehliyet alabilirsiniz";
  } else if (!userName) {
    info.innerHTML = "Kullanıcı adınız yok";
  } else if (!(age >= 18)) {
    info.innerHTML = "Yaş bilginiz yok veya 18 yaşında değilsiniz";
  }
}
userCheck(userName,age)
hello();
