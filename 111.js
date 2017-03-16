var img;

function preload() {
  img = loadImage("111.jpg", "111-b.jpg");
}

function light(sw) {
    var pic;
    if (sw == 0) {
        pic = "111.jpg"
    } else {
        pic = "111-b.jpg"
    }
    document.getElementById('myImage').src = pic;
}
