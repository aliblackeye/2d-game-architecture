// Utils
import randomIntFromRange from "./utils/randomIntFromRange";
import randomColor from "./utils/randomColor";

// Initial Setup
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Variables
let mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

let colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];

// Event Listeners
addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

// Objects
class Ball {
  x: number;
  y: number;
  radius: number;
  color: string;
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }
}

// Implementation
function init() {
  let ball = new Ball(canvas.width / 2, canvas.height / 2, 30, "red");
  console.log(ball);
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.fillText("HTML CANVAS BOILERPLATE", mouse.x, mouse.y);
}
init();
animate();
