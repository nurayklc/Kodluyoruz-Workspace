// *********** prompt ile Kullanıcıdan bilgi alma ***********

let fullName = prompt("Lutfen Adinizi giriniz:")
console.log(fullName)

let greeting = document.querySelector("#greeting")
greeting.innerHTML = `${greeting.innerHTML} <small style="color:red">${fullName}</small>`