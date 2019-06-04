int count = 0;
void setup() {
  size(1920, 1080);
  //noLoop();
  rectMode(CENTER);
  frameRate(1);
  //background(0);
  //println("hello");
}

void draw() {
  count++;
  if (count == 10) {
     count = 0;
     frameRate(random(1, 25));
     println("hello");
  }
  
  background(0);
  float z = random(0.01,0.3);
  
  for (int y = 0; y < height; y += 10) {
    for (int x = 0; x < width; x += 10) {
      smooth();
      stroke(random(255), random(255));
        if (random(0, 1) > z){
          point(x, y);
      }
      else {
        noStroke();
        fill(random(255), random(255), 200);
        rect(x, y, 5, 5);
     }
    } 
  }
      
  //for (int y = 18; y < height; y += 30) {
  //  for (int x = 18; x < width; x += 30) {
  //    for (int d = 70; d > 0; d -= 4) {
  //      smooth();
  //      stroke(0);
  //      fill(random(255), random(255), 100);
  //      ellipse(x, y, d, d);
  //    } 
  //  }
  //}
 //saveFrame("grid08-015.jpg");  
}
  
