var nafo;
var naba;
var A;
function setup() {
  createCanvas(450,527);
  nafo = loadImage("nafo.png");
  nava = loadImage("naba.png"); 
  A = 100;
  frameRate(10000);
}

function draw() {
  image(nava,0,0);
  image(nafo,mouseX/3,mouseY/3,A,A);
}

function mouseClicked() {
  A+=10;
  if (A>600) A=100;
}