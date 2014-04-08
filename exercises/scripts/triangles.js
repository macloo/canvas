// JavaScript for drawing on canvas
// applying colors + three triangles

window.onload = draw; // calls the function named "draw"

function draw() {
var canvas = document.getElementById('myCanvas'); // canvas with id="myCanvas"
if (canvas.getContext) {
	var ctx = canvas.getContext('2d');
	ctx.beginPath(); // note usage below 
	
	// triangle 1, at left
	ctx.fillStyle = "#F9A520"; // set color
	ctx.moveTo(0,0); // start at top left corner of canvas
	ctx.lineTo(200,0); // go to 200 (x), straight line (0 to 0)
	ctx.lineTo(100,200); // go to horizontal 100 (x) and vertical 200 (y)
	ctx.fill(); // connect and fill
	
	// triangle 2, top center
	ctx.moveTo(300,0); // pick up "pen," reposition at 300 (x), 0 (y)
	ctx.lineTo(300,200); // draw line
	ctx.lineTo(500,100); // draw line
	ctx.fill(); // connect and fill
	
	// triangle 3, bottom center
	ctx.beginPath(); // note: w/o this, color does not work as expected 
	ctx.fillStyle = "#F00";
	ctx.moveTo(300,200); // pick up "pen," reposition
	ctx.lineTo(300,400);
	ctx.lineTo(100,300);
	ctx.fill(); // connect and fill

	// triangle 4, at right, top
	ctx.beginPath();
	ctx.strokeStyle = "#00F"; // set stroke color
	ctx.moveTo(600,0);   // pick up "pen," reposition
	ctx.lineTo(500,200);
	ctx.lineTo(700,200);
	ctx.closePath();     // connect end to start
	ctx.stroke();        // outline the shape that's been described
	
	// triangle 5, at right, bottom
	ctx.beginPath();
	ctx.strokeStyle = "#096"; // change stroke color
	ctx.moveTo(500,210); // pick up "pen," reposition 
	ctx.lineTo(700,210);
	ctx.lineTo(600,410);
	ctx.closePath();     // connect end to start
	ctx.stroke();        // outline the shape that's been described




  	}
}
