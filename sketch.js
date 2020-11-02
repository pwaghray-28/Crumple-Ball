
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground = new Ground(400,650,800,50)
ball = new Ball(100,600,20)
side1 = new Dustbin(500,590,10,70)
side2 = new Dustbin(750,590,10,70)
side3 = new Dustbin(625,625,250,10)
	
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();
  ball.display();
  side1.display();
  side2.display();
  side3.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
Matter.Body.applyForce(ball.body,ball.body.position,{x:5,y:0});
console.log(ball.body.position.x+"y value"+ball.body.position.y)
	}
}

