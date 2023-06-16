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
gsap.fromTo(['.landingSpan', '.txtarea'],
{
  opacity: 0,
  y:-20
},
{
  opacity: 1,
  y: 0,
  //duration: 0.2,
  ease: 'none',
  delay: 0.5,
  stagger: 2
})

gsap.to('.landingSpan',
{
  color:'#5b78c7',
  scrollTrigger:
  {
    trigger: '.txtarea',
    start: 'top top+=100',
    end: 'bottom+=300 center',
    //opacity: 0,
    pin: true,
    scrub: true,
    //markers: true
  }
})

gsap.to('.txtarea h1',
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

const cardBox = document.querySelectorAll('.cards');

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
        end: 'top center',
        toggleActions: 'play none none reverse',
        //markers: true
      }
    })
})



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


