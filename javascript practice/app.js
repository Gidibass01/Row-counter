let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment(){
    count = count + 1
    countEl.textContent = count
    console.log(count)
}

function decrease(){
    count = count - 1
    countEl.textContent = count
    console.log(count)
}

function save(){
    countStr = count + " - "
    saveEl.textContent = saveEl.textContent + countStr
    countEl.textContent = 0
    count = 0
    console.log(count)
}

/* let welcomeEl = document.getElementById("welcome-el")
let name = "Gideon Salubi"
let greeting = "Welcome back "

welcomeEl.textContent = greeting + name */
