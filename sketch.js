var canvas, backgroundImage;

var gameState = 0,finishedPlayers;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var track, car1_img, car2_img, car3_img, car4_img;

var f1Image,obstacle,obstacleGroup;

var carSound,slidingSound;

var x,y

function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");
  f1Image = loadImage("../images/f1.png")
  carSound = loadSound("../sound/car.mp3")
  slidingSound = loadSound("../sound/sliding.mp3")
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  gameState = 0;
  distance = 0;
 // finishedPlayers = 0;
  yVel = 0;
  xVel = 0;

  xSet = false;
  game = new Game();
  game.getState();
  game.start();
  obstacleGroup=createGroup()
  for(var i=0;i<5;i++){
    x = random(200,950)
    y = random(-height*4,height-300)
    obstacle = createSprite(x,y)
    obstacle.addImage(f1Image)
    obstacle.debug = true;
    obstacleGroup.add(obstacle)
  }
  console.log(distance)
}


function draw(){
   //start the game
  background(200, 200, 255);
  
   //start the game
  if (playerCount === 4 ) {
     game.update(1);
   }
 
   //start the game for real
  if (gameState === 1) {
     game.play();
   }
  if (gameState === 2) {
     console.log("End");
   }}
 
  
