// Seclecting Elements
const navMenu=document.getElementById("nav--menu");
const navToggle=document.getElementById("nav--toggle");
const navClose=document.getElementById("nav--close");
const navLink=document.querySelectorAll(".nav__link");
const header=document.getElementById("header");
const scrollUp=document.getElementById('scroll-up')

/*=============== SHOW MENU ===============*/
if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add("show-menu")
    })
}

if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove("show-menu")
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
function linkAction(){
    navMenu.classList.remove("show-menu")
}

navLink.forEach(link=> link.addEventListener("click", linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){

    this.scrollY >=50 ? header.classList.add("bg-header"):
                        header.classList.remove("bg-header")
}
window.addEventListener("scroll",scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUpper(){
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll'):
    scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll",scrollUpper)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== PARALLAX ===============*/
let parallax = new Rellax('.parallax'); 

/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__village', 1.2, {opacity:0, y:100, delay:0.1})
gsap.from('.home__pine', 1.2, {opacity:0, y:150, delay:0.3})
gsap.from('.home__mountain--2', 1.2, {opacity:0, y:150, delay:0.5})
gsap.from('.home__mountain--3', 1.2, {opacity:0, y:-150, delay:0.6})
gsap.from('.home__mountain--1', 1.2, {opacity:0, y:250, delay:0.7})
gsap.from('.home__moon', 1.2, {opacity:0, y:200, delay:0.8})
gsap.from('.home__trineo', 1.2, {opacity:0, y:-200, delay:0.8})
gsap.from('.home__title', 1.2, {opacity:0, y:-60, delay:0.8})


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr= scrollReveal({
    origin: "top",
    distance: "60px",
    duration:2500,
    delay:400
})
 
sr.reveal(`.about__data, .celebrate__img`, {origin: 'right'})
sr.reveal(`.about__img, .celebrate__data`, {origin: 'left'})
sr.reveal(`.send__card`, {interval: 100})
sr.reveal(`.footer`)