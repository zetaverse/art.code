void setup() {
   size(800, 800);
   //noLoop();
   background(0);
}

void draw() {
  //int x, y;
  //x = 1;
  //y = 1;
   for (int i = 0; i <= width; i+=10) {
     for (int j = 0; j <= height; j+=20) {
       fill(random(255), random(255), 0);
       //x++;
       //y++;
       rect(i, j, 5, 5);
       //if (x > 5) {
       //  x = 1;
       //}
       //if (y > 10) {
       //  y = 1;
       //}
       //ellipse(width/2, height/2, 100, 100);
     }
  }
  saveFrame("nested-grid-003.png");
}
