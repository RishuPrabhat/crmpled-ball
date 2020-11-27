class ground{
    constructor(x,y){
    var options = {
        isStatic : true,
        restitution: 0.4,
        friction : 0.6,
        density : 1.1
    }
      this.body = Bodies.circle(x,y,50,50,options);
      this.width = 50;
      this.height = 50;
  
     World.add(world,this.body);
   }
  }