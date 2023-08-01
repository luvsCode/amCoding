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
        scrub: 1.5,
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
        scrub: 1,
        //markers: true
    }
})

gsap.fromTo('.mainTools',
{
    //x: -200,
    //overflow: 'hidden',
    opacity: 0,
},
{
    //x: 0,
    opacity: 1,
    scrollTrigger:
    {
        trigger: '.abtBox2',
        start: 'top top+=40',
        end: 'bottom+=100 center',
        scrub: 1,
        //markers: true
    }
})

gsap.fromTo('.supTools',
{
    //x: +200,
    //overflow: 'hidden',
    opacity: 0,
},
{
    //x: 0,
    opacity: 1,
    scrollTrigger:
    {
        trigger: '.abtBox2',
        start: 'top top+=40',
        end: 'bottom+=100 center',
        scrub: 1,
        //markers: true
    }
})

gsap.set(".photo:not(:first-child)", {opacity:0, scale:0.5})

const animation = gsap.to(".photo:not(:first-child)", {
	opacity:1, scale:1, duration:1, stagger:1
})

ScrollTrigger.create({
	trigger:".projectCards",
	start:"top top",
	end:"bottom bottom",
	pin:".right",
	animation: animation,
	scrub:true,
    snap: 0.5,
	markers:true
})


/**
 * const cards = gsap.utils.toArray('.cards');
const cardAmount = cards.length;

gsap.fromTo(cards,
  {
    yPercent: +(50 * (cardAmount +1)),
    //opacity: 0,
  }, {
    //opacity: 1,
  ease: 'none',
  duration: cards.length,
  yPercent: -(100 * (cardAmount -1)),
  scrollTrigger: {
    trigger: '.projectContainer',
    start: 'center center',
    end: '+=' + 50 * cardAmount + '%',
    scrub: true,
    pin: '.projectContainer',
    //snap: 1 / (cardAmount - 1),
    markers: true
  }
})

 */
 
/**\
 * 
 *  gsap.fromTo('.cards',
{
  y: +200,
  //overflow: 'hidden',
  //opacity: 0.5,
},
{
  y: 0,
  //opacity: 1,
  ease: 'none',
  scrollTrigger:
  {
    pin: '.projectContainer',
    trigger: '.projectContainer',
    start: 'top top',
    scrub: 1,
    //stagger: 1,
    //markers: true,

  }

}) 
 * 
 * 
 * const cardBox = document.querySelectorAll('.cards');

cardBox.forEach((cards) =>
{
  gsap.fromTo(cards,
    {
      //opacity: 1,
      y: 0,
    },
    { 
      //opacity:0,
      y:-200, 
      ease: 'none',
      scrollTrigger:
      {
    pin: '.projectCards',
    trigger: '.projectCards',
        start: 'top top',
        scrub: 1,
        //end: 'bottom bottom',
        toggleActions: 'play none none reverse',
        markers: true
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


