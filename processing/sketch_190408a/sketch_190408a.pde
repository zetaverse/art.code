void setup() {
    size(800, 800);
    background(0);
    noLoop();
}

void draw() {
  smooth();
    // base grid 
    for (int i = 0; i <= width; i+= 10) {
        for (int j = 0; j <= height; j+= 10) {
            stroke(random(255), random(255)); //random(255));
            point(i, j);
        }
    }


    // second grid
    for (int x = 50; x < width; x+= 50) {
      for (int y = 50; y < height; y+= 50) {
        noStroke();
        fill(random(255));
        ellipse(x, y, 5, 5);
        }
    }
    

    // circle grid
    for (int n = 100; n < width; n+= 200) {
      for (int m = 100; m < height; m+= 200) {
        noStroke();
        fill(random(200, 255), 0, 0, 25);
        ellipse(n, m, 100, 100);
        fill(random(200, 255), 0, 0, 50);
        ellipse(n, m, 75, 75);
        fill(random(200, 255), 0, 0, 75);
        ellipse(n, m, 50, 50);
        fill(random(200, 255), 0, 0, 100);
        ellipse(n, m, 25, 25);
        }
      }
    
    // circle grid 2
    for(int m = 200; m < height; m+= 200) {
      for (int n = 200; n < width; n+= 200){
        noStroke();
        fill(random(255), random(200,255), 0, random(25, 100));
        ellipse(n, m, 100, 100);
        fill(random(255), random(200,255), 0, random(50, 100));
        ellipse(n, m, 75, 75);
        fill(random(255),random(200,255), 0, random(75, 100));
        ellipse(n, m, 50, 50);
        fill(random(255), random(200,255), 0, 100);
        ellipse(n, m, 25, 25);
        }
      }
   saveFrame("190408a-05.jpg");
 }
 
 
