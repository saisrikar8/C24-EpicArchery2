class Arrow{
    constructor(x,y,width,height,angle){
        var options = {
            isStatic : true
        };
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.image = loadImage("./assets/arrow.png");

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        push();

        translate(pos.x, pos.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);

        pop();
        Matter.Body.setAngle(this.body, -(PI)/2);
    }
    shoot(){
        var velocity = p5.Vector.fromAngle(playerArcher.angle);
        velocity.mult(20);
        Matter.Body.setStatic(this.body,false);
        Matter.Body.setVelocity(this.body, {x : velocity.x, y: velocity.y});
    }
}