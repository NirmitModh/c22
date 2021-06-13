const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,object;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var options = {
    isStatic:true
  }
  object = Bodies.rectangle(200,390,400,20,options);
  World.add(world,object);
  console.log(object);
  var ball_options = {
    restitution:0.5
  }
  ball =Bodies.circle(100,100,30,ball_options);
  World.add(world,ball);
}

function draw() {
  background("green");
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);

  drawSprites();
}
