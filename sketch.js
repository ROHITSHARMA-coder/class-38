var  form, player, game, database;
var gameState=0;
var playerCount;
var players;
var distance=0
var cars ,car1,car2,car3,car4;

function setup(){
  database = firebase.database();
 
  createCanvas(displayWidth-20,displayHeight-30);
  
  game=new Game();
  
 game.getstate();

 game.start();

}

function draw(){
  
  
  if(playerCount === 4){
    game.update(1);
}

if(gameState === 1){
  clear();
  game.play();
  }


    
  
}

