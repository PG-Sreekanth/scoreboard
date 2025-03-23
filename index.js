let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let homeScore = 0
let guestScore = 0

function home1() {
    homeScore += 1
    homeEl.innerText = homeScore
}

function home2() {
    homeScore += 2
    homeEl.innerText = homeScore
}

function home3() {
    homeScore += 3
    homeEl.innerText = homeScore
}

function guest1() {
    guestScore += 1
    guestEl.innerText = guestScore
}

function guest2() {
    guestScore += 2
    guestEl.innerText = guestScore
}

function guest3() {
    guestScore += 3
    guestEl.innerText = guestScore
}

function reset() {
    homeScore = 0
    guestScore = 0
    homeEl.innerText = 0
    guestEl.innerText = 0
}


