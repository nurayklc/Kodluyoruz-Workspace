// ***************** Karsilastirma ve Mantiksal Operatorler ****************

let price = "100"
let user = "guest"

// == Eşitse 
console.log( price == 1 ) // false
console.log( price == 100 ) // true

// === Hem degeri hem turu esitse
console.log( price === 100 ) // false turlerı esit degil

// != Esit Degilse
console.log( user != "guest" )

// < Kucukse
console.log( price < 100 )

// <= Kucuk veya Esitse
console.log( price <= 100 )

// > Buyukse
console.log( price > 100 )

// >= Buyuk veya Esitse
console.log( price >= 100 )

// && ve operatoru
console.log( price > 0 && user == "guest")

// || veya operatoru
console.log( price < 0 || user == "guest" )

// ! degil (tersi)
console.log( !price == 100 )

console.log(!!2)