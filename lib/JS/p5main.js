let bullets = []

let xPosition = 50;
let yPosition = 50;

let xPosition2 = 950;
let yPosition2 = 950;


function setup(){
    createCanvas(1000 ,1000 );
    background(0);
}
function grid(){
  fill(79, 100, 138);
  stroke("white");
  for(let i=0;i<10;i++){
    for(let a = 0;a<10;a++){
        rect(100*i,100*a,100,100)
    }
  }
}
function battleShip(){
    fill("grey");
    ellipse(xPosition,yPosition,100,100);
    
}



function battleShip2(){
    fill("white");
    ellipse(xPosition2,yPosition2,100,100);
}


function draw(){
    for(let i = 0; i < bullets.length; i++){
        bullets[i].render()
        bullets[i].move()
    }

  grid();
  battleShip();
  battleShip2();


}

function keyPressed(){
  console.log(keyCode)
  
    if(keyCode === 65 && xPosition != 50){
        xPosition -=100 ;
    }
    else if(keyCode ===  68 && xPosition !=350){
        xPosition += 100 ;
    }
    else if(keyCode === 87 && yPosition != 50){
        yPosition -= 100 ;
    }
    else if(keyCode === 83 && yPosition != 950){
      yPosition += 100 ;  
    }
  

  
    if(keyCode === LEFT_ARROW && xPosition2 != 650){
        xPosition2 -=100 ;
    }
    else if(keyCode ===  RIGHT_ARROW && xPosition2 !=950){
        xPosition2 += 100 ;
    }
    else if(keyCode === UP_ARROW && yPosition2 != 50){
        yPosition2 -= 100 ;
    }
    else if(keyCode === DOWN_ARROW && yPosition2 != 950){
      yPosition2 += 100 ;  
    }
  

}






function shoot(xCord, yCord, direction){
    let bulletShip = {
        x: xCord,
        y: yCord,

        render: function(){
            fill("white");
            rectangle(this.x,this.y, 50,5);
        },

        move: function(){
            this.x += direction
        }

    }
    bullets.push(bulletShip);
}