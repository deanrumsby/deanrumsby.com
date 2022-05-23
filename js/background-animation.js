class BackgroundAnimation {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.shapes = [];
    this.lineThickness = 1;
    this.lineOpacity = '1';
    this.lineColor = `rgba(255, 255, 255, ${this.lineOpacity})`;
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
    const randX = this.randCoord(0, this.canvas.width);
    const randY = this.randCoord(0, this.canvas.height);
    return new shape(this.canvas, randX, randY)
  }

  handleShapes() {
    for (let i = 0; i < this.shapes.length; i++) {
      const shape = this.shapes[i];
      shape.update();
      if (shape.isOffScreen()) {
        this.shapes.splice(i, 1);
        this.shapes.push(this.newRandomShape());
      }
      shape.draw(this.lineColor, this.lineThickness);
    }
  }

  animate = () => {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.handleShapes();
    requestAnimationFrame(this.animate);
  }
}