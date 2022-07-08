var ball,lowerWall,upperWall,leftWall;
var sonic,rubi;
var punto=0;
var allchest=[];
var allwalls=[];
var enemigo,enemigo2,enemigoImg;
var chest=[{x:300,y:380,isCollected:false},
  {x:800,y:90,isCollected:false},
  {x:700,y:380,isCollected:false},
  {x:1380,y:130,isCollected:false},
  {x:1430,y:400,isCollected:false}
];
var walls=[{x:10,y:20,w:1700,h:40},
  {x:10,y:450,w:1700,h:40},
  {x:10,y:450,w:40,h:900},
  {x:600,y:50,w:250,h:40},
  {x:600,y:90,w:150,h:40},
  {x:600,y:130,w:80,h:40},
  {x:700,y:300,w:250,h:40},
  {x:800,y:370,w:50,h:120},
  {x:300,y:300,w:250,h:40},
  {x:200,y:370,w:50,h:120},

  {x:1000,y:20,w:2000,h:40},
  {x:1000,y:450,w:2000,h:40},
  {x:900,y:450,w:40,h:700},
  {x:1100,y:165,w:200,h:250},
  {x:1250,y:420,w:50,h:25},
  {x:1300,y:395,w:50,h:25},
  {x:1350,y:370,w:50,h:25},
  {x:1500,y:370,w:50,h:25},
  {x:1550,y:395,w:50,h:25},
  {x:1600,y:420,w:50,h:25},
  {x:1760,y:150,w:250,h:40},
  {x:1900,y:105,w:40,h:130},
  {x:1950,y:350,w:100,h:250}
];
function preload(){
sonic=loadImage("sonic r.png");
rubi=loadImage("ruby.png");

}




function setup(){
  createCanvas(950, 470);
  //crateSprite ()
  ball = createSprite(100,height/2,40,40)
  ball.addImage("run",sonic);
  ball.scale=0.2;
  
  for(var i in walls){
var wall=createSprite(walls[i].x,walls[i].y,walls[i].w,walls[i].h);
allwalls.push(wall);
  }

for(var r in chest){
var cofre=createSprite(chest[r].x,chest[r].y,chest[r].w,chest[r].h);
cofre.addImage("ruby",rubi);
cofre.scale=0.1;
allchest.push(cofre);

}

}


function draw(){
 background("");

text("puntuasion "+punto,400,200)

  if(keyDown("d")){
ball.x+=3;
  }
  if(keyDown("a")){
    ball.x-=3;
      }
      if(keyDown("w")){
        ball.y-=3;
          }
          if(keyDown("s")){
            ball.y+=3;
          }
          if(keyDown("e")){
            ball.x+=6;
              }
            
            if(keyDown("q")){
              ball.x-=6;
                }
for(var j in allwalls){
ball.collide(allwalls[j]);

}
for(var r in allchest){
if(ball.collide(allchest[r])){
  allchest[r].visible=false;
  allchest[r].destroy();
  punto+=1;
}

}
















  drawSprites();
  
}



