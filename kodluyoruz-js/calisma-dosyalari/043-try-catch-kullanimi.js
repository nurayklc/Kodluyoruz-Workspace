// Try-catch kullanimi

let products;
try {
  products.forEach((element) => {
    console.log(element);
  });
} catch (error) {
  console.log("error", error);
//   products = [1,2,3]
//   products.forEach((element) => {
//     console.log(element);
//   });
}

console.log("Hata yönetimi duzgun çalışıyor.");

let info = "Kodluyoruz";
console.log(info);
