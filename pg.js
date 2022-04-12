let myTurtle;
let myFont;

function preload()
{
    myTurtle = loadModel("assets/turtle_lp.obj", true);   
    myFont = loadFont('assets/SourceCodePro-Medium.otf');
}

function setup() 
{
  createCanvas(windowWidth, windowHeight, WEBGL);
  textFont(myFont);
  textSize(height / 13);
  textAlign(CENTER, CENTER);
  camera(0,0,250);
}

function draw() 
{
    background(0,229,229);
    
    rotateY(frameCount * 0.01);
    
    stroke(255,64,64,150);
    fill(255, 145, 164, 180);
    model(myTurtle);
    
    fill(255,244,79);
    text("soon", 0, 0);
}

function windowResized() 
{
    resizeCanvas(windowWidth, windowHeight);
}
