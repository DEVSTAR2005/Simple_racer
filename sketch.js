var car
var track
var path
var cmg
var obs
var bomb
var bm
var sound
var gs = 0



function preload()
{
   track = loadImage("sprites/track.jpg")
   cmg = loadImage("sprites/batCar.png")
   bomb = loadImage("sprites/bomb (1).png")
   bm = loadImage("sprites/exon.png")
   sound = loadSound("Explosion+3.mp3")
}


function setup() {
  createCanvas(600,600);
  
 car = createSprite(300, 500, 20, 20);
 car.addImage(cmg)
 car.rotation = -90

 path = createSprite(300,300,600,600);
 path.addImage(track)
 path.velocityY = 20


   obs = createSprite(random(100,500),-10,random(10,100),random(10,100))
   obs.velocityY = 20
   obs.addImage(bomb)
   obs.scale=0.2

}

function draw() {
  background(200);


    if(path.y>800)
    {
      path.y=path.y/2
    }
    path.depth = car.depth-10


    if(keyIsDown(RIGHT_ARROW))
    {
        car.setVelocity(5,0)
    }

    if(keyIsDown(LEFT_ARROW))
    {
        car.setVelocity(-5,0)
    }



    if(obs.y>650)
    {
     obs.y = -10
     obs.x = random(100,500)
  
    }

  drawSprites();
  if(car.isTouching(obs) && gs == 0)
      {
        gs = 1
        car.visible = false
        obs.addImage(bm)
        path.velocityY = 0
        obs.velocityY=0
        path.visible = false
        
        sound.play();
      }
      if(gs == 1)
      {
        text("<!GAME OVER!>",250,300)
      }
 
}


function keyReleased()
{
  car.setVelocity(0,0)
}


