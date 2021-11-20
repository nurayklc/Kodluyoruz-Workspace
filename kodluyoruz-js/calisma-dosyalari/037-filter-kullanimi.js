// Filter Kullanimi

const PRODUCTS = [
  "Laptop",
  "Phone",
  "Speaker",
  "Desktop PC",
  "Server",
  "Mouse",
  "Keyboard",
];

const newProducts = PRODUCTS.filter((product) => product.length > 5);

console.log(newProducts);

const users = [
  { fullName: "Mehmet Veli", isActive: false },
  { fullName: "Ali Duran", isActive: true },
  { fullName: "Ahmet Yılmaz", isActive: true },
  { fullName: "Oğuz Şahin", isActive: false },
];

//const activeUsers = users.filter(item => item.isActive === true)
const activeUsers = users.filter((item) => item.isActive);
console.log(activeUsers);

// Sorular 
const person = [
  {
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
  },
  {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
  },
];

const ageControl = person.filter(item => item.age > 30)

console.log(ageControl)

const jsControl = person.filter(item => item.languages.includes("JavaScript"))

console.log(jsControl)
