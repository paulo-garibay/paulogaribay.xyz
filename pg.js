let myTurtle;
let myGoat;

let part;

let myFont;

function preload()
{
    myTurtle = loadModel("assets/turtle_lp.obj", true);
    myGoat = loadModel("assets/goat_lp2.obj", true);   
    myFont = loadFont('assets/SourceCodePro-Medium.otf');

}

function setup() 
{
  createCanvas(windowWidth, windowHeight, WEBGL);
  textFont(myFont);
  textSize(height / 13);
  textAlign(CENTER, CENTER);
  camera(0,0,250);
  part = new myParticle(createVector(-50,5,100), createVector(100,100,100), color(255), color(100));

}

function draw() 
{
    background(0,229,229);
    
   // rotateY(frameCount * 0.01);
    
    stroke(255,64,64,150);
    fill(255, 145, 164, 180);
    //model(myTurtle);
    //model(myGoat);
    
    part.Update();
    part.Draw();

    fill(255,244,79);
    //text("soon", 0, 0);
}

function morph()
{

}

function windowResized() 
{
    resizeCanvas(windowWidth, windowHeight);
}
