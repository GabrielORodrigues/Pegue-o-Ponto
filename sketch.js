var imagemE; 
var Trilha;
let x;
let y;

function preload(){
    Trilha = loadSound("Trilha.mp3");
    imagemE= loadImage('Espaço.jpg');
}

function setup() {
  createCanvas(400, 400);
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
  Trilha.play();
  Trilha.loop();
}

function draw() {
  background('black');
  background(imagemE, 500);
  x = x + random(-10,10); //Altera Velocidade X
  y = y + random(-10,10); //Altera Velocidade Y
  x = constrain(x, 0, 400);
  y = constrain(y, 0, 400);
  let distancia;
  distancia = dist(mouseX, mouseY, x, y);
  circle(mouseX, mouseY, distancia);
  //circle(x, y, 10);
  
  if(distancia < 5){ //altera dificuldade
    fill('white');
    textAlign(CENTER);
    textSize(20);
    text('Encontrei!!!', 200, 200);
    noLoop();
    Trilha.stop();
  }
  
}