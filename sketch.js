
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bobobject1, bobobject2, bobobject3, bobobject4, bobobject5;
var rope1, rope2, rope3, rope4, rope5;
var bobDiameter=40;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 800);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(600, 80, 500, 60);

	/*bobobject1 = new Bob(460, 560, 150);
	bobobject2 = new Bob(535, 560, 150);
	bobobject3 = new Bob(610, 560, 150);
	bobobject4 = new Bob(685, 560, 150);
	bobobject5 = new Bob(760, 560, 150);*/
	
startBobPositionX=width/2;
startBobPositionY=height/4+500;
bobobject1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
bobobject2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
bobobject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
bobobject4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
bobobject5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);


	rope1 = new Rope(bobobject1.body, roof.body, bobobject1.body.position.x, roof.body.position.y);
	rope2 = new Rope(bobobject2.body, roof.body, bobobject2.body.position.x, roof.body.position.y);
	rope3 = new Rope(bobobject3.body, roof.body, bobobject3.body.position.x, roof.body.position.y);
	rope4 = new Rope(bobobject4.body, roof.body, bobobject4.body.position.x, roof.body.position.y);
	rope5 = new Rope(bobobject5.body, roof.body, bobobject5.body.position.x, roof.body.position.y);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  roof.display();
  bobobject1.display();
  bobobject2.display();
  bobobject3.display();
  bobobject4.display();
  bobobject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function keyPressed() {
	console.log("key presses")
	if (keyCode === UP_ARROW) {
		console.log("up arrow")

	  Matter.Body.applyForce(bobobject1.body,bobobject1.body.position,{x:-50,y:-40});

	}
}

  
