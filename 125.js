var img;

function preload() {
  img = loadImage("125.jpg", "125-b.jpg");
}

function light(sw) {
    var pic;
    if (sw == 0) {
        pic = "125.jpg"
    } else {
        pic = "125-b.jpg"
    }
    document.getElementById('myImage').src = pic;
}
