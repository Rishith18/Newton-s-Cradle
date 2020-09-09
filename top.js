class Top {
    constructor(x,y) {
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,450,50,options);
        this.width = 450;
        this.height = 50;
        this.color = "grey";

        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill(this.color);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}