const navbar = document.querySelector(".navbar");
const home = document.querySelector(".home");
const toggle = document.querySelector(".toggle");
const hero = document.querySelector(".hero");
const sep = document.getElementById("seperator");
const right = document.getElementById("slide-right");
const left = document.getElementById("slide-left");
var imgs = ["background-image: url('images/patio-walls.jpg');", "background-image: url('images/fireplace.jpg');", "background-image: url('images/fountain.jpg');", "background-image: url('images/patio-lights.jpg');"];
var i = 0;
console.log(navbar);
console.log(home);
console.log(toggle);
console.log(window);
console.log(this);


document.getElementById("btn-pill").addEventListener("mouseover", function () {
    sep.classList.add("sep-wide")
});

document.getElementById("btn-pill").addEventListener("mouseout", function () {
    sep.classList.remove("sep-wide")
});

window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}
toggle.onclick = () => {
    if (home.classList.contains("js-nav-open")) {
        home.classList.remove("js-nav-open")
    } else {
        home.classList.add("js-nav-open")
    }
}

right.onclick = () => {
    if (i < 3) {
        i += 1;
        console.log(i);
        hero.style = imgs[i];
    } else {
        i = 0;
        console.log(i);
        hero.style = imgs[i];
    }
}

left.onclick = () => {
    if (i > 0) {
        i -= 1;
        console.log(i);
        hero.style = imgs[i];
    } else {
        i = 3;
        console.log(i);
        hero.style = imgs[i];
    }
}


// Scroll reveal
window.sr = ScrollReveal();


sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});