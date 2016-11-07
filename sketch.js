var x, y;
var rcolor, gcolor, bcolor
var xbonus, ybonus

function setup() {
  createCanvas(800, 600);
  noFill();
  background(0);
  noSmooth();
  x = 0;
  y = 0;
  rcolor = 128;
  gcolor = 128;
  bcolor = 128;
  xbonus = .5
  ybonus = .5

}

function draw() {
	x += xbonus;
	y += ybonus;
	xnew = (mouseX-(x/width))/6;
	ynew = (mouseY-(y/height))/6;
	rcolor = random(255);
	gcolor = random(255);
	bcolor = random(255);
	stroke(((x*255/width) + random(-25, 25)), ((((x*255+y*255)/2)/((width+height)/2)) + random(-25, 25)), ((y*255/height, 50) + random(-25, 25)), 150);
	ellipse(x, y, 35, 35);
	stroke(rcolor, gcolor, bcolor, 10);
	line(x, y, xnew, ynew);
	
	if(x>width){
		x=0;
		xbonus += random(-1, .1);
	} 
	if(x<0){
		xbonus += random(-1, 1);
		xbonus = -xbonus;
	}
	if(y>height){
		y = 0;
		ybonus += random(-1, 1);
	}
	if(y<0){
		ybonus += random(-1, 1);
		ybonus = -ybonus;
	}
	
}

function mouseClicked() {
	x = mouseX;
	y = mouseY;
}

function keyTyped() {
	if(key=="r") fill(255, 0, 0, 10);
	if(key=='g') fill(0, 255, 0, 10);
	if(key=='b') fill(0, 0, 255, 10);
	if(key=='w') fill(255, 255, 255, 10);
	if(key=='a') fill(random(255), random(255), random(255), 10)
	if(key=='c') noFill();
	if(key==' ') background(0);
}