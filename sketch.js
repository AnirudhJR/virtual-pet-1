//Create variables here
var dog , happyDog ,database ,foodS , foodStock ; 
var dogImg , dogImg1 ;

function preload()
{
  //load images here
dogImg = loadImage("../images/dog.png")
dogImg1 = loadImage("../images/dogImg1.png")
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
  dog = createDog();
  foodStock = database.ref("Food");
  foodStock.on("value",readStock);
  if(keyWentDown(UP_ARROW)){
    wireStock(foodS);
    dog.addImage("dogImg1.png");
  }
}


function draw() {  
  background(46,139,87);


  drawSprites();
  //add styles here

}

function readStock(data){
  foodS = data.val();
  
}

function wireStock(x){
  if(x<=0){
    x=0;
  }else{
    x = x-1 ;
  }

  database.ref('/').update({
    Food : x
  })

}
