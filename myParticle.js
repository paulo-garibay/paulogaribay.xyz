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

        this.amt = 0.0;
        this.dir = 0.005;
    }

    Update()
    {
        if(this.amt > 1 || this.amt < 0)
        {
            this.dir *= -1;
        }

        this.amt += this.dir;
        
        this.actPos = p5.Vector.lerp(this.iniPos, this.finPos, this.amt);
    }

    Draw()
    {
        stroke(this.actCol); 
        vertex(this.actPos.x, this.actPos.y, this.actPos.z);
    }
}