// JavaScript for drawing on canvas
// arcs & circles

window.onload = draw; // calls the function named "draw"

function draw() {
var canvas = document.getElementById('myCanvas'); // canvas with id="myCanvas"
if (canvas.getContext) {
	var ctx = canvas.getContext('2d');
	ctx.beginPath();

	ctx.arc(100,100,100,0,Math.PI*2,true); // circle
	ctx.arc(100,100,50,0,Math.PI*2,true); // smaller circle inside
	// note, "pen" not picked up to move it
	
	ctx.moveTo(335,100); // note 335 here; below, it's 300 & 35 (total 335)
	ctx.arc(300,100,35,0,Math.PI,true);  // mouth (false is counterclockwise)
	ctx.moveTo(280,30);
	ctx.arc(275,30,5,0,Math.PI*2,true);  // left eye
	ctx.moveTo(335,30);
	ctx.arc(330,30,5,0,Math.PI*2,true);  // right eye
	ctx.stroke();
	
	// here's the little colored circle, bottom left
	ctx.beginPath();
	ctx.moveTo(335,250);
	ctx.arc(300,250,35,0,Math.PI*2);
	
	ctx.fillStyle = "#C924C7";
	ctx.fill();
	
	ctx.lineWidth = 20;
	ctx.strokeStyle = "#775FA1";
	ctx.stroke();
	
	// here's the other colored circle, bottom right
	ctx.beginPath();
	ctx.moveTo(435,250);
	ctx.arc(400,250,35,0,Math.PI*2);
	
//	ctx.fillStyle = "#C924C7";
	ctx.fill();
	
	ctx.lineWidth = 5;
//	ctx.strokeStyle = "#775FA1";
	ctx.stroke();

  	}
}
