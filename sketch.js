var canvas;
var music;
var ball;
var surface1,surface2,surface3,surface4;
var edges;

function preload(){
   
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    surface1 = createSprite(0,580,360,30)
    surface1.shapeColor = "yellow"
   
   
    surface2 = createSprite(295,580,200,30)
    surface2.shapeColor = "blue"

    surface3 = createSprite(515,580,200,30)
    surface3.shapeColor = "red"

    surface4 = createSprite(740,580,220,30)
    surface4.shapeColor = "green"


    ball = createSprite(random(20,750),100,40,40)
    ball.shapeColor = 'white';

    ball.velocityX = 5;
    ball.velocityY = 6;
    

}

function draw() {
    background('skyblue');

    edges= createEdgeSprites();
    ball.bounceOff(edges)

    if(surface1.isTouching(ball) && ball.bounceOff(surface1)){
      ball.shapeColor = "yellow";
      ball.velocityX = 0;
      ball.velocityY =0
      music.stop();
    }
 
    if(surface2.isTouching(ball) && ball.bounceOff(surface2)){
        ball.shapeColor = "blue";
         music.play();
       
     }

    if(surface3.isTouching(ball) && ball.bounceOff(surface3)){
        ball.shapeColor = "red";
        
        
      }

    if(surface4.isTouching(ball) && ball.bounceOff(surface4)){
        ball.shapeColor = "green";
        
        
      }
      
     drawSprites();
  
}
