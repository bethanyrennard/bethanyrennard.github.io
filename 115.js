var img;

function preload() {
  img = loadImage("115.jpg", "115-b.jpg");
}

function light(sw) {
    var pic;
    if (sw == 0) {
        pic = "115.jpg"
    } else {
        pic = "115-b.jpg"
    }
    document.getElementById('myImage').src = pic;
}
