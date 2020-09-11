// This sketch draws an interactive radial shape which changes based on mouse movement in the x and y directionsp5.BandPass()
function setup() {
  createCanvas(800, 800);

  // This sets the stroke corners of the shape to a square shape
  strokeCap(SQUARE);
}

function draw() {
  // Sets the background to white
  background(255);

  // Moves the origin of the shape to the center of the canvas
  translate(width / 2, height / 2);

  // Declares a variable which holds the mouse movement value in the Y directionp5.BandPass()
  // The value of this circleResolution is mapped to a range between 2 - 80. Normal value range is 0 to height.
  var circleResolution = int(map(mouseY, 0, height, 2, 80));

  // The radius is calculated based on the difference between the mouseX position and the center co-ordinate of the X axis.
  var radius = mouseX - width / 2 + 0.5;

  // The angle is calculated by dividing the circle Resolution from the constant TAU.
  var angle = TWO_PI / circleResolution;

  // Sets the strokeweight as a function of mouseY values. This increases the stroke as we move in the Y direction.
  strokeWeight(mouseY / 20);

  // The for loop iterates till the value of the circleResolution and
  // Sets the x and y values a trigonometric function.
  for (var i = 0; i <= circleResolution; i++) {
    var x = cos(angle * i) * radius;
    var y = sin(angle * i) * radius;

    // This draws a line from the origin with the new X and Y values as inputs to the shape.
    line(0, 0, x, y);
    //vertex(x, y);
  }
  //endShape(CLOSE);
}

// Saves the image.
function keyPressed() {
  if (key == "s" || key == "S") saveCanvas(gd.timestamp(), "png");
}
