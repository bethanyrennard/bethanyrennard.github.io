var img;

function preload() {
  img = loadImage("117.jpg", "117-b.jpg");
}

function light(sw) {
    var pic;
    if (sw == 0) {
        pic = "117.jpg"
    } else {
        pic = "117-b.jpg"
    }
    document.getElementById('myImage').src = pic;
}
