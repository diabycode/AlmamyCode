function setResponsive () {
    if (window.innerWidth <= 1000) {
        document.querySelector(".navbar.ext").classList.remove("hidden")
        document.querySelector(".navbar.int").classList.add("hidden")
    } else {
        document.querySelector(".navbar.ext").classList.add("hidden")
        document.querySelector(".navbar.int").classList.remove("hidden")
    }

    if (window.innerWidth <= 750) {
        document.querySelector("body > main > div > div.navbar.ext > nav > div").classList.remove("hidden")
    } else {
        document.querySelector("body > main > div > div.navbar.ext > nav > div").classList.add("hidden")
    }
}

function showMenu () {
    let navbar = document.querySelector(".navbar.ext")
    navbar.classList.toggle("show")
        
    if (navbar.classList.contains("show")) {
        document.querySelector("body > main > div > div.navbar.ext > nav > div > svg:nth-child(1)")
            .classList.add("hidden")
        document.querySelector("body > main > div > div.navbar.ext > nav > div > svg:nth-child(2)")
            .classList.remove("hidden")
    } else {
        document.querySelector("body > main > div > div.navbar.ext > nav > div > svg:nth-child(1)")
            .classList.remove("hidden")
        document.querySelector("body > main > div > div.navbar.ext > nav > div > svg:nth-child(2)")
            .classList.add("hidden")
    }

    document.querySelector("body > main > div > div.navbar.ext.show > nav > div > svg:nth-child(2)")
        .addEventListener("click", showMenu)
}

window.addEventListener("resize", setResponsive)
window.addEventListener("load", setResponsive)

// show menu
document.querySelector("body > main > div > div.navbar.ext > nav > div > svg")
    .addEventListener("click", showMenu)

// go to top
document.querySelector("main > svg").addEventListener("click", () => {
    window.scrollTo({
        top: 0
    })
}) 

// scroll listening 
window.addEventListener("scroll", () => {
    if (window.scrollY >= 400) {
        // remove hidden to show
        if (document.querySelector("main > svg").classList.contains("hidden")){
            document.querySelector("main > svg").classList.remove("hidden")   
        }
    } else {
        if (!document.querySelector("main > svg").classList.contains("hidden")) {
            document.querySelector("main > svg").classList.add("hidden")
        }
    }
})


