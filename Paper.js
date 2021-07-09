class Paper
{
	constructor(x,y)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2			
			}
		this.x=x;
		this.y=y;
        this.r=35;
       
		this.image=loadImage("paper.png");
        
		this.body=Bodies.circle(x, y,35, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill("white");
			image(this.image,0,0,this.r,this.r);
			pop()
			
	}

}