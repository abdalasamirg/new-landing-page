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
let som = document.querySelectorAll(".som")

setInterval(() => {
    if (window.innerWidth <= 853) {
        p1.style.maxWidth = "300px"
        p1.style.minWidth = "300px"
        p2.style.maxWidth = "300px"
        p2.style.minWidth = "300px"
        p3.style.maxWidth = "300px"
        p3.style.minWidth = "300px"
        som.style.marginLeft = "300px"

    }
    if (window.innerWidth <= 1068) {
        button.onclick = function() {

            links.style.display = "block"
            button.textContent = "*"

        }
    } else {
        links.style.display = "none"
        button.textContent = "0 0 0"
    }

}, 100);