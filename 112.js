var img;

function preload() {
  img = loadImage("112.jpg", "112-b.jpg");
}

function light(sw) {
    var pic;
    if (sw == 0) {
        pic = "112.jpg"
    } else {
        pic = "112-b.jpg"
    }
    document.getElementById('myImage').src = pic;
}
