// JavaScript for drawing Google fonts text on canvas

/*
Getting the text to display is tricky. Many solutions use timers 
of various sorts. I found that by making the text twice (first, in 
a color matching the background, meaning it's invisible) enables the 
Google font to render. A timer is still needed, but it can be short. 
Using the timer alone, even with a long wait, didn't do it. 
Just making the text twice (even three times) also failed.
*/

window.onload = draw; // calls the function named "draw"

function draw() {
var canvas = document.getElementById('myCanvas'); // canvas with id="myCanvas"
if (canvas.getContext) {
	var ctx = canvas.getContext('2d');
	
	var x = 0;   // set initial position from left
	var y = 0;   // set initial position from top
	var color = "#FFF"; // set initial fill color to white
	
	function makeText(text) {
		ctx.beginPath();
		ctx.fillStyle = color;
		ctx.font = "800 48px Stint Ultra Expanded"; 
		// this Google font is loaded in the HEAD on the HTML
		ctx.fillText( text, x, y );
		ctx.closePath();
	}
	
	// here we render the text in white, invisibly 
	makeText("Here is some text.");
	makeText("The sky is blue.");
	

	ctx.fillRect(0,0,600,400); // fill the background (color still white)
	ctx.strokeRect(0,0,600,400); // default stroke color is black 
	// draws an outline around edge of this canvas


	function render() {
		
		// position bottom-right corner of text  at 600,400	
		x = 600;
		y = 400;
		ctx.textAlign    = "right";
		ctx.textBaseline = "bottom";
		color = "#D18EA9";
		makeText("Here is some text.");
		
		// position top-left corner of text at 0,0	
		x = 0;
		y = 0;
		ctx.textAlign    = "left";
		ctx.textBaseline = "top";
		color = "#7ADEDC";
		makeText("The sky is blue.");
		
	} // close render() function

	// this timeout adds a pause of 1 second, once  
	var timeoutID = window.setTimeout(render, 1000);


} // close if
} // close draw() function
