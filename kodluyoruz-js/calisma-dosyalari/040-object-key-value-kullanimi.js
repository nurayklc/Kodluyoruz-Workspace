let laptop = {
    brand : "Apple",
    model : "Macbook Pro",
    modelName : "Macbook Pro",
    //model-name : "Macbook Pro",
    model_name : "Macbook Pro"
}
console.log(laptop)
console.log(laptop.brand, laptop["brand"])
console.log(laptop.model, laptop["model"])

laptop.brand = "Mac"
laptop["brand"] = "Mac"
console.log(laptop)

laptop.version = "10.15.7"
console.log(laptop)

keys = Object.keys(laptop)
console.log(keys)

console.log(Object.keys(laptop))

for (const key of keys) {
    console.log(key)
}

keys.forEach(item => {
    console.log(item + " foreach") // key'lere erişim
    console.log(laptop[item]) // value'lere erişim sağlandı.
});

console.log(Object.values(laptop))

values = Object.values(laptop)

values.forEach(info => {
    console.log(info ," value")
})

let setting = {
    password : 1234,
    userName : "user1"
}