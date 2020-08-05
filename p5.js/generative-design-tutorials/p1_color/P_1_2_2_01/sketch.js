// This sketch extracts the color values from the undelying image and paints the pixels on the canvasp5.BandPass()
// The pixel resolution of the canvas is defined by a grid which is further controlled by the position of the mouse.

// Global variable declarations

// The img variable holds the image data.
var img;

// Colors is an array which store all the color values.
var colors = [];

// Sort Mode is the kind of pixel sorting that we want. It is initialised to null.
// The modes are provided by the GD library. Not sure about the functiont they provide.
var sortMode = null;

// The preload function runs once before the setup function. If you are loading data from the internet, then preloading is a good practice.
// The loadImage function loads the image from the path that is specified.
// The second argument is setImage which is a function defined later. It takes the loaded image and assigns it to the img variable.
function preload() {
  loadImage("data/pic1.jpg", setImage);
}

// The setup function runs after the preload function and sets up the canvas.
function setup() {
  createCanvas(600, 600);
  // The mouse will not be visible is noCursor is declared.
  noCursor();
  // No strokes on the rect shapes that we will draw as cells in the grid.
  noStroke();
}

function draw() {
  // The tile count is dynamic. It is set by the mouse position.
  // The max() calculated if the max value between the mouseX variable and 5.
  // This value is then divided from width and then is floored to get a rounded value.
  var tileCount = floor(width / max(mouseX, 5));

  // The size of the rect or pixel is then calculated by dividing tilecount from width.
  var rectSize = width / tileCount;

  // We take the image and call the loadPixels function which gives us access to the pixels of the image.
  // This makes the pixels available for manipulation in the next step.
  img.loadPixels();

  // The for loop traverses the grid and populates the color array with sorted colors.
  for (var gridY = 0; gridY < tileCount; gridY++) {
    // For every step in the Y direction, the second for loop advances in the entire x direction
    for (var gridX = 0; gridX < tileCount; gridX++) {
      // px is declared as the product of gridX and rectsize
      // It is basically the pixel value in the x direction.
      var px = int(gridX * rectSize);
      // Similarly, py is the pixel value in the y direction.
      var py = int(gridY * rectSize);
      // The py value is multipled with the width of the image and then added to px.
      // It is further multiplied by 4.
      var i = (py * img.width + px) * 4;
      // We declare a color value which takes in the i value as Hue and sets the rest of the parameters as increments.
      var c = color(
        img.pixels[i],
        img.pixels[i + 1],
        img.pixels[i + 2],
        img.pixels[i + 3]
      );

      // The resulting color value is then pushed into the Color array.
      colors.push(c);
    }
  }

  // This is a utility function from the Generative design library which sorts the colors based on the mode that is set by the user.
  gd.sortColors(colors, sortMode);

  // This second nested loop draws the pixels using rect. 
  var i = 0;
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      // The fill is set by accessing the color array using the index counter
      fill(colors[i]);
      // The rect is declared with the appropriate values.
      rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);
      // Counter is incremented.
      i++;
    }
  }
}

// This function allows some manual configs by the user.
function keyReleased() {
  if (key == "c" || key == "C")
    writeFile([gd.ase.encode(colors)], gd.timestamp(), "ase");
  if (key == "s" || key == "S") saveCanvas(gd.timestamp(), "png");

  if (key == "1") loadImage("data/pic1.jpg", setImage);
  if (key == "2") loadImage("data/pic2.jpg", setImage);
  if (key == "3") loadImage("data/pic3.jpg", setImage);
  if (key == "4") loadImage("data/pic4.jpg", setImage);

  if (key == "5") sortMode = null;
  if (key == "6") sortMode = gd.HUE;
  if (key == "7") sortMode = gd.SATURATION;
  if (key == "8") sortMode = gd.BRIGHTNESS;
  if (key == "9") sortMode = gd.GRAYSCALE;
}

// This functon is assigns the loaded image to the img variable.
function setImage(loadedImageFile) {
  img = loadedImageFile;
}
