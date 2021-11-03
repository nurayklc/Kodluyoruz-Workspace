// ************** ternary ile kisa if kullanimi ************

let userName = prompt("Kullanıcı adınız: ")
let info = document.querySelector("#info")

info.innerHTML = `${userName ? userName : "Kullanıcı bilgisi bulunamadı"} `

let boolean;

const isBooleanTrue = boolean ? true : false;

console.log(isBooleanTrue)

console.log(boolean)