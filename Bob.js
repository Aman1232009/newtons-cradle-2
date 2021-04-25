class Bob {
    constructor(x, y, radius) {
      var options = {
          isStatic:true,
          restitution:0.3,
          friction:0.5,
          density:1
        }

      
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.body = Bodies.circle(this.x, this.y, this.radius, options);
    World.add(world, this.body);
}



display(){
   var paperpos=this.body.position;

   push()
   translate(paperpos.x,paperpos.y);
   rectMode(CENTER)
   fill("blue")
   ellipse(0,0,this.radius)
   pop()

}
};