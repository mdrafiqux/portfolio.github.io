const filter_btns = document.querySelectorAll(".filter-btn")
const skills_wrap = document.querySelector(".skills")
const skills_bars = document.querySelectorAll(".skill-progress")
// const records_wrap = document.querySelector(".records")
// const records_numbers = document.querySelectorAll(".number")
// const footer_input = document.querySelector(".footer-input")
const hamburger_menu = document.querySelector(".hamburger-menu")
const navbar = document.querySelector("header nav")
const links = document.querySelectorAll(".links a")

// footer_input.addEventListener("focus", () => {
//   footer_input.classList.add("focus");
// });

// footer_input.addEventListener("blur", () => {
//   if (footer_input.value != "") return;
//   footer_input.classList.remove("focus");
// });

function closeMenu() {
  navbar.classList.remove("open")
  document.body.classList.remove("stop-scrolling")
}

hamburger_menu.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open")
    document.body.classList.add("stop-scrolling")
  } else {
    closeMenu()
  }
})

links.forEach((link) => link.addEventListener("click", () => closeMenu()))

filter_btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    filter_btns.forEach((button) => button.classList.remove("active"))
    btn.classList.add("active")

    let filterValue = btn.dataset.filter

    $(".grid").isotope({ filter: filterValue })
  })
)

$(".grid").isotope({
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
  transitionDuration: "0.6s",
})

window.addEventListener("scroll", () => {
  skillsEffect()
  //countUp()
})

function checkScroll(el) {
  let rect = el.getBoundingClientRect()
  if (window.innerHeight >= rect.top + el.offsetHeight) return true
  return false
}

function skillsEffect() {
  if (!checkScroll(skills_wrap)) return
  skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress))
}

// function countUp() {
//   if (!checkScroll(records_wrap)) return
//   records_numbers.forEach((numb) => {
//     const updateCount = () => {
//       let currentNum = +numb.innerText
//       let maxNum = +numb.dataset.num
//       let speed = 100
//       const increment = Math.ceil(maxNum / speed)

//       if (currentNum < maxNum) {
//         numb.innerText = currentNum + increment
//         setTimeout(updateCount, 1)
//       } else {
//         numb.innerText = maxNum
//       }
//     }

//     setTimeout(updateCount, 400)
//   })
// }

var mySwiper = new Swiper(".swiper-container", {
  speed: 1100,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
})

let i = 0 // current slide
let j = 4 // total slides

const dots = document.querySelectorAll(".dot-container button")
const images = document.querySelectorAll(".image-container img")

function next() {
  document.getElementById("content" + (i + 1)).classList.remove("active")
  i = (j + i + 1) % j
  document.getElementById("content" + (i + 1)).classList.add("active")
  indicator(i + 1)
}

function prev() {
  document.getElementById("content" + (i + 1)).classList.remove("active")
  i = (j + i - 1) % j
  document.getElementById("content" + (i + 1)).classList.add("active")
  indicator(i + 1)
}

function indicator(num) {
  dots.forEach(function (dot) {
    dot.style.backgroundColor = "transparent"
  })
  document.querySelector(
    ".dot-container button:nth-child(" + num + ")"
  ).style.backgroundColor = "#8052ec"
}

function dot(index) {
  images.forEach(function (image) {
    image.classList.remove("active")
  })
  document.getElementById("content" + index).classList.add("active")
  i = index - 1
  indicator(index)
}
