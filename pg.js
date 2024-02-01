let myTurtle;
let myGoat;

let turtleVert;
let goatVert;
let myVert = [];

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

  turtleVert = myTurtle.computeFaces();
  goatVert = myGoat.computeFaces();

  for(let v = 0; v < turtleVert.vertices.length; v++)
  {
      let eachVert = new myParticle(turtleVert.vertices[v], goatVert.vertices[v], color(200), color(200));
      myVert.push(eachVert);
  }

}

function draw() 
{
    background(0,229,229);
    
    rotateY(frameCount * 0.01);
    
    stroke(255,64,64,150);
    fill(255, 145, 164, 180);
    model(myTurtle);
    model(myGoat);
    
    noFill();
    beginShape(POINTS);
    for(let p = 0; p < myVert.length; p++)
    {
        myVert[p].Update();
        myVert[p].Draw();
    }
    endShape();
    
    fill(255,244,79);
    text("soon", 0, 0);
}

function morph()
{

}

function windowResized() 
{
    resizeCanvas(windowWidth, windowHeight);
}
