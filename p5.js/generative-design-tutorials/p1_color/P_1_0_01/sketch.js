function setup() {
  createCanvas(720, 720);
  noCursor(); // hides the cursor when pointing within canvas

  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER); // sets any rect to take the center of the shape as origin
  noStroke(); // removes strokes from any shapes, such as rects
}

function draw() {
  // Sets the background color to be dynamically changes based on mouse Y position.
  // The Hue value is set by dividing the mouse Y value by 2 thus ensuring that it will always be withing the 360 Hue range.
  // This results in the background changing cycling colors from 0-360 while the mouse scrolls up and down (y axis)
  background(mouseY / 2, 100, 100);

  // Sets the fill color of the next declared shape to dynamically change based on mouse Y position.
  // The Hue value is set by using the halved mouseY value and subtracting it from 360.
  // This results in a steadily decreasing Hue value from 360-0 while the mouse scrolls from y value of 0 to 720, in the next shape.
  fill(360 - mouseY / 2, 100, 100);

  // The shape is constructed by keeping the origin in the center of the canvas.
  // The shape changes dynamically because its height and width variables are constantly changed by the mouseX value.
  rect(360, 360, mouseX + 1, mouseX + 1);
}
