const logo = document.getElementById("inframe-logo")
logo.addEventListener("click", () => {
    window.location.reload();
})

logo.onmouseover = function () {
    logo.style.transition = "all 1.2s ease-in-out";
    logo.innerHTML = "INFrame";

}
logo.onmouseout = function () {
    logo.style.transition = "all 1.2s ease-in-out";
    logo.innerHTML = "IN";
}

// up arrow code 
let up = document.querySelector(".back-to-top")
let navbar = document.getElementsByTagName("nav")[0]
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll >= 100) {
        navbar.style.transition = "0.4s"
        navbar.classList.add("bg-dark")
    }
    else {
        navbar.classList.remove("bg-dark")

    }
    if (scroll >= 767) {
        up.style.visibility = "visible"
    }
    else {
        up.style.visibility = "hidden"
    }
});

toggler = document.getElementById("toggler")
toggler.onclick = function () {
    navbar.classList.add("bg-dark")
}

// slider code
var swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 20,
    speed: 1000,
    autoplay: {
        delay: 4000,
    },
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
