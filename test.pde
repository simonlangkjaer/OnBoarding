void setup()
{
  size(200,200);
  background(125);
  fill(255);
  noLoop();
  PFont fontA = loadFont("courier");
  textFont(fontA, 14);  
}

void draw(){  
  text("Hello Web!",20,20);
  println("Hello ErrorLog!");

ellipse(212, 206, 283, 318);

ellipse(212, 250, 100, 73);

ellipse(150, 150, 30, 30);
}