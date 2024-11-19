const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const SQUARE_SIZE = 30;
const MAX_WIDTH = 2000;

const resizeCanvas = () => {
  canvas.width = document.documentElement.scrollWidth;
  canvas.height = document.documentElement.scrollHeight;
};

const getRandomColor = () =>
  `rgba(${[...Array(3)]
    .map(() => Math.floor(Math.random() * 256))
    .join(',')}, 0.8)`;

const drawGrid = () => {
  const cols = Math.ceil(canvas.width / SQUARE_SIZE);
  const rows = Math.ceil(canvas.height / SQUARE_SIZE);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * SQUARE_SIZE;
      const y = row * SQUARE_SIZE;

      ctx.fillStyle = getRandomColor();
      ctx.fillRect(x, y, SQUARE_SIZE, SQUARE_SIZE);
      ctx.strokeRect(x, y, SQUARE_SIZE, SQUARE_SIZE);
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  resizeCanvas();
  drawGrid();
  window.addEventListener('resize', () => {
    resizeCanvas();
    drawGrid();
  });
});
