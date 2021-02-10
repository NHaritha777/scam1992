const Engine= Matter.Engine;
const World= Matter.World;
const Body= Matter.Body;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world, bg2,bg1, suchetadalal,log1,mehta1,slingshot;
var score=0;
var gameState= "onsling";
var backgroundImg;

function preload(){
   bg1= loadImage("nse1.jpg");
   bg2= loadImage("night.jpg");
   //getBackgroundImg();
   jumpSound= loadSound("themesong.m4a");
}

function setup(){
  createCanvas(1350,645);
  
  engine= Engine.create();
  world= engine.world;
    
    suchetadalal= new Dalal(200,50);
    log1= new Log(1130,70,376,20, PI/7);
    log2= new Log(1120,200,365,20, PI/7);
    log3= new Log(1120,330,365,20, PI/7);
    log4= new Log(1110,460,365,20, PI/7);
    log5= new Log(1110,590,360,20, PI/7);
    log6= new Log(940,330,20,540, PI/2);
    log7= new Log(1300,330,20,540, PI/2);
    log8= new Log(1130,260,20,130, PI/7);
    log9= new Log(1130,530,20,130, PI/7);

    mehta1= new Mehta(1150,140);
    mehta2= new Mehta(1050,270);
    mehta5= new Mehta(1200,270)
    mehta3= new Mehta(1150,400);
    mehta4= new Mehta(1050,530);
    mehta6= new Mehta(1200,530);

    slingshot= new SlingShot(suchetadalal.body, {x:200, y:50});
    
}

function draw(){
    background(bg1);
    noStroke()
    textSize(35);
    text("Score:"+ score, width-300,50);

    jumpSound.play();
    suchetadalal.display();  
    log1.display();  log2.display();  log3.display();  log4.display();  log5.display();
    log6.display();  log7.display();   flingshot.display();   mehta1.display();  
    mehta2.display();  mehta3.display();  mehta4.display();   log8.display();  log9.display();
    mehta5.display();  mehta6.display();   
 
}   

function mouseDragged(){
  //if(gameState!== "launched"){
  Matter.Body.setPosition(suchetadalal.body, {x:mouseX , y:mouseY});
  //}
}

function mouseReleased(){
  slingshot.fly();
  //gameState="launched";
}

function keyPressed(){
  if(keyCode=== 32){
    Matter.Body.setPosition(suchetadalal.body,{x:200, y:50});
    slingshot.attach(suchetadalal.body);
  }
}


