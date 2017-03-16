var img;

function preload() {
  img = loadImage("126.jpg", "126-b.jpg");
}

function light(sw) {
    var pic;
    if (sw == 0) {
        pic = "126.jpg"
    } else {
        pic = "126-b.jpg"
    }
    document.getElementById('myImage').src = pic;
}
