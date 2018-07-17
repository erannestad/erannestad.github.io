function setup() {
  createCanvas(720, 400);
  stroke(255);
  noFill();
}

function draw() {
  background(0);
  for (var i = 0; i < 50000; i += 10) {
    bezier(mouseX-(i/2.0), -800+i, 700, 70, 300, 700, 400-(i/50.0), 300+(i/60.0));
  }
}
