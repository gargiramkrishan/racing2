var p,player,road,roadImg,ope,op,ope1,op1,ope2,op2,ope3,op3,ope4,op4,ope5,op5


var Obstacle;

var sand;

var Gameov,over

var score,Play,Game,End


function preload()
{
  player = loadImage("mainPlayer1.png","mainPlayer2.png");
  roadImg = loadImage("Road.png");
  op = loadImage("opponent1.png")
  op3 = loadImage("opponent4.png")
  op4 = loadImage("opponent5.png")
  op5 = loadImage("opponent7.png")
  over = loadImage("gameOver.png")
  score = 0
  Play = 1;
  End = 0;
  Game = Play;
}


function setup()
{
  createCanvas(900,500)
  road = createSprite(200,99999999999900)
  p = createSprite(50,9999999999999999998888888888888888888888888888888888888888888888888888888889)
  ope = createSprite(300,155555555544444444444444444444444444444444444444444444444444444444444444444444444444440)
  Obstacle = new Group()

}

function draw()
{
  background("white");

  if(Game == Play)
  {
    road.x = road.x - 10
    p.y = World.mouseY;
    ope.x = ope.x - 7
    if(Obstacle.isTouching(p))
    {
      Game = End
      ope.destroy()
    }
    score = score + 1
    ride();
    riding();
  }

  else if(Game == End)
  {
    p.destroy()
    Gameov = createSprite(200,200)
    Gameov.addImage(" ytttttyj jgjhlfhjfghjgjgttt",over)
    if(keyDown("up"))
    {
      restart();
    }
  }
  drawSprites();
  text("Score" + score,250,50)
}


function restart()
{
  score = 0
  Game = Play;
}


function riding()
{
  if(frameCount%90==0)
  {
    ope = createSprite(500,150)
    ope.y = Math.round(random(50,400))
    ope.setCollider("circle",0,0,100)
    sand = Math.round(random(1,4))
    ope.scale = 0.1
    switch(sand)
    {
      case 1 : ope.addImage(op)
      break
      case 2 : ope.addImage(op3)
      break
      case 3 : ope.addImage(op4)
      break
      case 4 : ope.addImage(op5)
      break
      default:
        break
    }
    Obstacle.add(ope);
  }
}
function ride()
{
  if(frameCount%90==0)
  {
    road = createSprite(200,200)
    road.addImage("tyr ntyb",roadImg)
    p = createSprite(50,200)
    p.addImage("ry jidf ii tyx",player)
    p.scale = 0.1;
  }
}