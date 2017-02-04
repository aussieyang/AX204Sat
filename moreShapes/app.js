console.log("WORKING!")

var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');
// Set up my pen
ctx.beginPath();
// Change color of line
ctx.strokeStyle = "green";
ctx.moveTo(75, 0);
ctx.lineTo(150, 100);
ctx.lineTo(75, 200);
ctx.lineTo(0, 100);
// Draws line back to starting point
ctx.closePath();
// Telling canvas to actually draw
ctx.stroke();
ctx.fillStyle = "orange";
ctx.fill();


var c2 = document.getElementById('myCanvas2');
var ctx2 = c2.getContext('2d');
ctx2.beginPath();
ctx2.arc(150, 150, 50, 0, 6.28);
ctx2.closePath();
ctx2.stroke();
ctx2.fillStyle = "peru";
ctx2.fill();


var c3 = document.getElementById('myCanvas3');
var ctx3 = c3.getContext('2d');
ctx3.beginPath();
ctx3.strokeStyle = "magenta";
ctx3.moveTo(0,0);
ctx3.lineTo(300,300);
ctx3.lineTo(300,0);
ctx3.lineTo(0, 300);
ctx3.closePath();
ctx3.stroke();
ctx3.fillStyle = "brown";
ctx3.fill();


// Scenery
var cs = document.getElementById("scene");
var ctxs = cs.getContext("2d");
// Sky and land
ctxs.fillStyle = "green";
ctxs.fillRect(0, 350, 800, 150);
ctxs.fillStyle = "cyan";
ctxs.fillRect(0, 0, 800, 350);
// Sun
ctxs.beginPath();
ctxs.arc(100, 100, 50, 0, 6.28)
ctxs.closePath();
ctxs.stroke();
ctxs.fillStyle = "yellow";
ctxs.fill();
// Road
ctxs.beginPath();
ctxs.moveTo(300,500);
ctxs.lineTo(450,500);
ctxs.lineTo(400,350);
ctxs.lineTo(350,350);
ctxs.closePath();
ctxs.strokeStyle = "black";
ctxs.stroke();
ctxs.fillStyle = "grey";
ctxs.fill();
ctxs.moveTo(375, 350);
ctxs.lineTo(375, 500);
ctxs.stroke();
// Building
ctxs.fillRect(100, 250, 200, 100);
ctxs.clearRect(130,310, 20, 20);



//
