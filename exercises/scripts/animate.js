// JavaScript for simple animation on canvas 

window.onload = init; // calls the function named "init"

// used in timer, below
var newInterval;


// set up the images and call the main function, "draw"
var bgImage   = new Image();
var motoImage = new Image();
function init() {
	bgImage.src   = "images/sketch.jpg";
	motoImage.src = "images/motorcycle.png";
	draw();
}


function draw() {
	var ctx = document.getElementById('motoCanvas').getContext('2d');
	
	ctx.drawImage(bgImage, 0, 0, 600, 450); // show the background

	// make an Object with properties
	// be careful with the punctuation! 
	var moto = {
		factor: 0.991,
		x: -600, // places it offstage, left
		y: 400,
		w: motoImage.width,
		h: motoImage.height
	}

	var render = function () {
		if (moto.x < 650) {
			ctx.drawImage(bgImage, 0, 0); // must redraw bgImage each time
			ctx.drawImage(motoImage, moto.x, moto.y, moto.w, moto.h);
		// the next four lines will be changing the values each time 
		// this function runs -- this is the ENGINE of the animation! 
			moto.x += 10; // move 10 px to right
			moto.y -= 2.5;  // move 3 px closer to top
			moto.w = moto.w * moto.factor; // decrease size
			moto.h = moto.h * moto.factor; // decrease size
		} else {
			clearInterval(newInterval); // kills the timer
			// reset everything so we can replay it
			moto.x = -600;
			moto.y = 400;
			moto.w = motoImage.width;
			moto.h = motoImage.height;
		}	
	}

	// press the Return/Enter key to play the animation
	document.body.onkeydown = function(e) {  // listen for a key
    	e = event || window.event;             // any kind of event
    	var keycode = e.charCode || e.keyCode; // any kind of key
    	if(keycode === 13) {  // only the Return or Enter key
    		// call the "render" function on a timer that will repeat it
    		// larger numbers are slower (in milliseconds)
        	newInterval = setInterval(render, 10); 
    	}
	}

} // close draw() 
