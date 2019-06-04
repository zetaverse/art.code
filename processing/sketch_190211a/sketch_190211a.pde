void setup() {
   size(800, 800);
   noLoop();
   background(0);
}

void draw() {
  int x, y;
  x = 1;
  y = 1;
   for (int i = 0; i <= width; i+=20) {
     for (int j = 0; j <= height; j+=10) {
       fill(random(255), random(255), 50);
       x++;
       y++;
       rect(i, j, x, y);
       if (x > 15) {
         x = 1;
       }
       if (y > 15) {
         y = 1;
       }
       //ellipse(width/2, height/2, 100, 100);
     }
  }
  saveFrame("grid-04.png");
}
