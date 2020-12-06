const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, block,circle;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var block_options ={
        isStatic: true
    }

    block = Bodies.rectangle(200,200,20,20, block_options);
    World.add(world,block);

    var circle_options ={
        isStatic: true
    }

    circle = Bodies.circle(100,150,20,circle_options)
    World.add(world,circle);

    console.log("ground");
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rectMode(CENTER);
    rect(block.position.x,block.position.y,200,200);
    ellipseMode(RADIANS);
    ellipse(circle.position.x,circle.position.y,100,150);
}