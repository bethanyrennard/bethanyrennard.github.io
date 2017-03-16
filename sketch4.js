var img;
function preload() {
  img = loadImage("plane.png");
}

function setup() {
  createCanvas(500,500);
  background(215, 148, 133);
  noStroke();
}

function draw() {
  translate(mouseX, mouseY);
  image(img, 0, 0, mouseX * 2, mouseY * 2);
  onclick='window.location.href="choiceI-html"'

}
