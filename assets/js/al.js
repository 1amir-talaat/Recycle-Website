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

