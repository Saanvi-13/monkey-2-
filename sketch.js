
var monkey , monkey_running
var FoodGroup, obstacleGroup
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX = -(6 + 3*survivalTime/100);
  ground.x=ground.width/2;
  console.log(ground.x)
  
  
  

  
}


function draw() {
background("lightblue");
  
  text("SURVIVAL TIME:"+survivalTime,100,50)
 survivalTime= Math.ceil(frameCount/frameRate())
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if (keyDown("space")){
    monkey.velocityY=-10;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
   if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  monkey.collide(ground)
  
  food();
  obstacle();
  drawSprites()
}

function food(){
  if(frameCount % 80 === 0){
    var banana=createSprite(300,200,40,10);
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.y = Math.round(random(10,60))
    banana.velocityX = -3;
    banana.lifetime=200;
    
  }
  
}

function obstacle(){
  if (frameCount % 300 === 0){
    var obstacle=createSprite(200,315,30,40);
    obstacle.velocityX=-6;
    obstacle.addImage(obstacleImage);
  
    obstacle.scale=0.1;
    obstacle.lifetime=100;
  }
    
  }
  







