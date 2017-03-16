var img;

function preload() {
  img = loadImage("106.jpg", "106-b.jpg");
}

function light(sw) {
    var pic;
    if (sw == 0) {
        pic = "106.jpg"
    } else {
        pic = "106-b.jpg"
    }
    document.getElementById('myImage').src = pic;
}
