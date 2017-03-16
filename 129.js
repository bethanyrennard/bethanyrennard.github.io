var img;

function preload() {
  img = loadImage("129.jpg", "129-b.jpg");
}

function light(sw) {
    var pic;
    if (sw == 0) {
        pic = "129.jpg"
    } else {
        pic = "129-b.jpg"
    }
    document.getElementById('myImage').src = pic;
}
