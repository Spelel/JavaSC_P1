let countEl = document.getElementById("count-el")

let count = 0

let saveEl = document.getElementById("save-el")

function increment() {
    count += 1 
    countEl.textContent = count
    // console.log(count)
}


function save() {
    let coun = count + " - "
    saveEl.textContent += coun
    // console.log(count)
    countEl.textContent = 0
    count = 0
}



let myPoints = 3

function add3Points() {
    myPoints  += 3
    console.log(myPoints)
}

function remove1Point() {
    myPoints -= 1
    console.log(myPoints)
}



add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()



























// let welcomeEl = document.getElementById("welcome-el")
// let name = "Arek"
// let greetings = "Hi "

// welcomeEl.innerText = greetings + name


// welcomeEl.innerText = welcomeEl.innerText + "👋"
