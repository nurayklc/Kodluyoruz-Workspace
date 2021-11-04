
let greeting = document.querySelector("#greeting")
greeting.addEventListener("click", domClick)

function domClick() {
    console.log("Tiklandi...")
    //console.log(this.innerHTML = "tiklandigi icin bilgi degisti.")
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
}

let info = document.querySelector("#info")
info.addEventListener("mouseover", domMouse)

function domMouse() {
    this.style.color == "blue" ? this.style.color = "gray" : this.style.color = "blue"
}