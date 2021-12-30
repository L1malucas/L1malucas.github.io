// definições do placar e pontuação
let pontosAzul= 0;
let pontosVermelho=0;

function exibePlacar(){ // desenha placar nos cantos da tela
  stroke(0);
  strokeWeight(2);
  textSize(18);
  textAlign(CENTER);
  fill(color(128,128,128));
  rect(5, 550, 30,30);
  fill(0);
  text(pontosAzul, 19, 571);
  fill(color(128,128,128));
  rect(865, 550, 30,30);
  fill(0);
  text(pontosVermelho, 880, 571);
}
