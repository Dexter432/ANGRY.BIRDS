const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2 
var solo;
var angrybird;
var pig1,pig2;
var log1;
function setup(){
    var canvas = createCanvas(1800,800);
    engine = Engine.create();
    world = engine.world;
    angrybird = new AngryBird(10,9);
    solo=new Chao(900,height,width,20);
    pig1=new Pig(1000,720);
    box1 = new Box(1200,760,60,60);
    box2 = new Box(1700,760,60,60);
   log1  = new Log(1280,760,720,PI/2)
   
}

function draw(){
    background("pink");
    Engine.update(engine);
    box1.display();
    solo.display();
    box2.display();
    angrybird.display();
    pig1.display();
    log1.display();
}