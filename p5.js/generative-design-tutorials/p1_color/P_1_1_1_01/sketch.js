// This sketch implements a grid layout with each grid element having a color fill depending on the mouse movement across the canvas

// Initializing variables. These refer to the value of increments across the grid in X and Y directions.
var stepX;
var stepY;

function setup() {
  // Sets width as 800px and height as 400px
  createCanvas(800, 400);

  // Set the grid cells to not have a stroke value.
  noStroke();

  // Sets the color mode to HSB and defines Hue as width (800), Saturation as height (400), and fixed brightness at 100.
  colorMode(HSB, width, height, 100);
}

function draw() {
  // Sets the value of the step variables in X and Y.
  // The addition of 2 to each is simply to make sure that the values are not very low.
  stepX = mouseX + 2;
  stepY = mouseY + 2;

  // The nested 'for' loop implements the grid across the canvas.
  // The first 'for' loop increments in 'stepY' amount in the Y direction and is constrained by the height of canvas
  for (var gridY = 0; gridY < height; gridY += stepY) {
    // The second (nested) 'for' loop increments in 'stepX' amount in the X direction and is constrained by the width.
    for (var gridX = 0; gridX < width; gridX += stepX) {
      // Sets the Hue value to take in the same value as gridX (X direction). This takes the Hue value from 0 to 800.
      // Sets the Saturation value as a value of a difference between height and gridY value.
      // This makes the saturation value drop as the loop progresses from top to bottom (Y direction)
      // The brightness value is fixed at 100 and is not changes programmatically.
      fill(gridX, height - gridY, 100);

      // The grid cells are drawn as rects. Each rect takes in gridX and gridY as origin values.
      // Origin is top left corner for each rect since the default rectmode sets origin values this way.
      // The size of the grid cells is given by the stepX and stepY variables.
      rect(gridX, gridY, stepX, stepY);
    }
  }
}
