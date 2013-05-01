// JavaScript for drawing on canvas
window.onload = draw;

function draw() {
var canvas = document.getElementById('myCanvas'); // canvas with id="myCanvas"
if (canvas.getContext) {
	var ctx = canvas.getContext('2d');
	
	var x = 0;   // set initial position from left
	var y = 0;   // set initial position from top
	var color = "#D18EA9";
	
	function makeText(text) {
		ctx.fillStyle = color;
		ctx.font = "48px Verdana";
		ctx.fillText( text, x, y );
	}
	
	// make bottom-right corner of text stick at 600,400	
	x = 600;
	y = 400;
	ctx.textAlign    = "right";
	ctx.textBaseline = "bottom";
	makeText("Here is some text.");

	// make top-left corner of text stick at 0,0	
	x = 0;
	y = 0;
	ctx.textAlign    = "left";
	ctx.textBaseline = "top";
	color = "#7ADEDC";
	makeText("The sky is blue.");

	ctx.strokeRect(0,0,600,400); // default color is black 
	// draws an outline around edge of this canvas
	
	
} // close if
} // close draw() function

