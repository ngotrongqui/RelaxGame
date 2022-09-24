var canvas= document.getElementById('gamezone');
var context= canvas.getContext('2d');
var scoreshow=document.getElementById('score');

var beeimg= new Image();
var hinhnenchinh=new Image();
var ongtren= new Image();
var ongduoi=new Image();
beeimg.src="images/6.png";
hinhnenchinh.src="images/nenchinh.png";
ongtren.src="images/ongtren.png";
ongduoi.src="images/ongduoi.png";

var score=0;
var khoangcachhaiong=120; 

var bee={
    x: hinhnenchinh.width/5,
    y: hinhnenchinh.height/2
}
var ong=[]; 
ong[0]={
    x:canvas.width,
    y:0 
}


function run(){
    
    context.drawImage(hinhnenchinh,0,0);
    context.drawImage(beeimg,bee.x,bee.y);

    for(var i=0;i<ong.length;i++){
        khoangcachdenongduoi=ongtren.height+khoangcachhaiong;
        context.drawImage(ongtren,ong[i].x,ong[i].y);


        context.drawImage(ongduoi,ong[i].x,ong[i].y+khoangcachdenongduoi);


        ong[i].x-=5; 

        // Lặp ống
        if(ong[i].x ==canvas.width/2){
            ong.push({
                x:canvas.width,
                y:Math.floor(Math.random()*ongtren.height)-ongtren.height
                // Random ống
            })
        }
        if(ong[i].x + ongtren.width ==0 )ong.splice(0,1);
        // xóa ống khi chạy hết ảnh
        if(ong[i].x==bee.x)score++;
        // Game over
        if(bee.y+beeimg.height==canvas.height||
        bee.x+beeimg.width>= ong[i].x && bee.x <= ong[i].x +ongtren.width
        && (bee.y<=ong[i].y+ongtren.height||
        bee.y +beeimg.height>= ong[i].y+ khoangcachdenongduoi)    
        ){
            return;
        }
    }

scoreshow.innerHTML=score;

//rơi xuống
    bee.y+=3;
    requestAnimationFrame(run);
}

//function bay khi nhấn
document.addEventListener("keydown",function(){
    bee.y-=65;
})

run();
