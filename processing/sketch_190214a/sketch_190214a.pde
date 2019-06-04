void setup() {
  size(800,800);
  background(0);
  noLoop();
}

void draw() {
  //int x, y;
  //x = 1;
  //y = 1;
   for (int i = 0; i <= width; i+=10) {
     for (int j = 0; j <= height; j+=10) {
       fill(random(255), random(255), 150);
       stroke(255);
       //x++;
       //y++;
       pushMatrix();
       smooth();
       rotate(PI/6.0);
       rect(i, j, 10, 10);
       popMatrix();
      // if (x > 5) {
      //   x = 1;
      // }
      // if (y > 5) {
      //   y = 1;
      //}

     }
   }
   saveFrame("rotating-squares-0005.jpg");
}
