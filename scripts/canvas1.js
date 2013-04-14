// JavaScript for drawing on canvas
// three triangles

window.onload = draw; // calls the function named "draw"

function draw() {
var canvas = document.getElementById('myCanvas'); // canvas with id="myCanvas"
if (canvas.getContext) {
	var ctx = canvas.getContext('2d');
	ctx.beginPath();
	
	// triangle 1, at left
	ctx.moveTo(0,0); // start at top left corner of canvas
	ctx.lineTo(200,0); // go 200px to right (x), straight line from 0 to 0
	ctx.lineTo(100,200); // go to horizontal 100 (x) and vertical 200 (y)
	ctx.fill(); // connect and fill
	
	// triangle 2, top center
	ctx.moveTo(300,0); // pick up "pen," reposition at 300 (horiz), 0 (vert)
	ctx.lineTo(300,200); // draw straight down (from 300,0) to 200px
	ctx.lineTo(500,100); // draw up toward right (100 half of 200)
	ctx.fill(); // connect and fill
	
	// triangle 3, bottom center
	ctx.moveTo(300,200); // pick up "pen," reposition at 300 (horiz), 200 (vert)
	ctx.lineTo(300,400); // draw straight down by 200px (200 + 200)
	ctx.lineTo(100,300); // draw up toward left (100 less than 300, so left)
	ctx.fill(); // connect and fill

	// triangle 4, at right, top
	ctx.moveTo(600,0);   // pick up "pen," reposition at 500 (horiz), 0 (vert)
	ctx.lineTo(500,200); // draw straight down by 200px (200 + 200)
	ctx.lineTo(700,200); // draw up toward left (100 less than 300, so left)
	ctx.closePath();     // connect end to start
	ctx.stroke();        // outline the shape that's been described
	
	// triangle 5, at right, bottom
	ctx.moveTo(500,210); // pick up "pen," reposition 
	ctx.lineTo(700,210); // draw straight across to right
	ctx.lineTo(600,410); // draw down toward left
	ctx.closePath();     // connect end to start
	ctx.stroke();        // outline the shape that's been described

  	}
}
