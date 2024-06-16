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

// Email contact
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
  e.preventDefault()

  // serviceID - templateID - #form - publicKey
  emailjs.sendForm('service_eo4ehh2','template_9j836ji','#contact-form','CLPNM2RhwXply7NHR')
    .then(() =>{
      // Display notification - sent message
      contactMessage.textContent = 'Sent successfully ✅'

      // Remove notification
      setTimeout(() =>{
        contactMessage.textContent = ''
      }, 5000)

      // Clear inputs
      contactForm.reset();
    }, () => {
      // Error notification
      contactMessage.textContent = 'Message not sent (server error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)

// Auto-scroll to top of page
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  // When the scroll is higher than 350 viewport height, add scroll-to-top option
  this.scrollY >=350 ? scrollUp.classList.add('show-scroll')
                     : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// Sections
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  const scrollDown = window.scrollY

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop -58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav__menu a[href*='+sectionId+']')

    if(scrollDown>sectionTop && scrollDown <= sectionTop + sectionHeight){
      sectionsClass.classList.add('active-link')
      console.log("active-link");
    }else{
      sectionsClass.classList.remove('active-link')
      console.log("NO active-link");
    }
  })
}

window.addEventListener('scroll', scrollActive)