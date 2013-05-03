// JavaScript for drawing on canvas - Bezier curves 
// two buttons independently change the two control points on the curve 
// using a random number each time 

window.onload = draw; // calls the function named "draw"

// variables for two control points: A and B
var Ax = 0;   // x for A range 0-590
var Ay = 100; // y for A range 0-390
var Bx = 590; // x for B range 0-590
var By = 300; // y for B range 0-390


function draw() {
var canvas = document.getElementById('myCanvas'); // canvas with id="myCanvas"
if (canvas.getContext) {
	var ctx = canvas.getContext('2d');
	
	function makeCurve() {
	
		// fill canvas with white color
		ctx.beginPath();
		ctx.fillStyle = '#fff';
		ctx.fillRect(0,0,600,400);
		
		// draw a light gray grid to fill the canvas 
		ctx.lineWidth = 1; // set line thickness
		ctx.strokeStyle = "#CCC"; // set color

		var i = 0;
		for (i = 0; i <= 24; i++) { // 24 vertical lines
			ctx.beginPath();
    		ctx.moveTo(0.5 + i*25, 0.5);
    		ctx.lineTo(0.5 + i*25, 401);
    		ctx.stroke();
		}
		for (i = 0; i <= 16; i++) { // 16 horizontal lines
    		ctx.moveTo(0.5, i*25 + 0.5);
    		ctx.lineTo(600, 0.5 + i*25);
    		ctx.stroke();
		}
	
		// set up the curve
		ctx.beginPath();
		ctx.lineCap = 'round';
		ctx.lineWidth = 6;
	  
		// draw double curve - green
		ctx.strokeStyle = '#7DD497';
		ctx.moveTo(300,10); // start point
		ctx.bezierCurveTo(Ax,Ay,Bx,By,300,390);
	
		// first pair:  "control point" x,y, 
		// then second pair: "control point" x,y, 
		// then last pair: end point x,y
	
		// draw the curve
		ctx.stroke();
	
		// show the two control points as small squares
		ctx.beginPath();
		ctx.fillStyle = '#0C78B3'; // A is dark blue 
		ctx.fillRect(Ax,Ay,10,10);

		ctx.beginPath();
		ctx.fillStyle = '#9DD1ED'; // B is light blue 
		ctx.fillRect(Bx,By,10,10);
		
	} // end function makeCurve() 
	
	makeCurve(); // run the function one time 
	
	// make button A work
	var conA = document.getElementById("controlA");
	conA.onclick = function() { 
		Ax = Math.floor(Math.random() * 590);
		Ay = Math.floor(Math.random() * 390);
		makeCurve(); 
	};

	// make button B work
	var conB = document.getElementById("controlB");
	conB.onclick = function() { 
		Bx = Math.floor(Math.random() * 590);
		By = Math.floor(Math.random() * 390);
		makeCurve(); 
	};

	// make reset button work
	var conReset = document.getElementById("reset");
	conReset.onclick = function() { 
		Ax = 0;
		Ay = 100;
		Bx = 590;
		By = 300;
		makeCurve(); 
	};


}; // end if
}  // end function draw() 
