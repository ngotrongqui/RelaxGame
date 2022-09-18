var canvas= document.getElementById('game-flappy_bird');
var context= canvas.getContext('2d');
var scoreshow=document.getElementById('score');


var character = new Image();
var background = new Image();
var column_on = new Image();
var column_under = new Image();

character.src = "guide.png";
background.src = "Backgroun.jpg";
column_on.src = "Column.png";
column_under.src = "Column.png";

var score = 0;
var distance = 140;
var distance_2_column;

var bird={
    x: background.width/5,
    y: background.height/2
}

var column=[];
column[0]={
    x:canvas.width,
    y:0
}

function run() {
    context.drawImage(background,0,0);
    context.drawImage(character,bird.x,bird.y);
    bird.y+=3;
    requestAnimationFrame(run);
}