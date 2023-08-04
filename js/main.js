/**
 * function mousePos(e)
{
let x = e.clientX;
  let y = e.clientY;
  //mousePic.style.left = x;
  //mousePic.style.top = y;
  console.log(x,y);
}

//let mousePic = document.getElementById('circularcursor')

window.addEventListener('mousemove', function(e) {
    
    mousePos(e);
  });
 */

  window.addEventListener('mousemove', function(e)
  {
      let mousePic = document.getElementById('circularcursor')
      let x = e.pageX - 12;
      let y = e.pageY - 12;
      mousePic.style.left = x + 'px';
      mousePic.style.top = y + 'px';
      console.log(x,y)
  })
  
   
  
  let introTl = gsap.timeline({
      defaults:
      {
          duration: 1,
          delay: 0.1
      }
  });
  introTl.fromTo('.introH1',
  {
      opacity: 0
  },
  {
      opacity: 1,
      duration: 1.5,
      //delay: 0.5,
      ease: 'power3.in'
  })
  introTl.to('.introH1',
  {
      opacity: 0,
      duration: 2.5,
      delay: 1,
      ease: 'power3.out'
  })
  introTl.to('.intro',
  {
      duration: 0.5,
      opacity: 0,
      ease: 'power3.Out',
      display: 'none'
  })
  introTl.fromTo(['.webdevTxt', '.mainP'],
  {
      opacity: 0
  },
  {
      duration: 1.5,
      opacity: 1,
      //stagger: 1,
      //delay: 0,
      ease: 'power4.in'
  })
  introTl.fromTo('.headerSection',
  {
      display: 'none',
      opacity: 0
  },
  {
      opacity: 1,
      display: 'block',
      ease: 'power3.in',
      
  })
  introTl.fromTo('.headerSection',
  {
      opacity: 1
  },
  {
      opacity: 0,
      scrollTrigger:
      {
          trigger: '.mainSection',
          start: 'top+=80 top+=75',
          end: 'top+=160 top+=145',
          scrub: 1,
          //opacity: 0,
          //markers: true
      }
  }, '<')
  introTl.to('.webdevTxt',
  {
      color: '#5b78c7',
      ease: 'sine',
      duration: 0.5
  })
  
  
  
  let aboutTl = gsap.timeline();
  
  aboutTl.fromTo(['.profilePic','.aboutH1'],
  {
      opacity: 0,
      yPercent: +100
  },
  {
      opacity: 1,
      yPercent: 0,
      //zIndex: 1,
      scrollTrigger:
      {
          trigger: '.mainP',
          start: 'top+=80 top',
          //end: 'bottom bottom',
          scrub: 1,
          //snap: 1
          //markers: true
      }
  })
  aboutTl.fromTo('.aboutP',
  {
      opacity: 0,
      //yPercent: 50
  },
  {
      opacity: 1,
      yPercent: 0,
      scrollTrigger:
      {
          trigger: '.box1',
          start: 'top-=100 top',
          end: 'bottom bottom',
          scrub: 1,
          //markers: true
      }
  })
  
  let projectTl = gsap.timeline();
  
  projectTl.fromTo(['.projectH1', '.svgPack'],
  {
      opacity: 0,
      yPercent: 50
  },
  {
      opacity: 1,
      yPercent: 0,
  
      scrollTrigger:
      {
          trigger: '.aboutP',
          start: 'top+=50 top',
          //end: 'bottom bottom',
          ease: 'power4.in',
          //animation: animateTools,
          scrub: true,
          //markers: true
      }
  })
  
  
  gsap.set(".photo:not(:first-child)", {opacity:0, xPercent: +100})
  
  const animation = gsap.to(".photo:not(:first-child)", {
    opacity:1, xPercent: 0, duration:1, stagger:1.5
  })
  
  ScrollTrigger.create({
    trigger:".projectCards",
    start:"top top",
    end:"bottom bottom",
    pin:".right",
    animation: animation,
    scrub:true,
      //snap: 0.5,
    //markers:true
  })
  
  const footerTl = gsap.timeline();
  
  footerTl.fromTo('.footContainer',
  {
      opacity: 0,
      yPercent: 80
  },
  {
      opacity: 1,
      yPercent: 0,
  
      scrollTrigger:
      {
          trigger: '.contactContainer',
          start: 'top-=100 top',
          end: 'bottom center',
          ease: 'power4.in',
          //animation: animateTools,
          scrub: true,
          //markers: true
      }
  })
  
  
  
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
  
  