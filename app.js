// ****** DOM MANIPULATION *****
const toggler = document.querySelector('.btn-menu')
const linksWrapper = document.querySelector('.ul-wrapper')
const navWrapper = document.querySelector('.nav-wrapper')
const about = document.getElementById('about')
const project = document.getElementById('project')
const aboutWrapper = document.querySelector('.about-wrapper')
const hire = document.querySelector('.why-hire-me-wrapper')
const copyright = document.querySelector('.copy-date')
const project1 = document.querySelector('.project-1')
const project2 = document.querySelector('.project-2')
const project3 = document.querySelector('.project-3')
const nav = document.querySelector('.nav')

// select links
const scrollLinks = document.querySelectorAll('.scroll-link')

// ***** EVENT LISTENERS *****
// *menu*toggler*
toggler.addEventListener('click', () => {
  linksWrapper.classList.toggle('show-links')
})

// *fixed*nav*
window.addEventListener('scroll', () => {
  const navHeight = navWrapper.getBoundingClientRect().height

  if (window.scrollY > 70) {
    navWrapper.classList.add('fixed-nav')
  } else {
    navWrapper.classList.remove('fixed-nav')
  }

  if (window.scrollY >= about.offsetTop - navHeight) {
    hire.classList.add('show-hire')
    aboutWrapper.classList.add('show-about')
  }

  if (window.scrollY >= project.offsetTop - navHeight) {
    project1.classList.add('show-project-1')
    project2.classList.add('show-project-2')
    project3.classList.add('show-project-3')
  }

  if (window.scrollY >= project2.offsetTop - navHeight - 100) {
    project2.classList.add('show-p-2')
  }
  if (window.scrollY >= project3.offsetTop - navHeight - 100) {
    project3.classList.add('show-p-3')
  }
})

// ATENTION !!!!!!!!
// this logic applies to all link
// ********** smooth scroll ************
scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // prevent default
    e.preventDefault()
    // navigate to specific spot
    const id = e.currentTarget.getAttribute('href').slice(1)
    const element = document.getElementById(id)

    const navHeight = navWrapper.getBoundingClientRect().height
    const parentHeight = nav.getBoundingClientRect().height
    const containerHeight = linksWrapper.getBoundingClientRect().height
    const fixedNav = navWrapper.classList.contains('fixed-nav')
    let position = element.offsetTop - navHeight

    if (!fixedNav) {
      position = position - parentHeight * 0 + 16
    }

    if (navHeight > 82) {
      position = position + containerHeight
    }

    window.scrollTo({
      left: 0,
      top: position,
    })
    // close
    linksWrapper.classList.remove('show-links')
  })
})
// copyright date
copyright.textContent = new Date().getFullYear()
// Gsap animation !!!
// Gsap scrolltriggerPlugin

gsap.registerPlugin(ScrollTrigger)
gsap.fromTo(
  `.achiev-1`,
  {
    y: 200,
    duration: 3,
  },
  {
    y: 0,
    scrollTrigger: {
      trigger: `.achiev-1`,
      toggleActions: 'restart reverse restart none ',
    },
  }
)
gsap.fromTo(
  `.achiev-2`,
  {
    y: 200,
    duration: 3,
  },
  {
    y: 0,
    scrollTrigger: {
      trigger: `.achiev-2`,
      toggleActions: 'restart reverse restart none ',
    },
  }
)
gsap.fromTo(
  `.achiev-3`,
  {
    y: 200,
    duration: 3,
  },
  {
    y: 0,
    scrollTrigger: {
      trigger: `.achiev-3`,
      toggleActions: 'restart reverse restart none ',
    },
  }
)
