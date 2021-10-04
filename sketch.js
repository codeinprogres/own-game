const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var img;
var stones = [];
var playerJumpingImg;

var stone;
var player, playerImg, obstaclesGroup, obstacleImg, rock1Img, rock2Img, rock3Img, rock4Img, rock5Img;
var backgroundImg;
var mountainImg, mountain;
var PLAY, END;
PLAY = 1;
END = 2; 
var gameState = PLAY;
var back;
var ground;
var b1, b2, b3, b4;

function preload() {
  rock1Img = loadImage("rock 1.png");
  rock2Img = loadImage("rock 2.png");
  rock3Img = loadImage("rock 3.png");
  rock4Img = loadImage("rock 4.png");
  rock5Img = loadImage("rock 5.png");
  mountainImg = loadImage("rock2.jpg");
  backgroundImg = loadImage("background.png");
  playerImg = loadImage("player 1.png");
  playerJumpingImg = loadImage("player 2.png");
}

function setup() {
   canvas = createCanvas(1000, 700);
   canvas.visible = false;


  createEdgeSprites();

  player = createSprite(250, 460, 30, 30);
  player.addImage(playerImg);
  player.scale = 0.05;


  engine = Engine.create();
  world = engine.world;

  back = new Back(125, 0, 1500, 2600);
  ground = createSprite(0, 1025, 100000000, 100);
  ground.visible = false;


   
  
 
  mountain = new Mountain(150, -7, 500, 2000);

  for(var i = 0; i <= 100;i++) {
    var x = random(70, 230);
    var y = random(-140, 2000 );

    var rand = Math.round(random(1,5));
    switch(rand)
    {
      case 1: img = rock1Img;
      break;
      case 2: img = rock2Img;;
      break;
      case 3: img = rock3Img;;
      break;
      case 4: img = rock4Img;;
      break;
      case 5: img = rock5Img;;
      break;
      default: break;
    }

    stone = new Rocks(x, y, 20, 20, img);
    stones.push(stone);
    
  }
}

function draw() {
  Engine.update(engine);

  background("red");


  camera.position.y = player.position.y;
  camera.position.x = player.position.x;

  


  if(gameState === PLAY) {
    back.display2();
    mountain.display1();
    console.log(mountain.x);



    if(keyDown("space")){
      player.addImage(playerJumpingImg);
      player.velocityY = -13  ;
    }

    player.velocityY += 0.8;

    if(keyDown("right")){
      player.velocityX = 13;
    }

    if(keyDown("left")){
      player.velocityX = -13;
    }

    if(player.collide(ground)){
      player.velocityX = 0;
      player.velocityY = 0;
      player.addImage(playerImg);

    }








    for( stone of stones){
      stone.display();
    }
  }

  drawSprites();
}


/*function spawnRocks()
{
  if(frameCount % 50 === 0)
  {
    var rock = createSprite(300,0,10,10);
    rock.x = Math.round(random(100,900));
    rock.velocityY = 3;

    var rand = Math.round(random(1,5));
    switch(rand)
    {
      case 1: rock.addImage(rock1Img);
      break;
      case 2: rock.addImage(rock2Img);
      break;
      case 3: rock.addImage(rock3Img);
      break;
      case 4: rock.addImage(rock4Img);
      break;
      case 5: rock.addImage(rock5Img);
      break;
      default: break;
    }
  }
}*/
