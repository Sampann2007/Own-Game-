var hero;
var hero1,hero2,backgroundImg;
var barrelImg;
var score=0;
var heroJump;
var ground;
var boxImg;
var gameState = "play";
var anchorImg;
var heroStand;
var button;
var ghostImg;



function preload(){
  hero1=loadAnimation("Images/run1.png","Images/run2.png","Images/run3.png","Images/run4.png");
  hero2=loadAnimation("Images/leftrun.jpg","Images/prejump.jpg");
  heroStandImg=loadAnimation("Images/run2.png");

  backgroundImg=loadImage("Images/Background.jpg");
  barrelImg=loadImage("Images/Barrel.png");
  boxImg=loadImage("Images/Box-removebg-preview.png");
  heroStand=loadImage("Images/run1.png");
  anchorImg=loadImage("Images/Anchor-removebg-preview.png");
  ghostImg=loadImage("Images/Ghost-removebg-preview.png");
}
function setup(){
  createCanvas(displayWidth,displayHeight-200);

  hero=createSprite(100,200,10,10);
  hero.addAnimation("heroStand",heroStandImg);

  
  
  ground=createSprite(600,500,2000,10)
  ground.visible=false;
  barrelGroup= new Group();
  anchorGroup= new Group();
  ghostGroup= new Group();


}
function draw(){
  background(backgroundImg);
  text("Score: "+score,500,500);
  hero.velocityX=0;

  if(gameState==="play")
  {
   

    
    
    score = score + Math.round(getFrameRate()/60);
    
  
    if(keyDown("space")&&hero.y>350){
        hero.velocityY=-25
        hero.addAnimation("heroJ",hero2);  //NOT WORKING
        hero.changeAnimation("heroJ",hero2);
      } 
    
  

    if(keyWentDown(RIGHT_ARROW)&&hero.x<displayWidth/2){
        hero.velocityX=2;
        hero.addAnimation("hero",hero1);
        hero.changeAnimation("hero",hero1)

      }
    if(keyWentUp(RIGHT_ARROW)&&hero.x<displayWidth/2){
        hero.velocityX=2;
        hero.addAnimation("hero",hero1);
        hero.changeAnimation("hero",hero1)

      }

    if(keyWentDown(LEFT_ARROW)&&hero.x>0){
        hero.velocityX=-2;
        hero.addAnimation("hero",hero1);
        hero.changeAnimation("hero",hero1);
      }
    if(keyWentUp(LEFT_ARROW)&&hero.x>0){
        hero.velocityX=-2;
        hero.addAnimation("hero",hero1);
        hero.changeAnimation("hero",hero1)
      }

    if(hero.isTouching(anchorGroup)){
        gameState="end";
      }
    }

  if(gameState==="end"){
        button=createSprite(displayHeight/2,displayWidth/2,50,50);
     }

  hero.velocityY=hero.velocityY+1
  hero.collide(ground);

  barrel();
  Box();
  anchor();
  ghost();
     
    
  drawSprites();
  
}
function barrel(){
  if(frameCount%200===0){
    var barrel=createSprite(1000,450,10,10);
    barrel.addImage("barrel",barrelImg);
    barrel.scale=0.5;
    barrel.velocityX=-7
    barrel.setLifeTime=140;
    barrelGroup.add(barrel)
    

    var barrel2=createSprite(900,450,10,10);
    barrel2.addImage("barrel",barrelImg);
    barrel2.scale=0.5;
    barrel2.velocityX=-7
    barrel.setLifeTime=140;
    barrelGroup.add(barrel2)


    var barrel3=createSprite(950,350,10,10);
    barrel3.addImage("barrel",barrelImg);
    barrel3.scale=0.5;
    barrel3.velocityX=-7
    barrel.lifetime=140;
    barrelGroup.add(barrel3)

    
   

  

  }
}
function Box(){
  if(frameCount%100===0){
    var box1=createSprite(displayWidth+10,400,20,20);
    box1.addImage(boxImg);
    box1.lifetime=140;

    box1.velocityX=-7
    box1.scale=0.5;

    var box2=createSprite(displayWidth+10,400,20,20);
    box2.addImage(boxImg);
    box2.lifetime=140;
    box2.velocityX=-7
    box2.scale=0.5;

    var box3=createSprite(displayWidth+10,500,20,20);
    box3.addImage(boxImg);
    box3.lifetime=140;
    box3.velocityX=-7
    box3.scale=0.5;
  }
  
}
function anchor(){
  if(frameCount%200===0){
    var anchor1=createSprite(random(0,displayWidth/2),-50,50,50);
    anchor1.velocityY=8;
    anchor1.addImage(anchorImg);
    anchor1.lifetime=140
    anchorGroup.add(anchor1)
    
    anchor1.setCollider("rectangle",0,0,80,80)
  }
}
function ghost(){
  if(frameCount%100===0){
    var ghost=createSprite(random(0,displayWidth/2),displayHeight,50,50);
    ghost.velocityY=-8;
    ghost.addImage(ghostImg);
    ghost.lifetime=140
    ghostGroup.add(ghost)
    

  }
}