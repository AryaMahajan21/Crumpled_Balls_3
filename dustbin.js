class dustbin
{
	constructor(x,y)
	{
	
		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=213;
		this.wallThickness=100;
		
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.image = loadImage("trashcan.png")
		

		
		World.add(world, this.bottomBody)


	}
	display()
	{
			var posBottom=this.bottomBody.position;

			imageMode(CENTER)
			image(this.image, 1200, 500, this.width, this.height);
			
			
	}

}