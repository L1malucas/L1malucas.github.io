let campo;

function preload(){
  narede = loadSound("zsons/ponto.mp3");
  toque =loadSound("zsons/raquetada.mp3");
}

function setup() {
  createCanvas(900, 600);
}

function draw() {
  background(0,255,0);
  exibeCampo();
      //funções dos jogadores
  exibeJogadores();
  movimentoVermelho();
  movimentoAzul();
  colisaoJogadorAzul();
  colisaoJogadorVermelho();
      //funções da bola
  exibeBola();
  movimentaBola();
  colisaoBolaGol();
      //funções do placar
  exibePlacar();
      // funções do gol
  exibeGol();
  colisaoGol();
}