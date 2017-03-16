var img;

function preload() {
  img = loadImage("119.jpg", "119-b.jpg");
}

function light(sw) {
    var pic;
    if (sw == 0) {
        pic = "119.jpg"
    } else {
        pic = "119-b.jpg"
    }
    document.getElementById('myImage').src = pic;
}
