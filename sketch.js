var dog
var happyDog
var database
var foodS
var foodStock
var dogimg, dogimg2

function preload()
{
dogimg=loadImage("Dog (1).png")
dogimg2=loadImage("happydog (1).png")
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,250, 100,100)
  dog.addImage(dogimg)
  database=firebase.database()
  foodStock=database.ref("food");
  foodStock.on("value", readStock);
}


function draw() {  
  background(46,139,87)
  drawSprites();
  fill(255,255,254); 
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
 
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogimg2);
  }

}



function readStock(data){
  foodS=data.val();

}


function writeStock(x){

  database.ref("/").update({
    food:x
 })
}

