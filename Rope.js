class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
    var options={
        bodyA: bodyA,
        bodyB: bodyB,
        pointB: {x: this.offsetX, y: this.offsetY}
    }
    this.rope = Constraint.create(options);
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    World.add(world, this.rope);
    }
    display() {
        var pointA = this.rope.bodyA.position;
        strokeWeight(4);
        stroke("blue");
        line(pointA.x,pointA.y,this.offsetX,this.offsetY);
    }
}
    