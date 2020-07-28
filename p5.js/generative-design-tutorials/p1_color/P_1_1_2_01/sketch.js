// This sketch implements a color wheel which shows changing saturation and brightness based on mouse position
// while varying the hue in measured increments around the color wheel.

// Sets specific values to radius and segment count.
// These values are used in programatically generating the shape. See 'for' loop in draw().

// Segment count determines the number of individual fans within the triangle fan shape.
var segmentCount = 360;

// The fixed radius of the color wheel.
var radius = 300;

function setup() {
  // Sets canvas width and height to 800
  createCanvas(800, 800);
  // Sets shapes to have not have a stroke value
  noStroke();
}

function draw() {
  // Sets the color mode to use HSB and sets width and height to saturation and brightness values
  colorMode(HSB, 360, width, height);

  // Sets background color to white and varies background based on height (y)
  background(360, 0, height);

  // Angle step is value of increments as the sketch progresses across the wheel.
  // This is initialised to the value of 1 since segmentCount is already 360. This means very small increments.
  var angleStep = 360 / segmentCount;

  // We declare a shape with the Triangle fan parameter. This comes out of the box in p5.
  beginShape(TRIANGLE_FAN);
  // We set the origin vertex to the center of the canvas.
  vertex(width / 2, height / 2);

  // The 'for' loop cycles through the range of 360 degrees in increments of angleStep.
  // The values from the loop are then fed into the vertex function.
  // Ultimately, the loop generates a triangle fan shape with the full set of vertexes from the loop.

  for (var angle = 0; angle <= 360; angle += angleStep) {
    // Set the next vertice point (vx, vy) by dividing it with cos and sin values of the angle respectively.
    // The values calculate the points from the center (origin).
    // These values are then multiplied with the radius to get exact x and y co-ordinate value.

    // vx is calculated by adding the origin X value + the cos(angle) multiplied with radius.
    var vx = width / 2 + cos(radians(angle)) * radius;

    // vy is calculated by adding the origin Y value + the sin(angle) multiplied with radius.
    var vy = height / 2 + sin(radians(angle)) * radius;

    // Sets the vertex point to the vx, vy values.
    vertex(vx, vy);

    // Sets the fill in HSB based on angle as Hue, mouseX as saturation, and mouseY as brightness.
    fill(angle, mouseX, mouseY);
  }
  // Ends the shape and creates the Triangle fan shape.
  endShape();
}

// Function defining what happens when a specific key is pressed.
function keyPressed() {
  // If 's' or 'S' is pressed, save an image.
  if (key == "s" || key == "S") saveCanvas(gd.timestamp(), "png");

  // The switch-case statement changes the value of segment count after matching against the key pressed
  switch (key) {
    case "1":
      // If '1' is pressed, set segmentCount to 360
      segmentCount = 360;
      break;
    case "2":
      // If '2' is pressed, set segmentCount to 45
      segmentCount = 45;
      break;
    case "3":
      // If '3' is pressed, set segmentCount to 24
      segmentCount = 24;
      break;
    case "4":
      // If '4' is pressed, set segmentCount to 12
      segmentCount = 12;
      break;
    case "5":
      // If '5' is pressed, set segmentCount to 6
      segmentCount = 6;
      break;
  }
}
