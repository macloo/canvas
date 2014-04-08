// JavaScript for drawing on canvas 
// using only ONE image on the canvas 

window.onload = draw; // calls the function named "draw"

function draw() {
var canvas = document.getElementById('motoCanvas'); 
// canvas with id="motoCanvas"
if (canvas.getContext) {
	var ctx = canvas.getContext('2d');


	var img = new Image();
	img.onload = function() {
		ctx.drawImage( img, -50, 200, 600, 300 );
	} // close img.onload function 
	
	
	img.src = 'images/motorcycle.png'; 
	// src path is relative to the HTML file, NOT to this JS file 


} // close "if"

} // close draw() 
