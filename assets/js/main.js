const logo = document.getElementById("inframe-logo")
logo.addEventListener("click", () => {
    window.location.reload();
})
logo.onmouseover = function () {
    logo.innerHTML = "INFrame";
    logo.style.transition = "all 1.2s ease-in-out";
}
logo.onmouseout = function () {
    logo.innerHTML = "IN";
    logo.style.transition = "all 1.2s ease-in-out";
}

// mack up arrow 
let up = document.querySelector(".back-to-top")
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll >= 767) {
        up.style.visibility = "visible"
        console.log("a7a");
    }
    else {
        up.style.visibility = "hidden"
        console.log("a7aasdas");

    }
});

// mange slider code
var swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 20,
    direction: 'horizontal',
    loop: true,
    loopFillGroupWithBlank: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,

        },
        520: {
            slidesPerView: 2,
            slidesPerGroup: 2,

        },
        990: {
            slidesPerGroup: 3,
            slidesPerView: 3,
        },
    },
});

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry);
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show')
//         }
//         else {
//             entry.target.classList.remove('show')
//         }
//     })
// })

// const hiddenElements = document.querySelectorAll('.hidden')
// hiddenElements.forEach((el) => observer.observe(el))

let observerr = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
        else {
            entry.target.classList.remove('show')
        }
    })
})

let hidden = document.querySelectorAll('.hidden')
hidden.forEach((el) => observerr.observe(el))

let hude = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('shw')
        }
        else {
            entry.target.classList.remove('shw')
        }
    })
})

let hide = document.querySelectorAll('.hide')
hide.forEach((el) => hude.observe(el))


console.log("asdasdadas");