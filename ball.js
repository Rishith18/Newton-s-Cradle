class Ball {
    constructor(x,y) {
        var options = {
            restitution : 1.3,
            density : 1.5
        }
        this.body = Bodies.circle(x,y,45,options);
        this.diameter = 90;
        this.color = "grey";

        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        fill(this.color);
        circle(pos.x,pos.y,this.diameter);
        pop();
    }
}