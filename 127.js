var img;

function preload() {
  img = loadImage("127.jpg", "127-b.jpg");
}

function light(sw) {
    var pic;
    if (sw == 0) {
        pic = "127.jpg"
    } else {
        pic = "127-b.jpg"
    }
    document.getElementById('myImage').src = pic;
}
