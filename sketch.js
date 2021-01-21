//Create variables here
var dog,dogImage,dogImage1,database,foodStock,foodS;
function preload()
{
  dogImage=loadImage("images/dogImg.png")
  dogImage1=loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database();
	createCanvas(800, 700);
  dog=createSprite(400,600);
  dog.addImage(dogImage);
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  
background("black");
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogImage1)
}
  drawSprites();
  //add styles here
fill("red");
text("food remaining"+foodS,20,300);
text("press up arrow to feed the dog",100,100);
}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=20;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}
