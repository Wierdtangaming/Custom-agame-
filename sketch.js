var canvas, backgroundImage;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var jumpcharge;
var frames,enemy,score;

function preload(){

  ground_img = loadImage("images/bg.png");
  grounds = [];
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  engine = Engine.create();
  world = engine.world;
  
  ground1 = new Ground(600,1000,displayWidth,400)
  grounds.push(ground1);
  console.log(grounds)
  jumpcharge = 1;
  player = new Player(displayWidth/8,displayHeight-255);
  game = new Game();
  player.body.collide(ground1.body);
  frames = 0;
  console.log("setup done")
  enemy = new Enemy();
}


function draw(){
  background("white");

  player.display();

  game.play();
  
  if (frames % 100 === 0){
    console.log("JUMP CHARGED")
    jumpcharge = 1;
  }
 if (frames % 100 === 0){

 }
 var shape = beginShape(TRIANGLE_FAN);
 vertex(80, 100);
 vertex(80, 150);
 vertex(106, 120);
 vertex(80, 105);
 vertex(122, 150);
 vertex(80, 150);
 endShape();
 World.add(world,shape);

}
