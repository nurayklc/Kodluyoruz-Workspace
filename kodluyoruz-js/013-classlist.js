// *********** css class eklemek veya cikarmak ***************

let greeting = document.querySelector("#greeting")

greeting.classList.add("text-primary")

greeting.classList.add("title")

//birden fazla class eklemek
greeting.classList.add("new-info", "second-class", "third-class")

greeting.classList.remove("text-primary")

// css classlarını yer değiştirir
//greeting.classList.replace("text-primary", "title")

// birden fazla class silmek
greeting.classList.remove("title", "second-class")

console.log(greeting.classList)

