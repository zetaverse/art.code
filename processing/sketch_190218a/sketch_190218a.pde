void setup(){
  size(800,800);
  background(0);
  noLoop();
}

void draw(){
  for (int i = 0; i < width; i+=10){
    for (int j = 0; j < height; j+=10){
      fill(random(255), random(255), 100);
      stroke(255);
      if (random(0,1) > 0.50) {
        text("|", i, j);
      } else {
        text("/", i, j);
      }
    }
  }
  saveFrame("grid-char-010.jpg");
}
      
