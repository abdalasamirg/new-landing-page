let button = document.querySelector(".threeDotes")
let links = document.querySelector(".linkssm")
let icons = document.querySelector(".icons")
let second = document.querySelector(".second")
let thered = document.querySelector(".thered")
let intro = document.querySelector(".intro")
let p1 = document.querySelector(".p1")
let p2 = document.querySelector(".p2")
let p3 = document.querySelector(".p3")
let track = document.querySelector(".track")
let ps = document.querySelectorAll("p")
let about = document.querySelector(".about")
let istSpan = document.querySelector(".istSpan")

setInterval(() => {
    if (window.innerWidth <= 853) {
        p1.style.maxWidth = "300px"
        p1.style.minWidth = "300px"
        p2.style.maxWidth = "300px"
        p2.style.minWidth = "300px"
        p3.style.maxWidth = "300px"
        p3.style.minWidth = "300px"
        about.style.maxWidth = "400px"
        istSpan.style.maxWidth = "200px"
        about.style.textAlign = "center"

    }
    if (window.innerWidth <= 1068) {

    } else {
        links.style.display = "none"
        button.textContent = "0 0 0"
    }

}, 100);
