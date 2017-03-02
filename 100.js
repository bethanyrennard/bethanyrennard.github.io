var img;

function preload() {
  img = loadImage("100.png", "100-b.png");
}

function light(sw) {
    var pic;
    if (sw == 0) {
        pic = "100.png"
    } else {
        pic = "100-b.png"
    }
    document.getElementById('myImage').src = pic;
}
