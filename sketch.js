var wall,thikness;

var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);


speed=random(223,321);
weight=random(30,52);
thikness=random(22,83);

bullet=createSprite(50,200,30,15)
bullet.shapeColor=("white");
wall=createSprite(1200,200,thikness,height/2);
wall.shapeColor=color(80,80,80);
bullet.velocityX=speed;

}

function draw() {
  background(0);  


if(hasCollided(bullet,wall))
{

  bullet.velocityX=0;

  var damage=0.5*weight*speed*speed/(thikness*thikness*thikness);
  if(damage>10){
    wall.shapeColor=("red");
  }
  if(damage<10){
    wall.shapeColor=("green");
    bullet.x=1180;
  }

}

  drawSprites();
}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+bullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}