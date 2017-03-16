var img;

function preload() {
  img = loadImage("128.jpg", "128-b.jpg");
}

function light(sw) {
    var pic;
    if (sw == 0) {
        pic = "128.jpg"
    } else {
        pic = "128-b.jpg"
    }
    document.getElementById('myImage').src = pic;
}
