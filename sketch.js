// Daniel Shiffman
// http://codingtra.in
// https://youtu.be/CKeyIbT3vXI

const fireworks = [];
let gravity;

var firr1,fire2,fire3;
var im1, start;
var btn;
var launch=0;


function preload(){
  fire1=loadSound("firew1.mp3");
  fire2=loadSound("firew2.mp3");
  fire3=loadSound("firew3.mp3");
  //im1=loadImage("start2.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  btn=select("#bottone");
  btn.position(width/2-250,height/2-250);
  //btn.hide();
  btn.mousePressed(start);
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(4);
  background(0);
}

function draw() {
  colorMode(RGB);
  
  background(0, 0, 0, 25);
  //start=image(im1,width/2-250,height/2-250);
  //var check=start.style.visibility == "visible";
  
  if (random(1) < 0.04 && launch==1) {
    fireworks.push(new Firework());
    fire3.setVolume(0.15);
    fire3.play();
  }
  
  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    
    
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
      fire2.play();
    }
  }
}

function start(){
  launch=1;
  btn.hide()
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
