var img;

function preload() {
  img = loadImage("EARTH.jpg", "STREET.jpg");
}

function light(sw) {
    var pic;
    if (sw == 0) {
        pic = "EARTH.jpg"
    } else {
        pic = "STREET.jpg"
    }
    document.getElementById('myImage').src = pic;
}
