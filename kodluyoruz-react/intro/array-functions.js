const users = [
  { name: "Ali", age: 20 },
  { name: "Veli", age: 20 },
  { name: "Fatma", age: 20 },
  { name: "Mehmet", age: 20 },
  { name: "Sema", age: 20 },
];

/* Array Functions
push
map
filter
find
some
every
includes
*/

// push - Arrayin sonuna eleman ekler.
users.push("Murat");
console.log(users);

// map - Arrayin elemanlarını tek tek gezer.
users.map((item) => {
  console.log(item);
});

// find - Array içinde verilen koşullara göre arama işlemi gerçekleştirir.
const result = users.find((item) => item.name == "Mehmet");
console.log(result);

// filter - Array içinde filtreleme işlemi yapılır.
const filtered = users.filter((item) => item.name == "Fatma");
console.log(filtered);

// some - Arrayin içinde herhangi bir eleman şartı sağlıyorsa true döner.
const some = users.some((item) => item.age = 20)
console.log(some)

// every - Arrayin bütün elemanlarının verilen şarta uyması bekleniyor.
const every = users.every(item => item.age > 19)
console.log(every)

// includes - Arrayin içinde istenilen eleman var mı kontrolünü sağlıyor.
const isIncluded = users.includes("Fatma")
console.log(isIncluded)