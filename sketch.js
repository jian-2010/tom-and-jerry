var bg,bgImg;
var tom,tomImg;
var jerry,jerryImg;
var tomImg2,tomImg3
var jerryImg2,jerryImg3


function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png")
    tomImg=loadAnimation("images/cat1.png")
    jerryImg=loadAnimation("images/mouse1.png")
    tomImg2=loadAnimation("images/cat2.png","images/cat3.png")
    tomImg3=loadAnimation("images/cat4.png")
    jerryImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
    jerryImg3=loadAnimation("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg = createSprite(500,400);
    bg.addImage("bg",bgImg);

    jerry = createSprite(200,600);
    jerry.addAnimation("jerry",jerryImg);
    jerry.scale=0.2

    tom = createSprite(780,620);
    tom.addAnimation("tom",tomImg)
    tom.scale=0.17

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.x=300
        tom.velocityX=0
        tom.addAnimation("sit",tomImg3)
        tom.changeAnimation("sit",tomImg3)
        jerry.addAnimation("stand",jerryImg2)
        jerry.changeAnimation("stand",jerryImg2)
       

    }
    

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === RIGHT_ARROW){
        jerry.addAnimation("teasing",jerryImg3)
        jerry.changeAnimation("teasing",jerryImg3)
        jerry.frameDelay = 25
    }

    if(keyCode === LEFT_ARROW){
        tom.addAnimation("moving",tomImg2)
        tom.changeAnimation("moving",tomImg2)
        tom.velocityX = -5
    }

}
