const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	boy = new Boy(250, 600, 300, 300);
    stoneObj = new Stone(160,530,30);
	ground = new Ground(600,690,1200,20);
	tree = new Tree(900,500,700,700);
	mango1 = new Mango(700, 450, 10);
	mango2 = new Mango(800, 300, 10);
	mango3 = new Mango(900, 420, 10);
	mango4 = new Mango(1000, 290, 10);
	mango5 = new Mango(1100, 400, 10);
	slingShot = new Slingshot(stoneObj.body, {x:160, y:530});
    
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(200);

 detectCollision(stoneObj, mango1);
 detectCollision(stoneObj, mango2);
 detectCollision(stoneObj, mango3);
 detectCollision(stoneObj, mango4);
 detectCollision(stoneObj, mango5);

  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  boy.display();
  stoneObj.display();
  ground.display();
  slingShot.display();
  
}

function detectCollision(lstone, lmango) {
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance <= lmango.r + lstone.r)
	{
		Matter.Body.setStatic(lmango.body, false);
	}
}

function mouseDragged() {
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY })
}

function mouseReleased() {
  slingShot.fly();
}
