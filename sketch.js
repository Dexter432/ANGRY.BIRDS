const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;


var sling
var engine, world;
var box1,box2,box3,box4,box5
var solo;
var angrybird;
var pig1,pig2;
var log1,log2,log3,log4;
var backgroundimage
var plataforma
var chain
function preload(){
backgroundimage = loadImage("bg.png")
}
    
 
function setup(){
    var canvas = createCanvas(1800,800);
    engine = Engine.create();
    world = engine.world;
    angrybird = new AngryBird(10,9);
    solo=new Chao(900,height,width,20);
     plataforma=new Chao(150,705,300,170);
    pig1=new Pig(1450,765);
    pig2=new Pig(1450,679);
    box1 = new Box(1300,760,60,60);
    box2 = new Box(1600,760,60,60);
    box3 = new Box(1300,685,60,60);
    box4 = new Box(1600,700,60,60);
    box5 = new Box(1450,600,60,60);
    log1 = new Log(1450,720,400,PI/2)
    log2 = new Log(1450,640,400,PI/2)
    log3 = new Log(1400,560,130,PI/7)
    log4 = new Log(1500,560,130,-PI/7)
    sling= new Sling(angrybird.body,{x:200,y:450})
   // log5 = new Log(50,50,100,PI/2)
    //chain= new Chain(angrybird.body,log5.body)
    //chain2=new Chain(pig1.body,pig2.body)
}

function draw(){
    background(backgroundimage);
    Engine.update(engine);
    box1.display();
    solo.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    angrybird.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    plataforma.display();
   // log5.display();
    //chain.display();
    sling.display();

}
function mouseDragged(){
 Matter.Body.setPosition(angrybird.body,{x:mouseX,y:mouseY}) 

}
function mouseReleased(){
    sling.fly()
}
  function keyPressed(){
      console.log("tecla apertada")
   if(keyCode===32){
       console.log("espaço")
    sling.attach(angrybird.body)   
   }   
  }