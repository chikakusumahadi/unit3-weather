var drops = [];
var gravity = 0.1;
//var growth = 1;

//how to continuously loop rain?

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < random(5000); i++) {
  drops.push(new drop());
  }

}

function drop() {
  this.x = random(width);
  this.y = random(height);
  this.w = 30;
  this.h = 15;
  this.length = random(1,10);
  this.speed = random(0, 2);
  //this.endY = random(200, 300);
  this.falling = true;

  this.show = function() {
    if (this.falling) {
      stroke(255);
      line(this.x, this.y, this.x, this.y + this.length);
    }
  };

  this.fall = function() {
    this.y = this.y + this.speed;
    this.speed = this.speed + gravity;
  };

  this.reset = function() {
    if (this.w > height / 4) {
      this.x = random(width);
      this.y = -10;
      this.length = 10;
      this.speed = 0;
      this.w = 30;
      this.h = 15;
      this.falling = true;
    }
  };
}

function draw() {
  background('rgba(0, 8, 86, 0.8)');
  
  for (var i = 0; i < drops.length; i = i + 1) {
    drops[i].show();
    drops[i].fall();
    drops[i].reset();
  }
  
}
