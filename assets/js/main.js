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

window.onload = function (e) {
    let scroll = this.scrollY;
    if (document.title == "recycle") {
        if (scroll >= 100) {
            navbar.style.transition = "0.4s"
            navbar.classList.add("bg-dark")
            navbar.style.opacity = "0.95"
        }
        else {
            navbar.style.opacity = "1"
            navbar.classList.remove("bg-dark")
        }
    }
    else {
        if (scroll >= 100) {
            navbar.style.opacity = "0.95"

        }
        else {
            navbar.style.opacity = "1"

        }
    }
}

// up arrow code 
let up = document.querySelector(".back-to-top")
let navbar = document.getElementsByTagName("nav")[0]
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (document.title == "recycle") {
        if (scroll >= 100) {
            navbar.style.transition = "0.4s"
            navbar.classList.add("bg-dark")
            navbar.style.opacity = "0.95"
        }
        else {
            navbar.style.opacity = "1"
            navbar.classList.remove("bg-dark")
        }
    }
    else {
        if (scroll >= 100) {
            navbar.style.opacity = "0.95"

        }
        else {
            navbar.style.opacity = "1"

        }
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

// news form validation
let newsForm = document.forms["newsForm"]
let newsAlere = document.getElementById("form-alert")
let newsSuccess = document.getElementById("news-success")

newsForm.onsubmit = function (e) {
    e.preventDefault()

    let name = newsForm.name.value
    let email = newsForm.email.value
    if (name == "") {
        newsAlere.style.visibility = "visible"
    }
    else if (email == "") {
        newsAlere.style.visibility = "visible"
    }
    else {
        newsAlere.style.visibility = "hidden"

        if (navigator.onLine) {
            Email.send({
                SecureToken: "cbb5e9c1-49d6-430b-b69e-43dc0c982621",
                To: email,
                From: "hsiwh2be872b@gmail.com",
                Subject: `Hello ${name}`,
                Body: `Hello and welocme to our companye`
            })
            newsSuccess.style.visibility = "visible"
            setTimeout(() => {
                newsSuccess.style.visibility = "hidden"

            }, 4000);
        }
        else {
            newsAlere.innerHTML = "* Connection Error Please Check Your Internet Connection and Try Again"
            newsAlere.style.visibility = "visible"
        }
    }
}

// progress
let cart = document.getElementsByClassName("services-chart")[0]
let progressBars = document.getElementsByClassName("progress-bar")


function showProgress(progressBar1) {
        const value = progressBar1.dataset.progress
        progressBar1.style.opacity = "1";
        progressBar1.style.width = value + "%"
}

function hideProgress(p) {
        p.style.opacity = 0;
        p.style.width = 0
}

window.addEventListener("scroll", () => {
    for (progress of progressBars) {
        const sectionpos = progress.getBoundingClientRect().top + 20
        const screenpos = window.innerHeight
        if (screenpos > sectionpos) {
            showProgress(progress)
        }
        else {
            hideProgress(progress)
        }
    }
    // const sectionpos = cart.getBoundingClientRect().top - 500
    // const screenpos = window.innerHeight / 2

    // if (sectionpos < screenpos) {
    //     console.log("test");
    //     showProgress()
    // }
    // else {
    //     hideProgress()
    // }
})