class BackgroundAnimation {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.shapes = [];
    this.lineThickness = 1;
  }

  randSpawnCoords() {
    const w = this.canvas.width;
    const h = this.canvas.height;
    const spawnRanges = [
      [[0, w], [-60, -50]],
      [[w + 50, w + 60], [0, h]],
      [[0, w], [h + 50, h + 60]],
      [[-60, -50], [0, h]]
    ];
    const randSide = Math.floor(Math.random() * 4);
    const xMin = spawnRanges[randSide][0][0];
    const xMax = spawnRanges[randSide][0][1];
    const yMin = spawnRanges[randSide][1][0];
    const yMax = spawnRanges[randSide][1][1];

    const randX = this.randCoord(xMin, xMax);
    const randY = this.randCoord(yMin, yMax);
    return [randX, randY];
  }

  randCoord(min, max) {
    const range = max - min;
    return Math.random() * range + min;
  }

  createShapes(number) {
    for (let i = 0; i < number; i++) {
      const shape = this.newRandomShape();
      this.shapes.push(shape);
    }
  }

  newRandomShape() {
    const shapes = [Circle, Rectangle];
    const randInt = Math.floor(Math.random() * shapes.length);
    const shape = shapes[randInt];
    const randCoords = this.randSpawnCoords();
    return new shape(this.canvas, randCoords[0], randCoords[1]);
  }

  handleShapes() {
    for (let i = 0; i < this.shapes.length; i++) {
      const shape = this.shapes[i];
      shape.update();
      if (shape.isOffScreen()) {
        this.shapes.splice(i, 1);
        this.shapes.push(this.newRandomShape());
      }
    const fadeBoundary = canvas.height - 200;
    if (shape.y > fadeBoundary) {
      const distIntoFade = (shape.y - this.canvas.height) + 100;
      const opacityChange = distIntoFade / 100;
      const newOpacity = 1 - opacityChange;
      shape.lineColor = `rgba(255, 255, 255, ${newOpacity})`;
    }
      shape.draw(shape.lineColor, this.lineThickness);
    }
  }

  animate = () => {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.handleShapes();
    requestAnimationFrame(this.animate);
  }
}