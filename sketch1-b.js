function setup() {
  createCanvas(500,500);
  background(250, 212, 210);
  strokeWeight(4);
}

function draw() {
  line(mouseX, mouseY, pmouseX, pmouseY);
  if (mouseIsPressed == true) {
    stroke(252, 157, 6);
  } else {
    stroke(0, 0, 255, 160);
  }
}
