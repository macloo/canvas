// JavaScript for drawing on canvas
// setInterval  

window.onload = setInterval(draw, 500); 

// Above: 
// repeatedly runs the function named "draw" because of setInterval 
// 500 means 500 milliseconds, or run it twice every second 

function draw() {
var canvas = document.getElementById('myCanvas'); // canvas with id="myCanvas"
if (canvas.getContext) {
	var ctx = canvas.getContext('2d');
// ----------------------------------------------------------------------------	

for (var i = 0; i < 6; i++) {
	for (var j = 0; j < 6; j++) {
		var r = Math.floor(Math.random() * 255);
		var g = Math.floor(Math.random() * 255);
		var b = Math.floor(Math.random() * 255);
		// above: generate random numbers for each value
		ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
		ctx.fillRect(j*50, i*50, 50, 50); // create one square
	}
}

// ----------------------------------------------------------------------------	
}; // close "if"
} // close draw()
 
