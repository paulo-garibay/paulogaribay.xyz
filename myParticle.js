class myParticle
{
    constructor(iniPos, finPos, iniCol, finCol) 
    {
        this.iniPos = iniPos;
        this.finPos = finPos;
        this.iniCol = iniCol;
        this.finCol = finCol;
        this.actPos = iniPos;
        this.actCol = iniCol;
    }

    Update()
    {
       /* this.actPos.x = map(this.actPos.x, 0.0, this.iniPos.x, 0.0, this.finPos.x, false);
        this.actPos.y = map(this.actPos.y, 0.0, this.iniPos.y, 0.0, this.finPos.y, false);
        this.actPos.z = map(this.actPos.z, 0.0, this.iniPos.z, 0.0, this.finPos.z, true);*/
        this.actPos = p5.Vector.lerp(this.iniPos, this.finPos, 0.5);
    }

    Draw()
    {
        fill(this.actCol);
        //vertex(this.actPos);
        ellipse(this.actPos.x, this.actPos.y, 5);
        ellipse(this.iniPos.x, this.iniPos.y, 5);
        ellipse(this.finPos.x, this.finPos.y, 5);
    }
}