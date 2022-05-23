class Shape {
  constructor(canvas, x, y) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.x = x;
    this.y = y;
    this.maxSpeed = 1;
    this.speedX = this.randSpeed(this.maxSpeed);
    this.speedY = this.randSpeed(this.maxSpeed);
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
  }  

  randSpeed(maxSpeed) {
    return Math.random() * maxSpeed * 2 - maxSpeed;
  }

  randLength(min, max) {
    const range = max - min
    return Math.random() * range + min;
  }

  isOffScreen() {
    const offset = 55;
    return (this.x < -offset
      || this.x > canvas.width + offset
      || this.y < -offset
      || this.y > canvas.height + offset
    )
  }
}


class Circle extends Shape {
  constructor(canvas, x, y) {
    super(canvas, x, y);
    this.radius = this.randLength(5, 50);
  }

  draw(color, thickness) {
    this.context.strokeStyle = color;
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.context.lineWidth = thickness;
    this.context.stroke();
  }
}


class Rectangle extends Shape {
  constructor(canvas, x, y) {
    super(canvas, x, y);
    this.height = this.randLength(5, 50);
    this.width = this.randLength(5, 50);
  }

  draw(color, thickness) {
    this.context.strokeStyle = color;
    this.context.beginPath();
    this.context.rect(this.x, this.y, this.width, this.height);
    this.context.lineWidth = thickness;
    this.context.stroke();
  }
}