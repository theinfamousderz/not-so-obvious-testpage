//thanks to https://www.youtube.com/watch?v=KWoJgHFYWxY

var n = 0;
var c = 3;
var colour = 0;
var colourSlider;
function setup() {
	createCanvas(600, 600);
	background(25);
	angleMode(DEGREES);
	colorMode(HSB);
	colourSlider = createSlider(50, 400, 120);
	colourSlider.position(20, 20);
	frameRate(60);
}

function draw() {
	
	colour = colourSlider.value();

	var a = n * 137.5;
	var r = c * sqrt(n);

	var x = r * cos(a) + width/2;
	var y = r * sin(a) + height/2;
	noStroke();
	fill(colour, colour, colour);
	ellipse(x, y, 4 ,4);
	n++;
}

