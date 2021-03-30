class Ground{
    constructor(x,y,width, height){
        var options ={
            isStatic: true
        }
    
        this.body = Bodies.rectangle(x,y,width, height,options);
        World.add(world,this.body);

    }

    display(){

        push()
        fill("brown");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,1200,20);
        pop()

    }
}