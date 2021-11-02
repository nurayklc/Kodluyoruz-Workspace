// ************* Switch Case ***************

let userName = prompt("Kullanıcı Adı: ")
let age = prompt("Yaş: ")
let info = document.querySelector("#info")

if(userName && age >= 18){
    info.innerHTML = "Ehliyet alabilirsiniz"
} else if( !userName ){
    info.innerHTML = "Kullanıcı adınız yok"
} else if( !(age >= 18) ) {
    info.innerHTML = "Yaş bilginiz yok veya 18 yaşında değilsiniz"
}