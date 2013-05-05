// JavaScript for drawing on canvas
window.onload = draw; // calls the function named "draw"

function draw() {
var canvas = document.getElementById('myCanvas'); // canvas with id="myCanvas"
if (canvas.getContext) {
	var ctx = canvas.getContext('2d');
	
	var x = 20;   // set initial position from left
	var y = 100;  // set initial position from top
	var color1 = "#fff";
	var color2 = "#7ADEDC";
	var color3 = "#D18EA9";
	
	function makeText(text) {
		ctx.beginPath();
		ctx.fillStyle = color1;
		ctx.font      = "72px Rye";
		// this Google font is loaded in the HEAD of the HTML file
		ctx.fillText( text, x, y );
		ctx.strokeText( text, x, y ); // default will be black
		ctx.closePath();
	}
		
	function move() {
		if (x < 601) {
			ctx.fillStyle = color3;
			ctx.fillRect(0,0,600,200); 
			ctx.fillStyle = color2;
			ctx.fillRect(0,24,600,100); 
			// must redraw the rectangles (above) every time 
			makeText("Hello, World!");
			x++; // move text 1 pixel to the right
		} else {
			x = -400; // repositions text off left side of stage 
		}
	}

	setInterval(move, 10); // controls speed of motion


} // close if
} // close draw() function
