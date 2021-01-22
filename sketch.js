var ball;
var database;
var pos,p 

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database = firebase.database() 
    console.log(database) 
    pos = database.ref('ball/position')
    pos.on("value",readPosition,showError)
}

function draw(){
    background("white");
    if (p !== undefined){
        if(keyDown(LEFT_ARROW)){
            changePosition(-1,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            changePosition(1,0);
        }
        else if(keyDown(UP_ARROW)){
            changePosition(0,-1);
        }
        else if(keyDown(DOWN_ARROW)){
            changePosition(0,1);
        }
    }

    drawSprites();
}

function changePosition(x,y){
   database.ref('ball/position').set({
       x : p.x + x, y : p.y + y
   }) 
}

function readPosition(data){
    p = data.val() 
    ball.x = p.x
    ball.y = p.y
} 

function showError(){
    console.log("Error in reading database") 
} 