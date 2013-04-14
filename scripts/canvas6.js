// JavaScript for drawing on canvas
// show transparency 

window.onload = draw; // calls the function named "draw"

function draw() {
var canvas = document.getElementById('myCanvas'); // canvas with id="myCanvas"
if (canvas.getContext) {
	var ctx = canvas.getContext('2d');
	
	var img = new Image();
	img.onload = function() {
		ctx.drawImage( img, 0, 0 ); // place image
		for (var i = 0; i < 7; i++) {
			ctx.fillStyle = 'rgba(0,70,10,' + (.1 * i) + ')';
			ctx.fillRect(i*50,0,50,250); // create one strip
		}
	} // close img.onload function 
	img.src = 'images/apple.jpg'; // relative to the HTML file, not this JS file 
	// another way is to include the image in the HTML, hide it, then use it 
}; // close "if"

} // close draw() 
