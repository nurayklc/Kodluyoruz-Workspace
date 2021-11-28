// Object ve Array Destructing Kullanimi
let settings = {
    userName : "loremIpsum",
    password : "1234bad",
    isActive : "false",
    ip : "127.0.0.1",
    serverName : "kodluyoruz.org"
}
console.log(settings)

// let userName = settings.userName
// console.log(userName)

// Destruncting yöntemi
//let {userName, password, isActive, ip, serverName} = settings
//console.log(userName, password, isActive, ip, serverName)

// Destructing yöntemi rename ile
let {userName: user, password, isActive, ip: serverIp, serverName} = settings
console.log(user, password, isActive, serverIp, serverName)

let {userName: userNameExample, password: passwordExample, isActive: isActiveExample, ...newSettings} = settings
console.log(userNameExample, passwordExample, isActiveExample, newSettings)

// Objenin destructing ile kopyalanması

// HATALI!!!
// let changeSettings = settings
// changeSettings.userName = "Değisen Bilgi"
// console.log("settings", settings)
// console.log("changeSettings" ,changeSettings)

// DOĞRUSU
let changeSettings = {...settings}
changeSettings.userName = "Değisen Bilgi"
console.log("settings", settings)
console.log("changeSettings" ,changeSettings)

// Array destructing örneği
let score = [100, 200, 300, 400]
let [score1, score2, ...newScore] = score
console.log(score1, score2, newScore)

let copyOfScore = [...score]
console.log(copyOfScore)