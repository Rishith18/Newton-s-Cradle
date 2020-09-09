
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var top1,string1,ball1,string2,ball2,string3,ball3,string4,ball4,string4,ball4;

function setup() {
	createCanvas(600, 600);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

  	top1 = new Top(300,50);
    ball1 = new Ball(300,100);
	string1 = new String(ball1.body,{x:300,y:50});
	ball2 = new Ball(120,100);
	string2 = new String(ball2.body,{x:120,y:50});
	ball3 = new Ball(210,100);
	string3 = new String(ball3.body,{x:210,y:50});
	ball4 = new Ball(390,100);
	string4 = new String(ball4.body,{x:390,y:50});
	ball5 = new Ball(480,100);
	string5 = new String(ball5.body,{x:480,y:50});
  
}


function draw() {
  background(0);

  top1.display();
  string1.display();
  ball1.display();
  string2.display();
  ball2.display();
  string3.display();
  ball3.display();
  string4.display();
  ball4.display();
  string5.display();
  ball5.display();
}
function mouseDragged() {
    Matter.Body.setPosition(ball2.body,{x:mouseX,y:mouseY});
}



