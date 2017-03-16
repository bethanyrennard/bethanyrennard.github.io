var img;

function preload() {
  img = loadImage("124.jpg", "124-b.jpg");
}

function light(sw) {
    var pic;
    if (sw == 0) {
        pic = "124.jpg"
    } else {
        pic = "124-b.jpg"
    }
    document.getElementById('myImage').src = pic;
}
