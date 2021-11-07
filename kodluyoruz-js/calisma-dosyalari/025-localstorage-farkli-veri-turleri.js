
let user = {userName: "alex", isActive:true}

localStorage.setItem('userInfo', JSON.stringify(user))

let userInfo = localStorage.getItem('userInfo')

// userInfo = JSON.parse(userInfo)
// console.log(userInfo)
console.log(JSON.parse(userInfo))

let items = [1,2,3, user]

localStorage.setItem('newItem', items)
localStorage.getItem('newItem') // objeyi hatalı donuyor

localStorage.setItem('newItem', JSON.stringify(items))

console.log(JSON.parse(localStorage.getItem("newItem")))

// tüm localstorage verilerini siler.
// localStorage.clear() 