// This sketch demonstrates how you can manipulate color values by setting some initial rules.

// We set up the number of tiles that we want across the X and Y directions.
var tileCountX = 50;
var tileCountY = 10;

// These variables create arrays which will hold the values for each aspect of the HSB color mode.
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();

  // Before the drawing begins, we populate the color mode arrays with random values
  // within their individual ranges as defined in the color mode
  for (var i = 0; i < tileCountX; i++) {
    hueValues[i] = random(360);
    saturationValues[i] = random(100);
    brightnessValues[i] = random(100);
  }
}

function draw() {
  // Sets the background to white
  background(0, 0, 100);

  // We constrain the mouse values within the screen and assign them to individual variables.
  var mX = constrain(mouseX, 0, width);
  var mY = constrain(mouseY, 0, height);

  // This is a counter setup for the loop.
  var counter = 0;

  // This function maps the mouse to grid resolution
  var currentTileCountX = int(map(mX, 0, width, 1, tileCountX));
  var currentTileCountY = int(map(mY, 0, height, 1, tileCountY));
  var tileWidth = width / currentTileCountX;
  var tileHeight = height / currentTileCountY;

  // The main drawing loop.
  // For each step in the Y direction, progress across the X direction
  for (var gridY = 0; gridY < tileCountY; gridY++) {
    for (var gridX = 0; gridX < tileCountX; gridX++) {
      // Set the X and Y position, and the index position
      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;
      var index = counter % currentTileCountX;

      // Reach out into the color mode arrays and access their values and set up the fill
      fill(hueValues[index], saturationValues[index], brightnessValues[index]);

      // Create a rect shape with the position values and the size constraints for the tile
      rect(posX, posY, tileWidth, tileHeight);

      // Increment the counter for the next iteration.
      counter++;
    }
  }
}
// This function provides saving capabilities as well as conditional color pallette switching.
function keyPressed() {
  if (key == "s" || key == "S") saveCanvas(gd.timestamp(), "png");

  if (key == "c" || key == "C") {
    // -- save an ase file (adobe swatch export) --
    var colors = [];
    for (var i = 0; i < hueValues.length; i++) {
      colors.push(
        color(hueValues[i], saturationValues[i], brightnessValues[i])
      );
    }
    writeFile([gd.ase.encode(colors)], gd.timestamp(), "ase");
  }

  if (key == "1") {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = random(360);
      saturationValues[i] = random(100);
      brightnessValues[i] = random(100);
    }
  }

  if (key == "2") {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = random(360);
      saturationValues[i] = random(100);
      brightnessValues[i] = 100;
    }
  }

  if (key == "3") {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = random(360);
      saturationValues[i] = 100;
      brightnessValues[i] = random(100);
    }
  }

  if (key == "4") {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = 0;
      saturationValues[i] = 0;
      brightnessValues[i] = random(100);
    }
  }

  if (key == "5") {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = 195;
      saturationValues[i] = 100;
      brightnessValues[i] = random(100);
    }
  }

  if (key == "6") {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = 195;
      saturationValues[i] = random(100);
      brightnessValues[i] = 100;
    }
  }

  if (key == "7") {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = random(180);
      saturationValues[i] = random(80, 100);
      brightnessValues[i] = random(50, 90);
    }
  }

  if (key == "8") {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = random(180, 360);
      saturationValues[i] = random(80, 100);
      brightnessValues[i] = random(50, 90);
    }
  }

  if (key == "9") {
    for (var i = 0; i < tileCountX; i++) {
      if (i % 2 == 0) {
        hueValues[i] = random(360);
        saturationValues[i] = 100;
        brightnessValues[i] = random(100);
      } else {
        hueValues[i] = 195;
        saturationValues[i] = random(100);
        brightnessValues[i] = 100;
      }
    }
  }

  if (key == "0") {
    for (var i = 0; i < tileCountX; i++) {
      if (i % 2 == 0) {
        hueValues[i] = 140;
        saturationValues[i] = random(30, 100);
        brightnessValues[i] = random(40, 100);
      } else {
        hueValues[i] = 210;
        saturationValues[i] = random(40, 100);
        brightnessValues[i] = random(50, 100);
      }
    }
  }
}
