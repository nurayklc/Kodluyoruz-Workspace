// ************** Dom Icınde Oge Secimi ******************

//let title = document.getElementsByTagName('h2');
let title = document.getElementById('title').innerHTML = "Whats up?"
console.log(title)

let link = document.querySelector("ul#list>li>a")
link.innerHTML = "Link Bilgisi Degistrildi."
link.style.color = "red"
link.classList.add("btn")
console.log(link.innerHTML)

