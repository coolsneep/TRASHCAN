/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var button_up;
var button_right;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  button_up = createImg("up.png");
  button_right = createImg("right.png");
  button_up.position(30,30);
  button_right.position(220,30);
  button_up.size(50,50);
  button_right.size(50,50);
  

  button_up.mouseClicked(vForce);
  button_right.mouseClicked(hForce);
  
  var ball_options={
    restitution:0.95
    
  }
   ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.display();
  top_wall.display();
  left.display();
  right.display();
  ellipse(ball.position.x,ball.position.y,20);
  





  Engine.update(engine);
}

function hForce() 
{
  console.log("x");
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}
function vForce() 
{
  console.log("x");
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.0,y:-0.05})
}*/
