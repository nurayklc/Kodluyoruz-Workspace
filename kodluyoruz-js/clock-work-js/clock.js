
let user = document.querySelector("#user")
let username = prompt("Adınız Nedir?")

user.innerHTML = username;

function getTime(){
    let currentTime = new Date()
    let hour = currentTime.getHours()
    let minute =  currentTime.getMinutes()
    let second = currentTime.getSeconds()
    let day = currentTime.getDay()
    if(hour.toString().length == 1){
        hour = "0" + hour
    }
    if(minute.toString().length == 1){
        minute = "0" + minute
    }
    if(second.toString().length == 1){
        second = "0" + second
    }
    switch(day){
        case 0:
            day = "Pazar"
            break
        case 1:
            day = "Pazartesi"
            break
        case 2: 
            day = "Salı"
            break
        case 3:
            day = "Çarşamba"
            break
        case 4:
            day = "Perşembe"
            break
        case 5:
            day = "Cuma"
            break
        case 6:
            day = "Cumartesi"
    }
    return hour + " : " + minute + " : " + second + "\t" + day
}

setInterval(function () {
    currentTime = getTime()
    document.querySelector("#clock").innerHTML = currentTime
}, 100)