var img;
function preload() {
  img = loadImage("pin.png");
}

function setup() {
  createCanvas(500,500);
  fill(0, 102);
  noStroke();
}

function draw() {
  background(110,164,249);
  image(img, 0, 0, mouseX * 2, mouseY * 2);
}
