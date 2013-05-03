// JavaScript for drawing on canvas
window.onload = draw; // calls the function named "draw"

function draw() {

// --------------------------------------------------------
// canvas with id="myCanvas1" - quadratic curves 
var canvas1 = document.getElementById('myCanvas1'); 
if (canvas1.getContext) {
	var ctx = canvas1.getContext('2d');

	// fill in the background
	ctx.beginPath();
	ctx.fillStyle = '#E8E5DA';
	ctx.fillRect(0,0,600,400);
	
	ctx.beginPath();
	ctx.strokeStyle = '#D18EA9';
	ctx.lineCap = 'round';
	ctx.lineWidth = 6;
  
	// first curve at left
	ctx.moveTo(20,10); // start point
	ctx.quadraticCurveTo(100,50,20,100);
	// "control point" x,y, then end point x,y
  
	// second curve
	ctx.moveTo(50,10);
	ctx.quadraticCurveTo(300,100,50,200);
  
	// third curve, far right
	ctx.moveTo(550,10);
	ctx.quadraticCurveTo(100,100,550,200);

	// bottom curve
	ctx.moveTo(100,350);
	ctx.quadraticCurveTo(250,0,400,350);

	// draw all four curves 
	ctx.stroke();

} // close first if

// --------------------------------------------------------
// canvas with id="myCanvas2" - Bezier curves 
var canvas2 = document.getElementById('myCanvas2'); 
if (canvas2.getContext) {
	var ctx2 = canvas2.getContext('2d');

	// fill in the background
	ctx2.beginPath();
	ctx2.fillStyle = '#E8E5DA';
	ctx2.fillRect(0,0,600,400);

	ctx2.beginPath();
	ctx2.strokeStyle = '#97A9DE';
	ctx2.lineCap = 'round';
	ctx2.lineWidth = 6;
  
	// straight line at top
	ctx2.moveTo(20,10);  // start point
	ctx2.lineTo(570,10); // end point
  
	// first curve
	ctx2.moveTo(20,20); // start point
	ctx2.quadraticCurveTo(275,200,570,20);
	// "control point" x,y, then end point x,y
  
	// draw those two - both medium blue
	ctx2.stroke();

	// double curve - dark blue
	ctx2.beginPath();
	ctx2.strokeStyle = '#4461B8';
	ctx2.moveTo(20,50); // start point
	ctx2.bezierCurveTo(138,200,412,200,570,50);
	// first "control point" x,y, 
	// then second "control point" x,y, 
	// then end point x,y
/* 
	both control points above pull the line down to y = 200 
	cp1x is 1/4 and cp2x is 3/4 
*/
	ctx2.stroke();
  
	// double curve - green
/* 
	this is the one to play with: note that 
	the y points have changed, but not the x points 
*/
	ctx2.beginPath();
	ctx2.strokeStyle = '#7DD497';
	ctx2.moveTo(20,200); // start point
	ctx2.bezierCurveTo(138,-80,412,400,570,200);  
	ctx2.stroke();
	
} // close second if
} // close draw() function
