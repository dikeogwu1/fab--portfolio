// ****** DOM MANIPULATION *****
const toggler = document.querySelector('.btn-menu')
const linksWrapper = document.querySelector('.ul-wrapper')
const navWrapper = document.querySelector('.nav-wrapper')
const aboutWrapper = document.querySelector('.about-wrapper')
const hire = document.querySelector('.why-hire-me-wrapper')
const copyright = document.querySelector('.copy-date')
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
  if (window.scrollY > 70) {
    navWrapper.classList.add('fixed-nav')
  } else {
    navWrapper.classList.remove('fixed-nav')
  }

  if (window.scrollY >= 570) {
    hire.classList.add('show-hire')
    aboutWrapper.classList.add('show-about')
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
