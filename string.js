class String {
    constructor(body1,pointB) {
        var options = {
            bodyA : body1,
            pointB : pointB,

            stiffness : 1,
            length : 400
        }
        this.string = Matter.Constraint.create(options);
        World.add(world,this.string);
        this.pointB = pointB;
    }
    display() {
        var posA = this.string.bodyA.position
        var pointB = this.pointB;
        push();
        stroke("grey");
        strokeWeight(5);
        line(posA.x,posA.y,pointB.x,pointB.y);
        pop();
    }
}