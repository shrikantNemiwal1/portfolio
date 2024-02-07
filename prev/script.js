var _positions = [
  {
    name: "front",
    start: {
      percent: 0.2,
      x: 0,
      y: 0,
    },
    end: {
      percent: 0.9,
      x: 0.9,
      y: 0,
    },
  },
  {
    name: "back",
    start: {
      percent: 0.2,
      x: 0,
      y: 0,
    },
    end: {
      percent: 0.9,
      x: 0.9,
      y: 0,
    },
  },
];
var _movingElements = [];
initMovingElements();

function initMovingElements() {
  for (var i = 0; i < _positions.length; i++) {
    var el = document.getElementsByClassName(_positions[i].name + " reveal")[0];
    console.log(el);
    _movingElements.push({ el: el, pos: _positions[i] });
  }
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  var h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";

  let scrollTop = container.scrollTop;
  let docHeight = document.body.offsetHeight;
  let winHeight = container.innerHeight;
  let scrollPercentage = scrollTop / (docHeight - winHeight);
  console.log(docHeight);
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }

  for (let i = 0; i < _movingElements.length; i++) {
    const element = _movingElements[i];
    var startX = element.pos.start.percent * window.innerWidth;
    var endX = element.pos.end.percent * window.innerWidth;
    var currentX = startX + (endX - startX) * scrollPercentage;

    var translateY =
      (element.pos.end.y - element.pos.start.y) * scrollPercentage;
    console.log(startX, endX, currentX, translateY);
    element.el.style.transform =
      "translate(" + currentX + "px, " + translateY + "px)";
  }
}

const container = document.getElementsByClassName("container")[0];
container.addEventListener("scroll", reveal);
