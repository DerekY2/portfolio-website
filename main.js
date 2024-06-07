const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// Display sidebar
if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

// Hide sidebar
if(navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

// hide mobile menu
const navLink = document.querySelectorAll('.nav__link')
const LinkAction = () => {
  const navMenu = document.getElementById('nav-menu')
  // nav__link on click, remove show-menu column
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click', LinkAction))

// blur for navbar
const blurHeader = () =>{
  const header = document.getElementById('header')
  // add class if bottom offset greater than 50 of the
  this.scrollY >= 50 ? header.classList.add('blur-header')
                     : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)