function setup() {
  createCanvas(400, 400);
  background(255);
  
}


function draw() {
  noStroke();
  fill(0,0,100); 
  ellipse(windowWidth / 2, windowHeight / 2, 100, 100);
  
  fill('rgba(247,217,187,1)');
  noStroke();
  angleMode(DEGREES);
  arc(windowWidth / 2, windowHeight / 2, 300, 300, 90, 270);
  frameRate(10);
  noStroke();
  fill((100) + sin(frameCount*random(0.05, 0.1)) * 300);
  angleMode(DEGREES);
  arc(windowWidth / 2, windowHeight / 2, 250,  250, 0, 180);
  }