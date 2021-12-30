// definições e comportamento dos jogadores


let jogadorAzulX = [180, 540];
let jogadorAzulY = [285, 285];
let jogadorVermelhoX = [700, 350];
let jogadorVermelhoY = [250, 250];

let toque;

let jogadorComprimento = 10;
let jogadorAltura = 90

let tocouAzul = false;
let tocouVermelho = false;

function exibeJogadores (){
  for (let i=0; i<jogadorAzulX.length; i++){
    strokeWeight(1);
    fill(color(0,0,255));
    rect(jogadorAzulX[i], jogadorAzulY [i], jogadorComprimento, jogadorAltura);
    fill(color(255,0,0));
    rect(jogadorVermelhoX[i],jogadorVermelhoY[i], jogadorComprimento, jogadorAltura);
  }
}

function colisaoJogadorAzul(){
    for (let i = 0; i < jogadorAzulX.length; i++){
    tocouAzul = collideRectCircle(jogadorAzulX[i], jogadorAzulY[i], jogadorComprimento, jogadorAltura, bolaX, bolaY, 23);
    if (tocouAzul){
      colisao();
      toque.play();
    }
  }
}

function colisaoJogadorVermelho(){
    for (let i = 0; i < jogadorVermelhoX.length; i++){
    tocouVermelho = collideRectCircle(jogadorVermelhoX[i], jogadorVermelhoY[i], jogadorComprimento, jogadorAltura, bolaX, bolaY, 23);
    if (tocouVermelho){
      colisao();
      toque.play();
    }
  }
}

function colisao(){
  velocidadeBolaX *= -1;
}

function movimentoVermelho (){
  for (let i=0; i < jogadorAzulX.length; i++){
    if (keyIsDown(UP_ARROW)){ //seta pra cima
      jogadorVermelhoY[i] -= 10;
    }
    if (keyIsDown(DOWN_ARROW)){ //seta pra baixo
      jogadorVermelhoY[i] += 10;
    }
  }
}

function movimentoAzul (){
  for (let i =0; i<jogadorAzulX.length; i++ ){
    if (keyIsDown(87)){ //tecla W
      jogadorAzulY[i] -= 10;
    }
    if (keyIsDown(83)){ //tecla S
      jogadorAzulY[i] += 10;
    }
  }
}