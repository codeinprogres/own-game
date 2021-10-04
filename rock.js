class Rocks{
    constructor(x,y, width, height, image){
        var options ={
            isStatic : true
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
        this.body = Bodies.rectangle(x, y, width, height, options);

        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,this.x, this.y, this.width, this.height);
        pop();
    }
}