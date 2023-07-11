//gsap.registerPlugin(ScrollTrigger)

//function init()
//{

/**
 * gsap.to('.txtarea h1',
{
  autoAlpha: 0,
  ease:'none',
  scrollTrigger:
  {
    trigger: '.landing .landingSpan',
    start: 'top bottom-=10%',
    pin: true,
    scrub: true,
    //markers: true
  }
})
 */
const mainBody = document.querySelector('body');
let landingAni = gsap.timeline();

landingAni.fromTo('.landingSpan',
{
  opacity: 0,
  //y:-20
},
{
  opacity: 1,
  duration: 1,
  ease: "bounce.out"
})

landingAni.fromTo('.txtarea',
{
    opacity: 0
},
{
    opacity: 1,
    ease: 'none',
    duration: 1
})

landingAni.fromTo('.navContainer',
{
    opacity: 0
},
{
    delay: 0.5,
    opacity: 1,
    ease: 'power4.out',
    duration: 3
})

landingAni.to('.landingSpan',
{
  color:'#5b78c7',
  scrollTrigger:
  {
    trigger: '.txtarea',
    start: 'top top+=100',
    end: 'bottom+=250 center',
    //opacity: 0,
    pin: true,
    scrub: true,
    //markers: true
  }
})

landingAni.to('.txtarea h1',
{
  opacity: 0,
  scrollTrigger:
  {
    trigger: '.txtarea',
    start: 'top top+=150',
    end: 'bottom center',
    //toggleActions: 'play none none reverse',
    scrub: true,
    //markers: true
  }
})

gsap.fromTo('.abtBox2',
{
    opacity: 0
},
{
    opacity: 1,
    duration: 1,
    scrollTrigger:
    {
        trigger: '.svgContainer',
        start: 'top top+=100',
        end: 'bottom center',
        scrub: 2,
        //markers: true
    }
})

gsap.fromTo('.projectTxt',
{
    opacity: 0
},
{
    opacity: 1,
    //duration: 2,
    scrollTrigger:
    {
        trigger: '.abtBox2',
        start: 'top top+=50',
        end: 'bottom center',
        scrub: 2,
        //markers: true
    }
})

gsap.fromTo('.mainTools',
{
    x: -200
},
{
    x: 0,
    scrollTrigger:
    {
        trigger: '.abtBox2',
        start: 'top top+=40',
        end: 'bottom+=100 center',
        scrub: 2,
        //markers: true
    }
})

gsap.fromTo('.supTools',
{
    x: +200
},
{
    x: 0,
    scrollTrigger:
    {
        trigger: '.abtBox2',
        start: 'top top+=40',
        end: 'bottom+=100 center',
        scrub: 2,
        //markers: true
    }
})

gsap.fromTo('.cards',
{
  x: +700,
  //opacity: 0,
},
{
  x: 0,
  //opacity: 1,
  ease: 'none',
  scrollTrigger:
  {
    pin: '.projectContainer',
    trigger: '.projectContainer',
    start: 'top top',
    scrub: 1,
    markers: true,

  }

})

/**
 * const cardBox = document.querySelectorAll('.cards');

cardBox.forEach((cards) =>
{
  gsap.from(cards,
    {
      opacity: 0,
      //yPercent: 3,
      scrollTrigger:
      {
        trigger: cards.querySelector('.cardDisc'),
        start: 'top bottom-=250',
        end: 'bottom bottom',
        toggleActions: 'play none none reverse',
        //markers: true
      }
    })
})
 */



/**
 * let tl = gsap.timeline();

  tl.to('.landingSpan', {duration: 2,
     ScrollTrigger: {
      trigger: '.aboutContainer',
      //start: 'top top', //trigger starts at the top of the element to the top of the vp
    //end: 'bottom bottom',
    //pin: true,
    //pinSpacing: false,
    scrub: true,
    markers: true
    
    
  }})
 */


//}

//window.addEventListener('load', function()
//{
//  init();
//})



/*

const timeline = gsap.timeline({
  duration: 1
  //pause: true
})

timeline
  .fromTo(
    '.section',
    {
      //trigger: section,
      start: 'top top',
      pin: true,
      pinSpacing: false
    }
  )*/

const toggleButton = document.querySelector(".toggleSvg");
const naviLinks = document.querySelector(".naviLinks");
const links = document.querySelectorAll(".navLi");
const landingLink = document.querySelector('.landingLink');
const aboutLink = document.querySelector('.aboutLink');
const projectLink = document.querySelector('.projectLink');
const contactLink = document.querySelector('.contactLink');

let menuTl = gsap.timeline({paused: true});



toggleButton.addEventListener("click", () => {
  naviLinks.classList.toggle("openNav");
  links.forEach(link =>{
    link.classList.toggle('fade');
  })
  console.log('hello')

});

landingLink.addEventListener('click', () =>{
    naviLinks.classList.remove("openNav");
})

aboutLink.addEventListener('click', () =>{
    naviLinks.classList.remove("openNav");
})

projectLink.addEventListener('click', () =>{
    naviLinks.classList.remove("openNav");
})

contactLink.addEventListener('click', () =>{
    naviLinks.classList.remove("openNav");
})


