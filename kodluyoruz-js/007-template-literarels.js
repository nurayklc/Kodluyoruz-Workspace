// ************ Template Literals Kullanımı ************ 

let userName = "ayse";
const DOMAIN = "kodluyoruz.org"

let email = userName + "@" + DOMAIN;
console.log("Hello", userName, "welcome", "mail:", email)

let info = `Hello ${userName} welcome
mail adresin: ${email} 
kisa isminiz: ${userName[0]}.
mail adresinin uzunluğu: ${email.length}
borcunuz ${(2+5)*10} TL
saat: ${new Date().getHours()}`
console.log(info)