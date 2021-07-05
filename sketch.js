

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var garbo;
var ground;
var left;
var right;
var left_garbage;
var right_garbage;
function preload()
{
	
}

function setup() {
	createCanvas(600, 600);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var garbo_options={
		restitution:.4,
		frictionAir:.01
	  }
	garbo = Bodies.circle(100,200,20,garbo_options);
	World.add(world,garbo);
	

	ground = new Ground(300,590,600,20);
	right =  new Ground(10,300,20,600);
	left =  new Ground(590,300,20,600);
	left_garbage =  new Ground(550,560,10,50);
	right_garbage = new Ground(480,560,10,50);	
	
  
}

function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
	 Body.applyForce(garbo,garbo.position,{x:0.00,y:-0.05});
	}
	if(keyCode===RIGHT_ARROW)
	{
	 Body.applyForce(garbo,garbo.position,{x:0.05,y:-0.00});
	}
	if(keyCode===LEFT_ARROW)
	{
	 Body.applyForce(garbo,garbo.position,{x:-0.05,y:-0.00});
	}
}

function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  ellipse(garbo.position.x,garbo.position.y,20);
  ground.display();
  left_garbage.display();
  right_garbage.display();
  left.display();
  right.display();

}




