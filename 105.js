var img;

function preload() {
  img = loadImage("105.jpg", "105-b.jpg");
}

function light(sw) {
    var pic;
    if (sw == 0) {
        pic = "105.jpg"
    } else {
        pic = "105-b.jpg"
    }
    document.getElementById('myImage').src = pic;
}
