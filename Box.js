class Box
{

     constructor(x,y,width,height)
     {
        var box_options ={
            restitution: 1.0
        }
      
        this.width=width;
        this.height=height;
        this.box = Bodies.rectangle(200,100,50,50, box_options);
        World.add(world,this.box);
    
     }
    
     display()
     {
        rectMode(CENTER);
        rect(this.box.position.x, this.box.position.y, 50, 50);
     }
}