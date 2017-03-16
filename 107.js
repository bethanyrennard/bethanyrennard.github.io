var img;

function preload() {
  img = loadImage("107.jpg", "107-b.jpg");
}

function light(sw) {
    var pic;
    if (sw == 0) {
        pic = "107.jpg"
    } else {
        pic = "107-b.jpg"
    }
    document.getElementById('myImage').src = pic;
}
