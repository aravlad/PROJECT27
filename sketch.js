
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Ball(400, 500, 100)
	ball2 = new Ball(600, 500, 100)
	ball3 = new Ball(800, 500, 100)
	ball4 = new Ball(1000, 500, 100)
	ball5 = new Ball(1200, 500, 100)

	roof1 = new Roof(400, 25, 1600, 50)
	roof2 = new Roof(600, 25, 1600, 50)
	roof3 = new Roof(800, 25, 1600, 50)
	roof4 = new Roof(1000, 25, 1600, 50)
	roof5 = new Roof(1200, 25, 1600, 50)

	rope1 = new Rope(roof1.body, ball1.body)
	rope2 = new Rope(roof2.body, ball2.body)
	rope3 = new Rope(roof3.body, ball3.body)
	rope4 = new Rope(roof4.body, ball4.body)
	rope5 = new Rope(roof5.body, ball5.body)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();


  roof3.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display(); 
}

function keyPressed(){ 
	if(keyCode === UP_ARROW) 
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-9,y:-9})
}

