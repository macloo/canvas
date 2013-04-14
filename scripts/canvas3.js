// JavaScript for drawing on canvas
// tile and scale an image 

window.onload = draw; // calls the function named "draw"

function draw() {
var canvas = document.getElementById('myCanvas'); // canvas with id="myCanvas"
if (canvas.getContext) {
	var ctx = canvas.getContext('2d');
	
	var img = new Image();
	img.onload = function() {
		for ( var i = 0; i < 3; i++ ) {      // three rows 
			for ( var j = 0; j < 5; j++ ) {  // five in each row 
				ctx.drawImage( img, j*175, i*175, 175, 175 ); // image is square
			}
		}
	} // close img.onload function 
	img.src = 'images/apple.jpg'; // relative to the HTML file, not this JS file 
	// another way is to include the image in the HTML, hide it, then use it 
}; // close "if"

} // close draw() 
