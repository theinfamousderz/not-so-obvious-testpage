
var rSlider;
var gSlider;
var bSlider;
var sizeSlider;
var button;

function setup() {
	createCanvas(800, 600);
	background(25);
	rSlider = createSlider(0, 255, 100);
  	rSlider.position(20, 20);
  	gSlider = createSlider(0, 255, 0);
  	gSlider.position(20, 50);
  	bSlider = createSlider(0, 255, 255);
  	bSlider.position(20, 80);
  	sizeSlider = createSlider(5, 50, 20);
  	sizeSlider.position(20, 110);
  	button = createButton('Clear');
  	button.position(60, 140);
  	button.mousePressed(clearBoard);
	frameRate(120);
}
function draw() {
	var r = rSlider.value();
  	var g = gSlider.value();
  	var b = bSlider.value();
  	var size = sizeSlider.value();
  	noStroke();
  	fill(25);
  	rect(0, 0,size*2, size*2);
  	fill(r, g, b);
	ellipse(0+size,0+size, size, size);
	if(mouseIsPressed)
		ellipse(mouseX, mouseY, size, size);
}

function clearBoard(){
	background(25);
}