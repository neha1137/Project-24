class ComputerArcher{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.image=loadImage("./assets/computerArcher.png");
        World . add(world,this.body);
        Matter .Body.setAngle(this.body,PI/2);

    }
    display(){
        var angle=this.body.angle;
        push();
        translate (this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop ();

    }
}