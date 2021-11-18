// FORM SUBMİT

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)

function formSubmit(event) {
    event.preventDefault() // bu fonksiyon ile default islem engellendi
    console.log("islem gerceklesti")
}