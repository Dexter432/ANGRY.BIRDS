  class Chao{                             
constructor(x,y,w,h){
    var objeto = {
        isStatic: true,
      };
       this.chao = Bodies.rectangle(x, y, w, h,objeto);
       this.w=w
       this.h=h
      World.add(world, this.chao);

}
display(){
      var pos=this.chao.position
      push()
    rectMode(CENTER);
    fill ("grey")
    rect(pos.x, pos.y, this.w,this.h);
    pop()
}
  }