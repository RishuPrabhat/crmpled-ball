class dustbin{
    constructor(x,y){
    var options = {
        isStatic : true,
        restitution: 0.3,
        friction : 0.7,
        density : 1.2
    }
      this.body = Bodies.circle(x,y,50,50,options);
      this.width = 50;
      this.height = 50;
  
     World.add(world,this.body);
   }
  }