console.log("ahhahah");

// Declare all our variables at the top
var canvas;
var ctx;
// Starting position and radius for player sprite
var x = 300;
var y = 300;
var r = 20;
// Keep track of speed in x and y directions
var mx = 0;
var my = 0;
// Positions of fruits
var goodX;
var goodY;
var badX;
var badY;
var fruitWidth = 50;
var fruitHeight = 50;
// Boolean to keep track of whether collision is occuring
var goodCollision = false;
var badCollision = false;
// Width and height of canvas plus keeping score
var WIDTH = 600;
var HEIGHT = 600;
var score = 0;

// Draw a circle function
function circle(x, y, r){
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 6.28);
  ctx.closePath();
  ctx.fillStyle = "tomato";
  ctx.fill();
}

// Wiping clean the canvas
function clear() {
  ctx.clearRect(0,0,WIDTH,HEIGHT);
}

// Initialise our animation / game
function init(){
  // set up our canvas
  canvas = document.getElementById('myCanvas');
  ctx = canvas.getContext('2d');
  // put fruits in random positions
  goodX = Math.floor(Math.random() * 550);
  goodY = Math.floor(Math.random() * 550);
  badX = Math.floor(Math.random() * 550);
  badY = Math.floor(Math.random() * 550);
  // wait for a keybord input
  window.onkeydown = keydownControl;
  // redraw the canvas every 10ms
  return setInterval(draw, 10);
}

// Draw function to show what to draw every few milliseconds
function draw() {
  clear();
	circle(x, y, r);
  drawGood();
  drawBad();
	// tells our sprite to bounce off the walls and go in the opposite direction
	if (x + mx > WIDTH - r || x + mx < 0 + r){
		mx = -mx
	} else if (y + my > WIDTH - r || y + my < 0 + r) {
		my = -my
	}
	// moves our sprite
	x += mx;  //means the same as x = x + mx
	y += my;
  // check for a collision
  collisionCheck();
  collisionHandle();
}

// What happens if there is a collision
function collisionHandle(){

}

// Checks for whether there is a collision
function collisionCheck(){

}

// Keyboard control function
function keydownControl(e){
  //change the speed depending on which button is pressed
  if(e.keyCode == 37) {
    mx = -4;
    my = 0;
  } else if (e.keyCode == 38) {
    mx = 0;
    my = -4;
  } else if (e.keyCode == 39) {
    mx = 4;
    my = 0;
  } else if (e.keyCode == 40) {
    mx = 0;
    my = 4;
  }
}

// Import image of good and bad fruit
function drawGood(){
  ctx = document.getElementById('myCanvas').getContext('2d');
  var good = new Image();
  good.src = "good.png";
  ctx.drawImage(good, goodX, goodY, 50, 50);
}

function drawBad(){
  ctx = document.getElementById('myCanvas').getContext('2d');
  var bad = new Image();
  good.src = "bad.png";
  ctx.drawImage(bad, badX, badY, 50, 50);
}

init();
