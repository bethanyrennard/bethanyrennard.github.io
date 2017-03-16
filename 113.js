var img;

function preload() {
  img = loadImage("113.jpg", "113-b.jpg");
}

function light(sw) {
    var pic;
    if (sw == 0) {
        pic = "113.jpg"
    } else {
        pic = "113-b.jpg"
    }
    document.getElementById('myImage').src = pic;
}
