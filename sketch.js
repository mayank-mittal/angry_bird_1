var fixedRect, movingRect,O1,O2;

var X,Y;





 function setup() {
    createCanvas(1200,800);
     fixedRect = createSprite(600, 400, 50, 80); 
     fixedRect.shapeColor = "green"; 
     fixedRect.debug = true;

      movingRect = createSprite(400,200,80,30); 
    movingRect.shapeColor = "green";
     movingRect.debug = true; 

     O1 = createSprite(100,300,100,100);
     O1.shapeColor = "blue";

     O2 = createSprite(400,200,100,50);
     O2.shapeColor = "blue";

     X = createSprite(400, 100, 50, 80);
     X.shapeColor = "green";
     X.debug = true;
     Y = createSprite(400, 800,80,30);
     Y.shapeColor = "green";
     Y.debug = true;
   
     Y.velocityY = -5;
     X.velocityY = +5;
    }


function draw() {
  background(180); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;



 if( isTouching(movingRect,O1)){
  movingRect.shapeColor = "blue";
  O1.shapeColor = "RED";
 }
 else{

  O1.shapeColor = "green"; 
  movingRect.shapeColor = "green";



 }

 bounceOff(Y,X);

  drawSprites();
}

