console.log("WORKING!")

// Create an image
var pikachu = new Image();
var char = new Image();

// Give the image a source
pikachu.src = "pikachu.png";
char.src = "charizard.png";

// Draw the image onto my canvas
pikachu.onload = function(){
  ctxs.drawImage(pikachu, 150, 300, 60, 60);
}

char.onload = function(){
  ctxs.drawImage(char, 500, 200, 300, 180);
}

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


//
