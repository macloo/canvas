// JavaScript for drawing on canvas - Bezier curves 
/* 
	Dragging interaction!
	Script by Mindy McAdams @macloo
	Figured out on my own, without a tutorial (so proud). 
*/ 

window.onload = draw; // calls the function named "draw"

// variables for two control points: squares A and B
var Ax = 0;   // x for A range 0-590
var Ay = 100; // y for A range 0-390
var Bx = 590; // x for B range 0-590
var By = 300; // y for B range 0-390

// variables for dragging
var mouseX = 0;
var mouseY = 0;
var dragging = false;
var posA = false; // determines whether you clicked on square A
var posB = false; // ditto, square B


function draw() {
var canvas = document.getElementById('myCanvas'); // canvas with id="myCanvas"
if (canvas.getContext) {
	var ctx = canvas.getContext('2d');
	
	// event listeners are below the following 4 functions
	
	// respond to mousedown
	function down(e) {
		mouseX = e.clientX - canvas.offsetLeft; // check mouse X position
		mouseY = e.clientY - canvas.offsetTop;  // check mouse Y position
		// determine if you clicked A or B 
		posA = (mouseX >= Ax) && (mouseX <= Ax + 10) && (mouseY >= Ay) && (mouseY <= Ay + 10);
		posB = (mouseX >= Bx) && (mouseX <= Bx + 10) && (mouseY >= By) && (mouseY <= By + 10);
		if (posA || posB) { // if click is on square A or B, can drag 
			dragging = true;
		};
	}
	
	// respond to mousemove - repeats as long as mouse is moving 
	function move(e) {
		if (dragging) {
			mouseX = e.clientX - canvas.offsetLeft; // check mouse X position
			mouseY = e.clientY - canvas.offsetTop;  // check mouse Y position
			if (posA) {
				Ax = mouseX;
				Ay = mouseY;
			}
			if (posB) {
				Bx = mouseX;
				By = mouseY;
			}
			makeCurve(); // redraws everything
		};
	}

	// respond to mouseup
	function up(e) {
		dragging = false;
		makeCurve();
	}

	// respond to mouseout (same actions as mouseup)
	function out(e) {
		dragging = false;
		makeCurve();
	}
	
	// detect mouse activity on the canvas
	canvas.addEventListener('mouseup', up, false);	
	canvas.addEventListener('mouseout', out, false);	
	canvas.addEventListener('mousedown', down, false);
	canvas.addEventListener('mousemove', move, false);	

	
	// this draws everything (once)
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
	
	
}; // end if
}  // end function draw() 
