// const SplitText = require('./splitText');

gsap.registerPlugin(ScrollTrigger);

gsap.set(".cursorFollower", { xPercent: -50, yPercent: -50 });
gsap.set(".cursorDot", { xPercent: -50, yPercent: -50 });

let xTo = gsap.quickTo(".cursorFollower", "x", {
    duration: 0.6,
    ease: "power5.out",
  }),
  yTo = gsap.quickTo(".cursorFollower", "y", {
    duration: 0.6,
    ease: "power5.out",
  });
let xToDot = gsap.quickTo(".cursorDot", "x", { duration: 0.001 }),
  yToDot = gsap.quickTo(".cursorDot", "y", { duration: 0.001 });

window.addEventListener("mousemove", (e) => {
  xTo(e.clientX);
  yTo(e.clientY);
  xToDot(e.clientX);
  yToDot(e.clientY);
});

// const childSplit = new SplitText(".hero-head", {
//   type: "lines",
//   linesClass: "aki_wrapper aki__word",
// });
// const parentSplit = new SplitText(".hero-head", {
//   // type: "lines",
//   linesClass: "aki_wrapper aki__line",
// });
// console.log(childSplit);
// gsap.from(".aki__word", {
//   duration: 2,
//   yPercent: 150,
//   ease: "power4",
//   // stagger: 0.1,
// });

// gsap.from(".projects", {
//   y: 300,
//   rotate: -10,
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".image",
//     start: "top 75%",
//     end: "40% 30%",
//     ease: "power2.out",
//     // markers: true,
//   },
// });

// gsap.from(".projects", {
//   x: 150,
//   scrollTrigger: {
//     trigger: ".image",
//     start: "top bottom",
//     end: "top top",
//     // markers: true,
//     scrub: 1,
//   },
// });

// gsap.from(".hero-main", {
//   opacity: 0,
//   y: 100,
//   transformOrigin: "0% 100%",
//   rotate: 5,
//   skewX: 5,
//   duration: 1,
// });

// gsap.from([".hero-sub", ".hero-para"], {
//   opacity: 0,
//   y: 100,
//   transformOrigin: "0% 100%",
//   rotate: 5,
//   skewX: 5,
//   duration: 1,
//   // delay: 0.2,
// });

// gsap.fromTo(
//   ".content-container",
//   {
//     opacity: 1,
//   },
//   {
//     scrollTrigger: {
//       trigger: ".hero",
//       scrub: 1,
//       start: "bottom 100%",
//       end: "bottom 40%",
//       // markers: true,
//       toggleActions: "play pause reverse complete",
//     },
//     opacity: 0,
//     transformOrigin: "100% 100%",
//     rotate: 8,
//     skewX: 8,
//     duration: 1,
//   }
// );

// gsap.timeline().from(".hero-main .span", 1, {
//   y: 100,
//   ease: "power4.out",
//   delay: 1,
//   stagger: {
//     amount: 0.5,
//   },
// });

gsap
  .timeline({
    scrollTrigger: {
      trigger: "body",
      scrub: 2,
      start: "top top",
      end: "bottom bottom",
    },
  })
  .to(".logo-svg", {
    rotation: 360,
    duration: 1,
    ease: "none",
  });

// gsap.from(".project-index", {
//   y: 200,
//   scrollTrigger: {
//     trigger: ".project-index",
//     start: "top bottom",
//     end: "top top",
//     // markers: true,
//     scrub: 1,
//   },
// });

// gsap.from(".image", {
//   scrollTrigger: {
//     trigger: ".project-index",
//     start: "top bottom",
//     end: "top top",
//     // markers: true,
//     scrub: 1,
//   },
// });

// gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: ".image",
//       scrub: true,
//       start: "50% 100%",
//       end: "50% 50%",
//       // markers: true,
//     },
//   })
//   .to(".image", {
//     x: 100,
//     y: 30,
//     ease: "power5.in",
//   });

const menuItems = document.querySelectorAll(".hero-texts li");
document.getElementById("hero-texts").addEventListener("mouseenter", () => {
  menuItems.forEach((item, index) => {
    const hoverElement = item.querySelector(".menu-item-active");
    const el = item.querySelector(".menu-item");
    gsap.to(hoverElement, {
      yPercent: -60,
      duration: 0.5,
      ease: "power5.in",
      delay: index * 0.1,
    });
    gsap.to(el, {
      yPercent: -60,
      duration: 0.5,
      ease: "power5.in",
      delay: index * 0.1,
    });
  });
});
document.getElementById("hero-texts").addEventListener("mouseleave", () => {
  menuItems.forEach((item, index) => {
    const hoverElement = item.querySelector(".menu-item-active");
    const el = item.querySelector(".menu-item");
    gsap.to(hoverElement, {
      yPercent: 100,
      duration: 0.5,
      ease: "power5.out",
      delay: (menuItems.length - index - 1) * 0.1,
    });
    gsap.to(el, {
      yPercent: 0,
      duration: 0.5,
      ease: "power5.out",
      delay: (menuItems.length - index - 1) * 0.1,
    });
  });
});
// GSDevTools.create();

const videos = document.querySelectorAll(".image video");

videos.forEach((video) => {
  video.addEventListener("mouseenter", () => {
    video.play();
  });

  video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});

const themeBtn = document.getElementById("themeBtn");
const cursorFollower = document.getElementById("cursorFollower");
const cursorDot = document.getElementById("cursorDot");
const themeProvider = document.getElementById("themeProvider");
const heroSection = document.getElementById("hero-texts");

themeBtn.addEventListener("click", () => {
  themeProvider.classList.toggle("dark");
  themeProvider.className.split(" ").includes("dark")
    ? (cursorDot.innerText = "Light Mode")
    : (cursorDot.innerText = "Dark Mode");
});

themeBtn.addEventListener("mouseenter", () => {
  gsap.to(cursorDot, { scale: 12, duration: 0.3, ease: "power3.out" });
  gsap.to(cursorFollower, { opacity: 0, scale: 0, duration: 0.3 });
  themeProvider.className.split(" ").includes("dark")
    ? (cursorDot.innerText = "Light Mode")
    : (cursorDot.innerText = "Dark Mode");
});

themeBtn.addEventListener("mouseleave", () => {
  gsap.to(cursorDot, { scale: 1, duration: 0.3, ease: "power3.out" });
  gsap.to(cursorFollower, { opacity: 1, scale: 1, duration: 0.3 });
  cursorDot.innerText = "";
});

heroSection.addEventListener("mouseenter", () => {
  gsap.to(cursorDot, { scale: 12, duration: 0.3, ease: "power3.out" });
  gsap.to(cursorFollower, { opacity: 0, scale: 0, duration: 0.3 });
});

heroSection.addEventListener("mouseleave", () => {
  gsap.to(cursorDot, { scale: 1, duration: 0.3, ease: "power3.out" });
  gsap.to(cursorFollower, { opacity: 1, scale: 1, duration: 0.3 });
});

function magneticButton(element) {
  const children = element.children[0];

  element.addEventListener("mousemove", (e) => {
    const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = element;
    const left = e.screenX - offsetLeft;
    const top = e.y - offsetTop;
    const centerX = left - offsetWidth / 2;
    const centerY = top - offsetHeight / 2;
    const d = Math.sqrt(centerX ** 2 + centerY ** 2);

    gsap.to(element, 0.5, {
      x: centerX / 1.5,
      y: centerY / 1.5,
      ease: Elastic.easeOut,
    });

    // children.style.transform = `
    //   translate3d(${centerX / 4}px, ${centerY / 4}px, 0)
    //   rotate3d(${-centerY / 100}, ${centerX / 100}, 0, ${d / 10}deg)
    // `;
  });

  element.addEventListener("mouseleave", () => {
    gsap.to(element, 1.2, {
      x: 0,
      y: 0,
      ease: Elastic.easeOut.config(0.3, 0.1),
    });
    // children.style.transform = "";
  });
}

const a = document.getElementById("themeBtn");
magneticButton(a);

document.getElementById("themeBtn").addEventListener("mouseover", () => {
  themeProvider.className.split(" ").includes("dark")
    ? (cursorDot.innerText = "Light Mode")
    : (cursorDot.innerText = "Dark Mode");
});

document.querySelectorAll(".navbar span").forEach((button) => {
  button.addEventListener("mouseover", () => {
    gsap.to(cursorDot, { scale: 12, duration: 0.3, ease: "power3.out" });
    gsap.to(cursorFollower, { scale: 0, opacity: 0, duration: 0.3 });
    cursorDot.innerText = "View";
  });
  button.addEventListener("mouseleave", () => {
    cursorDot.innerText = "";
    gsap.to(cursorDot, { scale: 1, duration: 0.3, ease: "power3.out" });
    gsap.to(cursorFollower, { scale: 1, opacity: 1, duration: 0.3 });
  });
});

const svg = `<svg class="arrow-link" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon fill-rule="evenodd" points="19 6.414 5.707 19.707 4.293 18.293 17.586 5 10 5 10 3 21 3 21 14 19 14"/></svg>`;

document.querySelectorAll(".footer-social span").forEach((button) => {
  button.addEventListener("mouseenter", () => {
    cursorDot.innerHTML = svg;
    gsap.to(cursorDot, { scale: 12, duration: 0.3, ease: "power3.out" });
    gsap.to(cursorFollower, { opacity: 0, scale: 0, duration: 0.3 });
  });
  button.addEventListener("mouseleave", () => {
    cursorDot.innerHTML = "";
    gsap.to(cursorDot, { scale: 1, duration: 0.3, ease: "power3.out" });
    gsap.to(cursorFollower, { opacity: 1, scale: 1, duration: 0.3 });
  });
});
