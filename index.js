let countEl1= document.getElementById("count-el-1")
let countEl2= document.getElementById("count-el-2")

let count = 0

function incrementhome1() {
    count = count + 1
    countEl1.innerText = count
}

function incrementhome2() {
    count = count + 2
    countEl1.innerText = count
}

function incrementhome3() {
    count = count + 3
    countEl1.innerText = count
}

function increment() {
    count = count + 1
    countEl2.innerText = count
}

function increment2() {
    count = count + 2
    countEl2.innerText = count
}

function increment3() {
    count = count + 3
    countEl2.innerText = count
}

// New game button

function newGame() {
    homeScore = 0
    awayScore = 0

    count = document.getElementById("count-el-1")
    countEl1.textContent = homeScore

    count = document.getElementById("count-el-2")
    countEl2.textContent = awayScore;

    console.log("New game!")
}