class Sling{
  constructor(bodyA,pointB){ 
    var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.04,
        length:10
    } 
      this.slingImage1=loadImage("sling1.png")
      this.slingImage2=loadImage("sling2.png")
      this.sling=Constraint.create(options)  
      this.pointB=pointB
      World.add(world,this.sling)
  }  
  display(){
    image(this.slingImage1,200,420)
    image(this.slingImage2,170,420)
    if(this.sling.bodyA){
    
    
    strokeWeight(3);
    var pointA=this.sling.bodyA.position
    var pointB=this.pointB
    line(pointA.x,pointA.y,pointB.x,pointB.y)  
  }
  }
  fly(){
  this.sling.bodyA=null  
  }
}