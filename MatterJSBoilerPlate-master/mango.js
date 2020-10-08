class Mango {
  constructor(x,y,radius) {
      var options = {
          isStatic : true,
          restitution: 0,
          friction: 1
      }
      this.body = Matter.Bodies.circle(x,y,radius,options);
      this.radius = radius;
      this.image = loadImage("Images/mango.png")
      World.add(world, this.body);
  }

  display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, 80, 80);
      pop();
  }
}