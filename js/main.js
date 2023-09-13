let introTl = gsap
  .timeline({
    defaults: {
      duration: 1,
      delay: 0.1,
    },
  })
  .fromTo(
    ".introH1",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1.5,
      delay: 0.5,
      ease: "power3.in",
    }
  )
  .to(".introH1", {
    opacity: 0,
    duration: 2.5,
    delay: 1,
    ease: "power3.out",
  })
  .to(".intro", {
    duration: 0.5,
    opacity: 0,
    ease: "power3.Out",
    display: "none",
  })
  .fromTo(
    ".mainPic",
    {
      opacity: 0,
    },
    {
      duration: 1.5,
      opacity: 1,
      ease: "power4.in",
    }
  )
  .fromTo(
    [".webdevTxt", ".mainP"],
    {
      opacity: 0,
    },
    {
      duration: 1.5,
      opacity: 1,
      ease: "power4.in",
    }
  )
  .to(".webdevTxt", {
    color: "#5b78c7",
    ease: "power4.in",
    duration: 1,
  })
  .fromTo(
    ".headerSection",
    {
      display: "none",
      opacity: 0,
    },
    {
      opacity: 1,
      display: "block",
      ease: "power3.in",
    }
  )
  .fromTo(
    ".headerSection",
    {
      opacity: 1,
    },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: ".mainSection",
        start: "top+=110 top+=85",
        end: "top+=200 top+=175",
        scrub: 1,
      },
    }
  );

let aboutTl = gsap.timeline();

aboutTl
  .fromTo(
    [".profilePic", ".aboutH1"],
    {
      opacity: 0,
      yPercent: +100,
    },
    {
      opacity: 1,
      yPercent: 0,
      scrollTrigger: {
        trigger: ".txtArea",
        start: "top top",
        scrub: 1,
        //markers: true,
      },
    }
  )
  .fromTo(
    ".aboutP",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      yPercent: 0,
      scrollTrigger: {
        trigger: ".aboutSection",
        start: "top-=200 top-250",
        end: "bottom bottom",
        scrub: 1,
        //markers: true,
      },
    }
  )
  .fromTo(
    ".toTopBtn",
    {
      display: "none",
      opacity: 0,
    },
    {
      display: "block",
      duration: 0.8,
      opacity: 1,

      scrollTrigger: {
        trigger: ".aboutSection",
        start: "top-=250 top",
        scrub: 1,
        ease: "power3.Out",
        //markers: true,
      },
    }
  );

const footerTl = gsap.timeline();

footerTl.fromTo(
  ".footContainer",
  {
    opacity: 0,
    yPercent: 80,
  },
  {
    opacity: 1,
    yPercent: 0,

    scrollTrigger: {
      trigger: ".contactContainer",
      start: "top-=110 top",
      end: "bottom-=50 center",
      ease: "power4.in",
      scrub: true,
      //markers: true,
    },
  }
);

const toggleButton = document.querySelector(".toggleSvgOpen");
const toggleClose = document.querySelector(".toggleSvgClose");
const naviLinks = document.querySelector(".naviLinks");
const links = document.querySelectorAll(".navLi");
const landingLink = document.querySelector(".landingLink");
const aboutLink = document.querySelector(".aboutLink");
const projectLink = document.querySelector(".projectLink");
const contactLink = document.querySelector(".contactLink");
const toTopBtn = document.querySelector(".toTopBtn");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("svgOpen");
  toggleClose.classList.toggle("closeSvg");
  naviLinks.classList.toggle("openNav");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
  console.log("hello");
});

toggleClose.addEventListener("click", () => {
  naviLinks.classList.remove("openNav");
  toggleButton.classList.remove("svgOpen");
  toggleClose.classList.remove("closeSvg");
});

landingLink.addEventListener("click", () => {
  naviLinks.classList.remove("openNav");
  toggleButton.classList.remove("svgOpen");
  toggleClose.classList.remove("closeSvg");
});

aboutLink.addEventListener("click", () => {
  naviLinks.classList.remove("openNav");
  toggleButton.classList.remove("svgOpen");
  toggleClose.classList.remove("closeSvg");
});

projectLink.addEventListener("click", () => {
  naviLinks.classList.remove("openNav");
  toggleButton.classList.remove("svgOpen");
  toggleClose.classList.remove("closeSvg");
});

contactLink.addEventListener("click", () => {
  naviLinks.classList.remove("openNav");
  toggleButton.classList.remove("svgOpen");
  toggleClose.classList.remove("closeSvg");
});

toTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
