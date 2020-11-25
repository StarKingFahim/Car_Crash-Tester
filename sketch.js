var car, wall; 
var safeimg,lethalimg,averageimg,mainimg;
var speed, weight; 
//var crash,crashSound;

function preload()
{

 mainimg=loadImage("def car.jpg");
 safeimg=loadImage("safe car.jpg");
 averageimg=loadImage("average car.jpg");
 lethalimg=loadImage("Lethal Car.jpg");

 //crashSound=loadSound("crash.wav");

}

function setup() 
{

  createCanvas(1400,400);

  speed=random(30,100);
  weight=random(700,2500);
  
  car=createSprite(50, 200, 50,50);
  car.shapeColor="white";
  car.addImage(mainimg);
  car.scale=0.7;
  car.mirrorX(-1);
  car.addAnimation("safe",safeimg);
  car.addAnimation("average",averageimg);
  car.addAnimation("lethal",lethalimg);
  car.velocityX=speed;

  wall=createSprite(1340, 200, 40, 200);
  wall.shapeColor="grey";

 //crash.addSound(crashSound);

}

function draw() 
{
  background("black");


//wall.width/2 is the default and the width is decreased to give the illusion of collision

  if (car.x - wall.x < wall.width/5 + car.width/5
    && wall.x - car.x < wall.width/5 + car.width/5)
    {
    car.velocityX=0;
    //crash.play();

    if(((0.5*weight*speed*speed)/22500)>180)
    {
      car.scale=0.2;
      car.changeAnimation("lethal",lethalimg);
    }else if(((0.5*weight*speed*speed)/22500)<80)
    {
      car.scale=0.2;
      car.changeAnimation("safe",safeimg);
    }else if(((0.5*weight*speed*speed)/22500)<180 && ((0.5*weight*speed*speed)/22500)>80)
    {
      car.scale=0.2;
      car.changeAnimation("average",averageimg);
    }

  }

  drawSprites();
}