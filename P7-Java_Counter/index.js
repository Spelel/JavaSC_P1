let countEl = document.getElementById("count-el")

let count = 0

function increment() {
    count = count + 1 
    countEl.innerText = count
    // console.log(count)
}


function save() {
    console.log(count)
}



let name = "Arek"
let greetings = "Hi, my name is "
let myGreetings = greetings + name

console.log(myGreetings)
