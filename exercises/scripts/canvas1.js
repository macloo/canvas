// JavaScript for drawing on canvas

window.onload = draw; // calls the function named "draw"

function draw() {
var canvas = document.getElementById('myCanvas'); // canvas with id="myCanvas"
if (canvas.getContext) {
	var ctx = canvas.getContext('2d');


	ctx.fillRect(0,0,600,400); // draw a filled rectangle



} // close if
} // close draw() function
 