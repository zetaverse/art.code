// This sketch demonstrates how you can interpolate between two color values on a grid.
// Interpolation means to figure out the color values between two distinct colors.
// p5 provides a function called lerpColor which creates the intermediate color between two endpoint colors.
// Interpolation is a useful step to implement gradient colors.

// The tileCount variables are initalized and are given values for X and Y directions.
var tileCountX = 2;
var tileCountY = 10;

// We define arrays which hold colors on the left, right and the color values in general.
var colorsLeft = [];
var colorsRight = [];
var colors = [];

// Boolean switch for changing color mode from RGB to HSB
var interpolateShortest = true;

function setup() {
  createCanvas(800, 800);
  colorMode(HSB);
  noStroke();

  // This function switches colors if you click with you mouse. Defined towards the end.
  shakeColors();
}

function draw() {
  // map() takes the mouseX value from 0 to width and maps it to 2-100.
  // The value is then converted to an int and stored as the value of tileCountX.
  tileCountX = int(map(mouseX, 0, width, 2, 100));

  // Similarly, the mouseY value is mapped from 0 - height to 2 - 10.
  // This value is then converted to an int and stored as the value of tileCountY.
  tileCountY = int(map(mouseY, 0, height, 2, 10));

  // The individual tile values for width and height are obtained by dividing the tileCount values from the width and height.
  var tileWidth = width / tileCountX;
  var tileHeight = height / tileCountY;

  // The variable interCol holds the interpolated color value after using lerpColor function in the 'for' loop below.
  var interCol;

  // The 'for' cycles through the grid and creates the interpolated colors.
  // We start with the Y direction.
  for (var gridY = 0; gridY < tileCountY; gridY++) {
    // We define two columns variables and assign them values from the colorLeft and colorRight arrays.
    // The gridY input to the arrays syncs the loop steps to the array color value index.
    var col1 = colorsLeft[gridY];
    var col2 = colorsRight[gridY];

    // We then move in the X direction.
    for (var gridX = 0; gridX < tileCountX; gridX++) {
      // We initialise the amount variable which is required by the lerpColor function.
      // The amount is simply the value by which the color needs to be interpolated between col1 and col2.
      // The gridX is mapped from (0 to tileCountX - 1) to 0 - 1.
      var amount = map(gridX, 0, tileCountX - 1, 0, 1);

      // This function to switch betwen the RGB and HSB color modes.
      // The Keypressed function defined below allows to manually switch between color modes.

      if (interpolateShortest) {
        // switch to rgb
        colorMode(RGB);

        // The lerpColor function calculated the interpolated color.
        // It takes color 1 and color 2 and then creates the color path between the two colors based on the amount defined.
        interCol = lerpColor(col1, col2, amount);
        // switch back
        colorMode(HSB);
      } else {
        interCol = lerpColor(col1, col2, amount);
      }

      //  The fill is then set to the interCol value obtained from the previous step.
      fill(interCol);

      // We get current X position value as a product of gridX and tileWidth.
      // The tileWidth keeps changing since the tileWidth (and tileCountX) is mapped to the mouseX values.
      var posX = tileWidth * gridX;

      // Similar steps as above for the Y position value.
      var posY = tileHeight * gridY;

      // We create a rect which will the color tile and give it positions and width and height values.
      rect(posX, posY, tileWidth, tileHeight);

      // save color for potential ase export
      colors.push(interCol);
    }
  }
}

// This function randomizes the color when the mouse is clicked.
// It also populates the colorsLeft and colorsRight arrays
function shakeColors() {
  for (var i = 0; i < tileCountY; i++) {
    colorsLeft[i] = color(random(0, 60), random(0, 100), 100);
    colorsRight[i] = color(random(160, 190), 100, random(0, 100));
  }
}

// Binding the shakeColor function to react with mouse event.
function mouseReleased() {
  shakeColors();
}

// This function defines exports for Adobe color format swatches and pngs.
// Additionally it provides inputs for manual switch from RGB to HSB
function keyPressed() {
  if (key == "c" || key == "C")
    writeFile([gd.ase.encode(colors)], gd.timestamp(), "ase");
  if (key == "s" || key == "S") saveCanvas(gd.timestamp(), "png");
  if (key == "1") interpolateShortest = true;
  if (key == "2") interpolateShortest = false;
}
