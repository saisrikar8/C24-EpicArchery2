class Archer{
    constructor(x,y,width, height, angle, comp){
        var options = {
            isStatic : true
        }
        
        this.body = Bodies.rectangle(x,y,width, height, options);
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.comp = comp;
        if (comp){
            this.image = loadImage("./assets/computerArcher.png");
        }
        else{
            this.image = loadImage("./assets/playerArcher.png");
        }
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;

        if(! this.comp){
        if (keyIsDown(UP_ARROW) && this.angle > 180.08000000000004){
            this.angle -= 0.02;
        }
        if (keyIsDown(DOWN_ARROW) && this.angle < 181.28000000000065){
            this.angle += 0.02;
        }
    }
        push();

        translate(pos.x, pos.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);

        pop();
    }
}