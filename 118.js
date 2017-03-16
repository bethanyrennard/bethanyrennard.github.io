var img;

function preload() {
  img = loadImage("118.jpg", "118-b.jpg");
}

function light(sw) {
    var pic;
    if (sw == 0) {
        pic = "118.jpg"
    } else {
        pic = "118-b.jpg"
    }
    document.getElementById('myImage').src = pic;
}
