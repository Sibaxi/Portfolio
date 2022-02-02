/////////////////////////////////////////////////////////////////////////////////
// Global letiables and fucntions

let clientHeight = window.innerHeight;
let clientWidth = window.innerWidth;

let animateLine = document.querySelectorAll(".lineAnimation");
let dashOffset = 0;

let workBox = document.getElementsByClassName("workBox"); // the work box array
let mainContainer = document.querySelector(".parallax");
let mobile = false;
if (window.matchMedia("(max-width: 600px)").matches) {
  mobile = true;
}

let beta;
let gamma;
if (mobile) {
  window.addEventListener("deviceorientation", handleOrientation, true);
  function handleOrientation(event) {
    if (beta < -30) {
      beta = -30;
    } else if (beta > 50) {
      beta = 50;
    } else if (gamma < -50) {
      gamma = -50;
    } else if (gamma > 50) {
      gamma = 50;
    } else {
      beta = event.beta;
      gamma = event.gamma;
    }
  }
}

let maintenace = false;

/////////////////////////////////////////////////////////////////////////////////
// Lines waves

let sketch = function (p) {
  let div = document.getElementById("container");
  div.mouseIsOver = false;

  let points = [];
  let rows = 35;
  let columns = 35; //num grids / frame
  let _x = clientWidth + clientWidth * 0.2; //x width (canvas width)
  let _y = clientHeight * 0.65; //y height (canvas height)
  let w = _x / columns; //grid sq width
  let h = _y / rows; //grid sq height
  let P1 = 0.0005; //point one
  let P2 = 0.01; //point two
  let n = 0.68; //n value for later
  let n_vel = 0.025; //velocity

  if (mobile) {
    _y = clientHeight * 0.65;
    rows = 20;
    columns = 20;
    w = _x / columns;
    h = _y / rows;
  }

  p.setup = function () {
    let canvas;

    canvas = p.createCanvas(
      clientWidth + clientWidth * 0.2,
      clientHeight * 0.8
    );
    canvas.parent("container");
    p.lines();
  };

  p.draw = function () {
    p.clear();
    initDivMouseOver();
    p.mv_part();
    p.drawLines();
  };

  p.lines = function () {
    for (let i = 0; i < rows; i++) {
      points[i] = [];

      for (let j = 0; j < columns; j++) {
        let m = p.createVector(j * w, i * h);
        m.ind_x = j;
        m.ind_y = i;
        m.vx = 0;
        m.vy = 0;
        points[i][j] = m;
      }
    }
  };
  p.drawLines = function () {
    for (let i = 1; i < rows - 1; i++) {
      p.beginShape();
      p.stroke(0);
      p.noFill();
      for (let j = 0; j < columns; j++) {
        p.curveVertex(points[i][j].x, points[i][j].y);
      }
      p.endShape();
    }
  };

  p5.Vector.prototype.frame = function () {
    if (
      this.ind_x == 0 ||
      this.ind_x == rows - 1 ||
      this.ind_y == 0 ||
      this.ind_y == columns - 1
    ) {
      return;
    }

    let ax = 0; //angle x
    let ay = 0; //angle y
    //off_dx, off_dy = offset distance x, y
    let off_dx = this.ind_x * w - this.x;
    let off_dy = this.ind_y * h - this.y;
    ax = P1 * off_dx;
    ay = P1 * off_dy;

    ax -= P2 * (this.x - points[this.ind_y - 1][this.ind_x].x);
    ay -= P2 * (this.y - points[this.ind_y - 1][this.ind_x].y);

    ax -= P2 * (this.x - points[this.ind_y + 1][this.ind_x].x);
    ay -= P2 * (this.y - points[this.ind_y + 1][this.ind_x].y);

    ax -= P2 * (this.x - points[this.ind_y][this.ind_x - 1].x);
    ay -= P2 * (this.y - points[this.ind_y][this.ind_x - 1].y);

    ax -= P2 * (this.x - points[this.ind_y][this.ind_x + 1].x);
    ay -= P2 * (this.y - points[this.ind_y][this.ind_x + 1].y);

    this.vx += ax - this.vx * n_vel;
    this.vy += ay - this.vy * n_vel;

    this.x += this.vx * n;
    this.y += this.vy * n;
    if (maintenace == false && mobile == true) {
      let dx = this.x - (gamma + 45) * (_x / 95);
      let dy = this.y - (beta + 5) * (_y / 75);
      let ɋ = Math.sqrt(dx * dx + dy * dy);
      if (ɋ < 50) {
        ɋ = ɋ < 10 ? 10 : ɋ;
        this.x -= (dx / ɋ) * 2;
        this.y -= (dy / ɋ) * 2;
      }
    } else {
      if (div.mouseIsOver) {
        let dx = this.x - p.mouseX;
        let dy = this.y - p.mouseY;
        let ɋ = Math.sqrt(dx * dx + dy * dy);
        if (ɋ < 50) {
          ɋ = ɋ < 10 ? 10 : ɋ;
          this.x -= (dx / ɋ) * 5;
          this.y -= (dy / ɋ) * 5;
        }
      }
    }
  };

  p.mv_part = function () {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        let m = points[i][j];
        m.frame();
      }
    }
  };

  function initDivMouseOver() {
    div.onmouseover = function () {
      this.mouseIsOver = true;
    };
    div.onmouseout = function () {
      this.mouseIsOver = false;
    };
  }
};

let interactiveWaves = new p5(sketch, "container");

/////////////////////////////////////////////////////////////////////////////////
// Smooth scroll

window.onload = function () {
  ////////////////////////////////////////////////////////////////////////////////////
  // Home transition

  let hiddenOnHome = document.getElementsByClassName("hiddenHome");
  for (let j = 0; j < hiddenOnHome.length; j++) {
    hiddenOnHome[j].className = hiddenOnHome[j].className.replace(
      "hiddenHome",
      "showHome"
    );
  }
  ////////////////////////////////////////////////////////////////////////////////////

  const scrollElems = document.getElementsByClassName("scroll");

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  function scrollTo(element, to, duration) {
    let start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    let animateScroll = function () {
      currentTime += increment;
      let val = Math.easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        requestAnimationFrame(animateScroll, increment);
      }
    };
    animateScroll();
  }

  for (let i = 0; i < scrollElems.length; i++) {
    const elem = scrollElems[i];

    elem.addEventListener("click", function (e) {
      let scrollEndElem;
      let scrollElemId;

      e.preventDefault();

      for (let i = 0; i < scrollElems.length; i++) {
        scrollElems[i].classList.remove("activePage");
      }

      scrollElemId = e.currentTarget.href.split("#")[1];
      scrollEndElem = document.getElementById(scrollElemId);

      const anim = requestAnimationFrame(() => {
        const stamp = new Date().getTime();
        const duration = 1200;
        const start = stamp;

        const scrollEndElemTop = scrollEndElem.offsetTop;

        scrollTo(mainContainer, scrollEndElemTop, duration);
        // scrollTo(start, stamp, duration, scrollEndElemTop, startScrollOffset);
        // scrollToElem(scrollEndElemTop);
      });
    });
  }
};
/////////////////////////////////////////////////////////////////////////////////
// Scroll Events

mainContainer.addEventListener("scroll", scrollPosition);
function scrollPosition() {
  let segments = document.getElementsByClassName("segment");
  let activeLink = document.getElementsByClassName("scroll");
  let hidden = document.getElementsByClassName("hidden");

  for (let j = 0; j < hidden.length; j++) {
    if (hidden[j].getBoundingClientRect().top - clientHeight <= -200) {
      hidden[j].className = hidden[j].className.replace("hidden", "show");
    }
  }
  if (mobile) {
    for (let i = 0; i < workBox.length; i++) {
      let distance = workBox[i].getBoundingClientRect();

      if (distance.top < 300 && distance.top > 100) {
        for (let j = 0; j < workbox.length; j++) {
          animateLine[j].style.strokeDashoffset = "0";
          workBox[j].children[0].children[0].style.opacity = "0";
        }

        if (i == 0) {
          animateLine[0].style.strokeDashoffset = "300";
          workBox[0].children[0].children[0].style.opacity = "1";
        } else if (i == 1) {
          animateLine[1].style.strokeDashoffset = "240";
          workBox[1].children[0].children[0].style.opacity = "1";
        } else if (i == 2) {
          animateLine[2].style.strokeDashoffset = "80";
          workBox[2].children[0].children[0].style.opacity = "1";
        }
      }
    }
  }

  for (let i = 0; i < segments.length; i++) {
    activeLink[i].classList.remove("activePage");
    let position = segments[0].getBoundingClientRect();
    let currentPosition = -position.top;

    if (currentPosition <= segments[1].offsetTop - 400) {
      activeLink[1].classList.remove("activePage");
    } else if (
      currentPosition > segments[1].offsetTop - 400 &&
      currentPosition <= segments[2].offsetTop - 400
    ) {
      activeLink[1].classList.add("activePage");
    } else if (
      currentPosition > segments[2].offsetTop - 400 &&
      currentPosition <= segments[3].offsetTop - 400
    ) {
      activeLink[2].classList.add("activePage");
    } else {
      activeLink[3].classList.add("activePage");
    }
  }
}

////////////////////////////////////////////////////////////////////////////////////
// Window resize events

window.onresize = function (event) {
  clientHeight = window.innerHeight;
  clientWidth = window.innerWidth;

  firstWave.remove();
  secondWave.remove();
  thirdWave.remove();
  interactiveWaves.remove();

  firstWave = new p5(wave, "firstTransition");
  thirdWave = new p5(wave, "thirdTransition");
  secondWave = new p5(wave, "secondTransition");
  interactiveWaves = new p5(sketch, "container");

  if (window.matchMedia("(max-width: 600px)").matches) {
    mobile = true;
  } else {
    mobile = false;
  }
};

////////////////////////////////////////////////////////////////////////////////////
// Mobile menu hide

if (mobile) {
  let menuItems = document.querySelectorAll("#menu li");
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function () {
      document.getElementById("checkbox").checked = false;
    });
  }
}

////////////////////////////////////////////////////////////////////////////////////
// Cursor

let cursor = document.querySelector(".custom-cursor");

let start = null;
let cursorX = 0;
let cursorY = 0;
let targetX;
let targetY;
const easing = 0.05;
if (mobile == false) {
  window.onmouseout = function () {
    cursor.style.display = "none";
  };
  window.onmouseover = function () {
    cursor.style.display = "block";
  };
  document.onmousemove = function (e, timestamp) {
    cursor.style.left = e.pageX - 10 + "px";
    cursor.style.top = e.pageY - 10 + "px";
  };
  let links = document.querySelectorAll("a");

  for (let i = 0; i < links.length; i++) {
    links[i].onmouseover = function () {
      cursor.classList.add("custom-cursor-active");
    };
    links[i].onmouseout = function () {
      cursor.classList.remove("custom-cursor-active");
    };
  }
}
////////////////////////////////////////////////////////////////////////////////////
// Lines animation

let workbox = document.querySelectorAll(".workBox");

for (let i = 0; i < workbox.length; i++) {
  workbox[i].addEventListener(
    "mouseover",
    function (event) {
      if (event.currentTarget.id == "first") {
        animateLine[0].style.strokeDashoffset = "300";
      } else if (event.currentTarget.id == "second") {
        animateLine[1].style.strokeDashoffset = "240";
      } else if (event.currentTarget.id == "third") {
        animateLine[2].style.strokeDashoffset = "80";
      }
    },
    false
  );
  workbox[i].addEventListener(
    "mouseout",
    function (event) {
      for (let j = 0; j < workbox.length; j++) {
        animateLine[j].style.strokeDashoffset = "0";
      }
    },
    false
  );
}
