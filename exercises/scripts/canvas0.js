// JavaScript for drawing on canvas


window.onload = draw; // calls the function named "draw"

function draw() {
var canvas = document.getElementById('myCanvas'); // canvas with id="myCanvas"
if (canvas.getContext) {
	var ctx = canvas.getContext('2d');
	
	// put your drawing code here, as many line as needed
	


} // close if
} // close draw() function


/* --------------------------------------------------------------------------
An alternative wrapper for the JavaScript for drawing on canvas is:


window.onload = function ()  {

	// drawing code here

}

NOTE: You must use  window.onload  with JavaScript for the canvas.
-------------------------------------------------------------------------- */
