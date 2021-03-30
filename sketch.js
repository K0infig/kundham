// Namespacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

var box,box2;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,780,1200,20);

    var ball_options ={
        restitution: 1
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);


    box1 = new Box(350,100,70,70);
    console.log(box1.body);
    

    box2 = new Box(400,300,50,100);
    box3 = new Box(400,300,50,50);
    

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);

    
    box1.display();

   box2.display();
   box3.display();
}