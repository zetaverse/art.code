const canvasSketch = require('canvas-sketch');
const { lerp } = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');
const palettes = require('nice-color-palettes');

const settings = {
  dimensions: [ 2048, 2048 ]
};

const sketch = () => {
  const palette = random.pick(palettes);

  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    
    for (let i = 0; i <= width - 1; i+=50) {
      for (let j = 0; j <= height - 1; j+=50) {
        const color = random.pick(palette)
        context.fillRect(i, j, 40, 40);
        context.fillStyle = color;
        context.fill();
        }
      }
    }
  };

canvasSketch(sketch, settings);
