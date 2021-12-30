//todas definições relacionadas a bola

let bolaX = 450;
let bolaY = 300;
let velocidadeBolaX = 3;
let velocidadeBolaY = 4;
let raio = 30/2;

function exibeBola (){ 
  stroke(255);
  fill(color(0));
  circle(bolaX, bolaY, raio);
}

function movimentaBola (){ 
  bolaX += velocidadeBolaX;
  bolaY += velocidadeBolaY;

}

function colisaoBolaGol(){ 
  if (bolaX + raio> width || bolaX - raio < 0){
    velocidadeBolaX *= -1;
    }
  
  if (bolaY + raio> height || bolaY - raio < 0){
    velocidadeBolaY *= -1;
    }
}
