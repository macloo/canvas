// JavaScript for drawing on canvas

window.onload = draw; // calls the function named "draw"

function draw() {
var canvas = document.getElementById('myCanvas'); // canvas with id="myCanvas"
if (canvas.getContext) {
	var grid1 = canvas.getContext('2d');

	// draw 5 tiny red boxes
	
	grid1.beginPath(); // initialize
	grid1.fillStyle = "#f00";
	grid1.fillRect(0,0,5,5);   // x = 0
	grid1.fillRect(250,0,5,5); // x = 250
	grid1.fillRect(500,0,5,5); // x = 500
	grid1.fillRect(0,100,5,5); // y = 100
	grid1.fillRect(0,300,5,5); // y = 300


	// draw a light blue grid to fill the canvas 
	
	grid1.lineWidth = 1; // set line thickness
    grid1.strokeStyle = "#70CAD4"; // set color

	var i = 0;

	for (i = 0; i <= 30; i++) { // 30 vertical lines
		grid1.beginPath();
    	grid1.moveTo(0.5 + i*20, 0.5);
    	grid1.lineTo(0.5 + i*20, 400);
    	grid1.stroke();
	}

	for (i = 0; i <= 20; i++) { // 20 horizontal lines
    	grid1.moveTo(0.5, i*20 + 0.5);
    	grid1.lineTo(600, 0.5 + i*20);
    	grid1.stroke();
	}


// writing text on top of the grid

	grid1.fillStyle = "#000"; // set color
	grid1.font = "24px Verdana"; // set font styles
	
	grid1.fillText("x = 0", 0.5, 20.5); // using .5 makes text sharper
	grid1.fillText("x = 250", 250.5, 20.5);
	grid1.fillText("x = 500", 500.5, 20.5);

	grid1.fillText("y = 100", 0.5, 120.5);
	grid1.fillText("y = 300", 0.5, 320.5);

// draw a triangle on top of the grid
// the two numbers are always x, y

	grid1.beginPath(); // note: w/o this, color does not work as expected 
	grid1.fillStyle = "#54AB79"; // set color
	grid1.moveTo(500,100); // pick up "pen," reposition it at 500 (x), 200 (y)
	grid1.lineTo(500,300); // draw straight down to 500 (x), 300 (y)
	grid1.lineTo(250,300); // draw straight across (on y = 300) to 250 (x) 
	grid1.fill(); // connect and fill

// little red circles

	grid1.beginPath();
	
    grid1.strokeStyle = "#f00"; // set color
    grid1.moveTo(505,100);
	grid1.arc(500,100,5,0,Math.PI*2,true); // top point of triangle
    grid1.moveTo(505,300);
	grid1.arc(500,300,5,0,Math.PI*2,true); // bottom right point of triangle
	grid1.moveTo(255,300);
	grid1.arc(250,300,5,0,Math.PI*2,true); // bottom left point of triangle
	
	grid1.stroke(); // draw all 3 circles 


}; // close "if"

} // close draw() 
