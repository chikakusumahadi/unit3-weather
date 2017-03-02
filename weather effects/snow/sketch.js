//snow

var snow = {
  x:150,
  y:50
};

function setup() {
  createCanvas(600, 400);
  background('rgba(0, 8, 86, 0.8)');
}

function draw() {
  fill(255);
  stroke(255);
  ellipse(snow.x, snow.y, 6, 6);
  
  snow.x = random (0, width);
  snow.y = random (10, height);
  
}

//HOW to project this in the arc?
//function arc() {
  //fill('rgba(0, 8, 86, 0.8)' + snowDrop);
  //noStroke();
  //angleMode(DEGREES);
  //arc(windowWidth / 2, windowHeight / 2, 250,  250, 0, 180);
//}
