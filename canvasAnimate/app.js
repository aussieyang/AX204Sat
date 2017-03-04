console.log("Heya!!")

// Declaring variables at the top (elevation of scope)
var canvas;
var ctx;
// Hold some coordinates
var x = 600;
var y = 300;
// Holding the magnitude of our movement (speed)
var mx = 2;
var my = 4;
// Hold the height and width of the canvas
var width = 600;
var height = 300;


// Initialise our animation (entry point function)
function init() {
  canvas = document.getElementById('myCanvas');
  ctx = canvas.getContext('2d');
  return setInterval(draw, 10);
}

// Draw a circle function
function circle(x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 6.28);
  ctx.closePath();
  ctx.fillStyle = "linen";
  ctx.fill();
}

// Clear the canvas function
function clear() {
  ctx.clearRect(0, 0, width, height);
}

// Creating draw function
function draw(){
  clear();
  circle(x, y, 30);
  // Move our circle on every iteration
  x += mx;
  y += my;
  // Make sure ball reverses direction when it reaches the edge
  if (x + mx > width || x + mx < 0) {
    mx = -mx
  }
  if (y + my > height || y + my < 0) {
    my = -my
  }
}

// Call our entry point function
init();






//
