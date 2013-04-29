// my .pde copied from Khan Academy exercise: 
// http://www.khanacademy.org/cs/four-directions/1190307720 

void setup() {
    size(400, 400); // determines the canvas size
    background(51, 71, 97);
    frameRate(60);
    
    // position of the ball
	x = 25; // note: it didn't work when I used "var"
	y = 200;
	// how far the ball moves every time (pixels)
	xspeed = 5;
	yspeed = 5;
	// direction, so I can switch them
	dir = "e";
}

/*
Processing.JS's draw() function is where most of your drawing should take place. The biggest thing to note is that Processing.JS automatically loops the draw() function at whatever frameRate() you specify in your setup(). Because of this automatic looping we're given the loop() and noLoop() methods. 
Source: 
http://joeycadle.com/blog/article/1/2012/22/01/html5-canvas-and-processing-js
*/

void draw() {
    background(51, 71, 97);
    
    // ball
    noStroke();
    fill(235, 14, 235);
    ellipse(x, y, 50, 50);

    // track the ball
    if (dir === "e") {
        if (x > 375) {
            xspeed = -5;
            dir = "sw";
        }
        x = x + xspeed;
    }
    if (dir === "sw") {
        if (y > 375) {
            yspeed = -5;
            dir = "nw";
        } 
        x = x + xspeed;
        y = y + yspeed;
    }
    if (dir === "nw") {
        if (x < 25) {
            xspeed = 5;
            dir = "ne";
        } 
        x = x + xspeed;
        y = y + yspeed;
    }
    if (dir === "ne") {
        if (y < 25) {
            yspeed = 5;
            dir = "se";
        } 
        x = x + xspeed;
        y = y + yspeed;
    }
    if (dir === "se") {
        if (x > 375) {
            xspeed = -5;
            dir = "sw";
        } 
        x = x + xspeed;
        y = y + yspeed;
    }

	loop();
}

void mouseOver() {
	noLoop();
}
void mouseOut() {
	loop();
}
