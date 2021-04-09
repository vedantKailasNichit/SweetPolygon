class Block {
    constructor(x, y, w, h) {
      const options = {
        restitution: 0.5
      };
      this.body = Matter.Bodies.rectangle(x, y, w, h, options);
      Matter.World.add(world, this.body);
      this.w = w;
      this.h = h;
    }
  
    display() {
      const pos = this.body.position;
      const angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      noStroke()
      rectMode(CENTER);
      rect(0, 0, this.w, this.h);
      pop();
    }
}