var monkey , monkey_running

var banana ,bananaImage, obstacle, obstacleImage

var ground

var bananaGroup, obstacleGroup

var score

function preload(){
  
monkey_running =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
bananaImage = loadImage("banana.png");
obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(80,315,20,50);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  ground=createSprite(400,340,900,120);
  ground.x = ground.width/2;
  ground.shapeColor="green";
  ground.velocityX = -4;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  score=0;
  
}


function draw() {
background("skyblue");
  
if(ground.x<0){
ground.x=ground.width/2;    
}
  
  
  

if(keyDown("space") && monkey.y>100){
monkey.velocityY= -10; 
}
  
monkey.velocityY=monkey.velocityY+0.8;  
  
monkey.collide(ground); 

spawnBananas();
spawnObstacles();
  
drawSprites();

if(obstacleGroup.isTouching(monkey)){
monkey.velocityY=0;
ground.velocityX=0;
bananaGroup.setVelocityXEach(0);
bananaGroup.setLifetimeEach(-1);
obstacleGroup.setVelocityXEach(0);
obstacleGroup.setLifetimeEach(-1);
 }
  
  
fill("black");
score=Math.ceil(frameCount/frameRate()); 
text("Survival Time:"+score,50,50);
}

function spawnBananas(){
  if(frameCount%80===0){
    banana=createSprite(600,250);
    banana.addImage(bananaImage);
    banana.y=Math.round(random(120,200));
    banana.velocityX= -5;
    banana.lifetime=300;
    banana.scale=0.05;
    bananaGroup.add(banana);
  }  
}

function spawnObstacles(){
  if(frameCount%150===0){
    obstacle=createSprite(800,250);
    obstacle.addImage(obstacleImage);  
    obstacle.velocityX= -4;  
    obstacle.lifetime=300;
    obstacle.scale=0.15;
    obstacleGroup.add(obstacle);
  }
  
}
