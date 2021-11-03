// *************** liste içerindeki elemana ulaşma ****************

let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "Son oge degisti"
console.log(lastChild)

let firstChild = document.querySelector("ul#list>li:last-child")
firstChild.innerHTML = "Son oge degisti"
console.log(firstChild)

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement('li')

liDOM.innerHTML = "Sonradam olusturulan oge"
// append fonksiyonu listenin sonuna eleman ekliyor.
ulDOM.append(liDOM)

let firstDOM = document.createElement('li')
firstDOM.innerHTML = "İlk eleman olacak."
// prepend ile de listenin başına ekliyor.
ulDOM.prepend(firstDOM)