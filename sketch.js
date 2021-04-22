var bg,bgImg;
var cat,catImg;
var rat,ratImg;

function preload() {
    //load the images here

    bgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png")
    ratImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    ratImg2 = loadAnimation("images/mouse2.png");
    ratImg3 = loadAnimation("images/mouse3.png");
    catImg4 = loadAnimation("images/cat4.png");
    ratImg4 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

  bg = createSprite(500,400);
  bg.addImage(bgImg);

  cat = createSprite(870,600);
  cat.addAnimation("catsleeping",catImg1);
  cat.scale = 0.2;

  rat = createSprite(200,600);
  rat.addAnimation("ratstanding",ratImg1);
  rat.scale = 0.15;

}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide
    

    if(cat.x - rat.x < (cat.width - rat.width)/2){

      cat.velocityX = 0;
      cat.addAnimation("catlastImage",catImg4);
      cat.x = 300;
      cat.scale = 0.2;
      cat.changeAnimation("catlastImage");

      rat.addAnimation("ratlastImage",ratImg4);
      rat.scale = 0.15;
      rat.changeAnimation("ratlastImage");
      
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if (keyCode === LEFT_ARROW){
    rat.addAnimation("mouseTeasing",ratImg2);
    rat.changeAnimation("mouseTeasing");
    rat.frameDelay = 25;

    cat.velocityX = -5;
    cat.addAnimation("catwalk",catImg2);
    cat.changeAnimation("catwalk");
    cat.frameDelay = 25;
   

    
  }

}