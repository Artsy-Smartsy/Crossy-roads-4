  
class Player{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.spt = createSprite(this.x, this.y, 50, 50);
        this.spt.shapeColor = "orange";
        this.spt.addAnimation("player", playerAnimation); 
        this.spt.scale = 0.07;  
        this.spt.setCollider("rectangle", this.x-650, this.y-650, 600, 1200); 
    }  
    

    move(xdir, ydir)
    {
        this.spt.x += xdir*grid;
        this.spt.y += ydir*grid;
    }
}