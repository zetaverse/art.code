void setup() {
  size(1080, 1080);
  noLoop();
  background(0);
}

void draw() { 
  for(int i = 0; i <= width; i+=40) {
    for(int j = 0; j <= height; j+=40) {
      fill(random(255),random(255),150);
      //line(i, j, 10, 10);
      stroke(random(200,255));
      smooth();
      ellipse(i, j, 10, 10);
      rect(i + 15, j + 15, random(10, 20), random(10, 20));
    }
  }
  saveFrame("grid-ellipse-rect-011.jpg");
}
    
