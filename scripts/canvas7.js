// JavaScript for drawing on canvas
// drawing lines - on three different canvases 

window.onload = draw; // calls the function named "draw"

function draw() {
var canvas = document.getElementById('myCanvas'); // canvas with id="myCanvas"
if (canvas.getContext) {
	var ctx = canvas.getContext('2d');
	var i = 0;
	
	for (i = 0; i < 5; i++) {
	
	ctx.lineWidth = 1 + i;
    ctx.beginPath();
    ctx.moveTo(5 + i*50, 5);
    ctx.lineTo(5 + i*50, 200);
    ctx.stroke();
	
	}

	for (i = 0; i < 5; i++) {
	
	ctx.lineWidth = 1 + i;
    ctx.beginPath();
    ctx.moveTo(20.5 + i*50, 5);
    ctx.lineTo(20.5 + i*50, 200);
    ctx.strokeStyle = "#00C";
    ctx.stroke();
	
	}

}; // close "if"

// two more canvases on this page 

var canvas1 = document.getElementById('otherCanvas1');
var canvas2 = document.getElementById('otherCanvas2');
if (canvas1.getContext) {
	var grid1 = canvas1.getContext('2d');
	grid1.lineWidth = 1; // set line thickness
    grid1.strokeStyle = "#70CAD4"; // set color

	for (i = 0; i < 30; i++) { // vertical lines
		grid1.beginPath();
    	grid1.moveTo(0.5 + i*20, 0.5);
    	grid1.lineTo(0.5 + i*20, 200);
    	grid1.stroke();
	}

	for (i = 0; i < 20; i++) { // horizontal lines
//		grid1.beginPath();
    	grid1.moveTo(0.5, i*20 + 0.5);
    	grid1.lineTo(300, 0.5 + i*20);
    	grid1.stroke();
	}

}; // close "if"

if (canvas2.getContext) {
	var grid2 = canvas2.getContext('2d');
	grid2.lineWidth = 1; // set line thickness
    grid2.strokeStyle = "#70CAD4"; // set color

	for (i = 0; i < 30; i++) { // vertical lines
    	grid2.beginPath();
    	grid2.moveTo(i*20, 0);
    	grid2.lineTo(i*20, 200);
    	grid2.stroke();
	}

	for (i = 0; i < 20; i++) { // horizontal lines
    	grid2.beginPath();
	    grid2.moveTo(0, i*20);
    	grid2.lineTo(300, i*20);
    	grid2.stroke();
	}

}; // close "if"
	

} // close draw() 
