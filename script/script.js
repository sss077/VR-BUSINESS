let services = document.querySelector(".services")

window.addEventListener("scroll", () => {

    fadeRight(services, 2)
})

function fadeRight(section, coordinate) {
    let fadeRight = section.querySelectorAll(`.fade-right`)
    fadeRight.forEach(fadeRights => {
        const speed = +fadeRights.getAttribute("data-speed")
        fadeRights.style.transition = `${speed}ms`
        if (window.scrollY >= section.offsetTop - section.offsetHeight / coordinate) {
            fadeRights.classList.add("active")
        } else {
            fadeRights.classList.remove("active")
        }
    });
}

let projectImg = document.querySelector('.projects__img');
let projectSect = document.querySelector('.projects');   

window.addEventListener("scroll", function project() {
    if (window.scrollY >= projectSect.offsetTop - projectSect.offsetHeight / 2 ) {
        projectImg.classList.add("active")
    }
    else{
        projectImg.classList.remove("active")

    }
  })

let working = document.querySelector('.working');
let workingImg = document.querySelector('.working__img');
 window.addEventListener("scroll", function work(){
     if (window.scrollY >= working.offsetTop - working.offsetHeight / 2) {
         workingImg.classList.add("active")
     }
     else {
         workingImg.classList.remove("active")

     }
 })

let card = document.querySelectorAll(".team__card")

card.forEach(cards => {
    cards.addEventListener("mousemove", rotate)
    cards.addEventListener("mouseout", rotateNone)
});

function rotate(e) {
    const cardItem = this.querySelector(".card")
    const halfHeight = cardItem.offsetHeight / 2
    cardItem.style.transform = `rotateX(${(halfHeight - e.offsetY) / 10}deg) rotateY(${-(halfHeight - e.offsetX) / 10}deg)`
}

function rotateNone() {
    const cardItem = this.querySelector(".card")
    cardItem.style.transform = `rotate(0)`
}


