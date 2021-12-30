// definiçoes e comportamento de ambos lados do gol
let golX =[33, 863];
let golY =[270, 270];

let golAltura = 60;
let golCompri = 5;
let golAzul;
let golVermelho;
let gol = false;
let narede;


function exibeGol(){
    fill(color(0,255,0));
  for (let i=0; i<golX.length; i++)
    golAzul = rect(golX[i], golY[i], golCompri, golAltura);
}

function colisaoGol(){
  for (let i=0; i< jogadorAzulX.length; i++){
    gol = collideRectCircle(golX[i], golY[i], golAltura, golCompri, bolaX, bolaY, raio);
    if (gol){
      narede.play();
      ehGol(golX[i]);
      bolaX = 450;
      bolaY = 300;  
    }
  }
}

function ehGol (x){ //retorna bola pro meio de campo e soma pontuação
  if (x > 33){
    pontosAzul +=1;
    print("É GOLLLL TIME AZUL!!!!!!!1")
    
    //setTimeout(print("gol"), 9000);
  }
  if (x < 863){
    pontosVermelho +=1;
    print("É GOLLLLL TIME VERMELHO!!!!!1")
  }
}

