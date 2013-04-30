// JavaScript for drawing on canvas
window.onload = draw; // calls the function named "draw"

function draw() {
var canvas = document.getElementById('myCanvas'); // canvas with id="myCanvas"
if (canvas.getContext) {
	var ctx = canvas.getContext('2d');
	
	var x = 20;   // set initial position from left
	var y = 100;  // set initial position from top
	var color1 = "#70CCCA";
	var color2 = "#7ADEDC";
	
	function makeText(text) {
		ctx.fillStyle = color1;
		ctx.font      = "Bold 64px Arial";
		ctx.fillText( text, x, y );
		ctx.strokeText( text, x, y ); // default will be black
	}
	
	setInterval(move, 3); // controls speed of motion
	
	function move() {
		if (x < 601) {
			ctx.fillStyle = color2;
			ctx.fillRect(0,24,600,100); 
			// must redraw the rectangle (above) every time 
			makeText("Hello, World!");
			x++; // move text 1 pixel to the right
		} else {
			x = -400; // repositions text off left side of stage 
		}
	}
	
	
} // close if
} // close draw() function
