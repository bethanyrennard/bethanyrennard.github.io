var img;

function preload() {
  img = loadImage("108.jpg", "108-b.jpg");
}

function light(sw) {
    var pic;
    if (sw == 0) {
        pic = "108.jpg"
    } else {
        pic = "108-b.jpg"
    }
    document.getElementById('myImage').src = pic;
}
