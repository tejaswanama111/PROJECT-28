class Stone {
    constructor(x,y,radius) {
        var options = {
            isStatic : false,
            restitution: 0,
            friction: 1,
            denity: 1.2
        }
        this.body = Matter.Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("Images/stone.png")
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 100, 100);
        pop();
    }
}