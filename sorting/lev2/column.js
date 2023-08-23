class Column {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.queue = [];
    this.color = {
      r: 150,
      g: 150,
      b: 150,
    };
  }

  moveTo(loc, offset = 1, frameCount = 20) {
    for (let i = 1; i <= frameCount; i++) {
      const t = i / frameCount;
      const u = Math.sin(t * Math.PI);
      this.queue.push({
        x: linear_intepolation(this.x, loc.x, t),
        y:
          linear_intepolation(this.y, loc.y, t) + u * (this.width / 4) * offset,
        r: linear_intepolation(150, 255, u),
        g: linear_intepolation(150, 0, u),
        b: linear_intepolation(150, 0, u),
      });
    }
  }

  jump(frameCount = 20) {
    for (let i = 1; i <= frameCount; i++) {
      const t = i / frameCount;
      const u = Math.sin(t * Math.PI);
      this.queue.push({
        x: this.x,
        y: this.y - u * 30,
        r: linear_intepolation(150, 0, u),
        g: linear_intepolation(150, 255, u),
        b: linear_intepolation(150, 0, u),
      });
    }
  }

  draw(ctx) {
    let change = false;
    if (this.queue.length > 0) {
      const { x, y, r, g, b } = this.queue.shift();
      this.x = x;
      this.y = y;
      change = true;
      this.color = { r, g, b };
    }

    const left = this.x - this.width / 2;
    const top = this.y - this.height;
    const right = this.x + this.width / 2;
    const { r, g, b } = this.color;
    ctx.fillStyle = `rgb(${r},${g},${b})`;
    ctx.beginPath();
    ctx.moveTo(left, top);
    ctx.lineTo(left, this.y);
    ctx.ellipse(
      this.x,
      this.y,
      this.width / 2,
      this.width / 4,
      0,
      Math.PI,
      Math.PI * 2,
      true
    );
    ctx.lineTo(right, top);
    ctx.ellipse(
      this.x,
      top,
      this.width / 2,
      this.width / 4,
      0,
      0,
      Math.PI * 2,
      true
    );
    ctx.fill();
    ctx.stroke();
    return change;
  }
}
