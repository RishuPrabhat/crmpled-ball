
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper1 = new paper(200,200);
	dustbin1 = new dustbin(600,660,20,100)
    dustbin2 = new dustbin(570,660,100,20)
	dustbin3 = new dustbin(630,660,100,20)
	ground = new ground(400,680,20,700)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
   this.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
  }

}














