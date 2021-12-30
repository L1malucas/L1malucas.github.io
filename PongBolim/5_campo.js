// desenha campo de futebol

function exibeCampo(){
  stroke(255);
  fill(19,60,30);
  strokeWeight(5);
    //area maior
  rect(40, 20, 820, 560); 
    //grande area
  rect(40,130, 129,337); 
  rect(731,130,129,337);
    //pequena area
  rect(40, 225, 42,150);
  rect(817,225,42,150)
    //centro do campo
  circle(450,300,150);
  line(450,20,450,580);
  point(125,300);
  point(775,300);
    //escanteio
  arc(40, 22, 50, 50, 0, HALF_PI);
}