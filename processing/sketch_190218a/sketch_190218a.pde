void setup(){
  size(1080,1080);
  background(0);
  noLoop();
}

void draw(){
  for (int i = 0; i < width; i+=10){
    for (int j = 0; j < height; j+=10){
      fill(random(255), random(255), 255);
      //stroke(255);
      if (random(0,1) > 0.50) {
        text("B", i, j);
      } else {
        text("A", i, j);
      }
    }
  }
  saveFrame("alphabets.jpg");
}
