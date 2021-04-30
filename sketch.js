const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//create the variables
var engine, world;
var polygon_img;
var holder, polygon, ground;
var stand1, stand2;
var ball, slingshot;

function preload(){
  //preload the image
  polygon_img = loadImage("polygon.png");
}

function setup() {
  //create the canvas
  createCanvas(900,400);

  //create the engine and adds up it to the world
  engine = Engine.create();
  world = engine.world;

  //runs the engine
  Engine.run(engine);

  //creates the ground and the stand
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //creates the block (setup 1)
  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);

  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);

  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);

  //level four
  block16 = new Block(390,155,30,40);

  //creates the block (setup 2)
  //level one
  block17 = new Block(639, 175, 30, 40);
  block18 = new Block(669, 175, 30, 40);
  block19 = new Block(699, 175, 30, 40);
  block20 = new Block(729, 175, 30, 40);
  block21 = new Block(759, 175, 30, 40);

  //level two
  block22 = new Block(669, 135, 30, 40);
  block23 = new Block(699, 135, 30, 40);
  block24 = new Block(729, 135, 30, 40);

  //level three
  block25 = new Block(699, 95, 30, 40);

  //create the ball to hit the block
  ball = Bodies.circle(50, 200, 20);
  World.add(world, ball);

  Slingshot = new Polygon(this.ball, {x:100,y:200});
}

function draw(){
  //create the background
  background(56,44,44); 
 
  //write the text
  textSize(20);
  fill("lightyellow");
  text("!!Drag The Mouse To Play!!", 105, 45);
  text("!!Hit as Many Blocks As Much You Can!!", 50, 75);

  //display the ground and the stand
  ground.display();
  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(15);
  
  //display the blocks (setup 1)
  //display the level one blocks
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  //display the level two blocks
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  //display the level three blocks
  block13.display();
  block14.display();
  block15.display();

  //display the level four block
  block16.display();

  //display the block (setup 2)
  //display the level one blocks
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  //display the level two blocks
  block22.display();
  block23.display();
  block24.display();

  //display the level three block
  block25.display();

  //display the image
  imageMode(CENTER);
  image(polygon_img, ball.position.x, ball.position.y, 40, 40);

  //create the ball
  Slingshot.display();
}

//creates the mouseDragged function
function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

//create the mouseReleased function
function mouseReleased(){
  Slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Slingshot.attach(this.ball);
  }
}