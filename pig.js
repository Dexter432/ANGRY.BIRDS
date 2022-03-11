class Pig {
  constructor(x,y) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, 50,50, options);
    this.width = 50;
    this.height = 50;
    this.image = loadImage("enemy.png")
    this.visibility=255
    World.add(world, this.body);
  }
  display(){
    console.log(this.body.speed)
    var pos =this.body.position;
      var angle=this.body.angle;
    if(this.body.speed<3){
      
      push()
      translate(pos.x,pos.y) 
      rotate(angle)
      imageMode(CENTER);   
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
    else{
      World.remove(world,this.body)
      push()
      this.visibility=this.visibility-5
      tint(255,this.visibility)
      image(this.image,pos.x,pos.y,50,50)
      pop()
    }
  }
};
