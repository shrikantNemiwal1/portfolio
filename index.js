gsap.registerPlugin(ScrollTrigger);

gsap.from(".projects", {
  y: 300,
  rotate: -10,
  duration: 1,
  scrollTrigger: {
    trigger: ".image",
    start: "top 75%",
    end: "40% 30%",
    ease: "power2.out",
    // markers: true,
  },
});

gsap.from(".projects", {
  x: 150,
  scrollTrigger: {
    trigger: ".image",
    start: "top bottom",
    end: "top top",
    // markers: true,
    scrub: 1,
  },
});

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

gsap.timeline().from(".hero-main .span", 1, {
  y: 100,
  ease: "power4.out",
  delay: 1,
  stagger: {
    amount: 0.5,
  },
});

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

gsap.from(".project-index", {
  y: 200,
  scrollTrigger: {
    trigger: ".project-index",
    start: "top bottom",
    end: "top top",
    // markers: true,
    scrub: 1,
  },
});

gsap.from(".image", {
  scrollTrigger: {
    trigger: ".project-index",
    start: "top bottom",
    end: "top top",
    // markers: true,
    scrub: 1,
  },
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".image",
      scrub: true,
      start: "50% 100%",
      end: "50% 50%",
      // markers: true,
    },
  })
  .to(".image", {
    x: 100,
    y: 30,
    ease: "power5.in",
  });

var xp = 0,
  mouseX = 0;
var yp = 0,
  mouseY = 0;
var xpDot = 0,
  mouseX = 0;
var ypDot = 0,
  mouseY = 0;

const cursorFollower = document.querySelector(".cursorFollower");
const cursorFollowerDot = document.querySelector(".cursorFollowerDot");

document.addEventListener("mousemove", (e) => {
  mouseX = e.screenX;
  mouseY = e.screenY;
});

setInterval(function () {
  xp += (mouseX - xp) / 15;
  yp += (mouseY - yp) / 15;

  cursorFollower.style.left = xp + "px";
  cursorFollower.style.top = yp - 85 + "px";
}, 10);

setInterval(function () {
  xpDot += (mouseX - xpDot) / 25;
  ypDot += (mouseY - ypDot) / 25;

  cursorFollowerDot.style.left = xpDot + "px";
  cursorFollowerDot.style.top = ypDot - 85 + "px";
}, 10);

const themeBtn = document.getElementById("themeBtn");
const themeProvider = document.getElementById("themeProvider");
themeBtn.addEventListener("click", () => {
  themeProvider.classList.toggle("dark");
  themeProvider.className.split(" ").includes("dark")
    ? (cursorFollowerDot.innerText = "Light Mode")
    : (cursorFollowerDot.innerText = "Dark Mode");
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
  cursorFollower.style.opacity = 0;

  console.log(themeProvider.className.split(" ").includes("dark"));
  themeProvider.className.split(" ").includes("dark")
    ? (cursorFollowerDot.innerText = "Light Mode")
    : (cursorFollowerDot.innerText = "Dark Mode");
  cursorFollowerDot.style.transform = "scale(10)";
});
document.getElementById("themeBtn").addEventListener("mouseleave", () => {
  cursorFollower.style.opacity = 1;
  cursorFollowerDot.innerText = "";
  cursorFollowerDot.style.transform = "scale(1)";
});

document.getElementById("heroContent").addEventListener("mouseover", () => {
  cursorFollower.style.opacity = 0;
  cursorFollowerDot.style.transform = "scale(10)";
});
document.getElementById("heroContent").addEventListener("mouseleave", () => {
  cursorFollower.style.opacity = 1;
  cursorFollowerDot.style.transform = "scale(1)";
});

document.querySelectorAll(".navbar span").forEach((button) => {
  button.addEventListener("mouseover", () => {
    cursorFollower.style.opacity = 0;
    cursorFollowerDot.innerText = "View";
    cursorFollowerDot.style.transform = "scale(10)";
  });
  button.addEventListener("mouseleave", () => {
    cursorFollower.style.opacity = 1;
    cursorFollowerDot.innerText = "";
    cursorFollowerDot.style.transform = "scale(1)";
  });
});

const svg = `<svg class="arrow-link" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon fill-rule="evenodd" points="19 6.414 5.707 19.707 4.293 18.293 17.586 5 10 5 10 3 21 3 21 14 19 14"/></svg>`;

document.querySelectorAll(".footer-social span").forEach((button) => {
  button.addEventListener("mouseover", () => {
    cursorFollower.style.opacity = 0;
    cursorFollowerDot.innerHTML = svg;
    cursorFollowerDot.style.transform = "scale(10)";
  });
  button.addEventListener("mouseleave", () => {
    cursorFollower.style.opacity = 1;
    cursorFollowerDot.innerHTML = "";
    cursorFollowerDot.style.transform = "scale(1)";
  });
});
