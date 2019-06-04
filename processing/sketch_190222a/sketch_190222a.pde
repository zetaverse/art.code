void setup() {
  size(1080, 1080);
  background(0);
  noLoop();
  rectMode(CENTER);
}

void draw() {
  //for (int y = 0; y < width; y += 5) {
  //  for (int x = 0; x < height; x += 5) {
  //    stroke(random(255), random(255));
  //    if (random(0, 1) > 0.1){
  //      point(x, y);
  //    }
  //    else {
  //      fill(random(255), random(255), 150);
  //      rect(x, y, 5, 5);
  //   }
       
      //for (int y = -10; y < width; y += 10) {
      //  for (int x = -40; x <= height; x += 10) {
      //    fill(random(255), random(255)); 
      //    ellipse(x + y/3.0, y + x/8.0, 4, 7);
      //  }
      //}
      
      
  for (int y = 18; y < height; y += 40) {
    for (int x = 18; x < width; x += 40) {
      for (int d = 46; d > 0; d -= 4) {
        smooth();
        stroke(0);
        fill(random(255), random(255), 50);
        ellipse(x, y, d, d);
      } 
    }
  }
 saveFrame("grid06-019.jpg");
}
  
