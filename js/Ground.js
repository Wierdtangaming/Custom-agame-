class Ground {
    constructor(x,y,width,height,angle){
      var options = {
        isStatic: true
    }
    this.body = createSprite(x,y,width,height);
   // this.body2 = createSprite(x,y,width,height);
   // this.body3 = createSprite(x,y,width,height);
   // this.width = width;
   // this.height = height;
    //this.image = loadImage("images/bg.png");
  
    //World.add(world, TRIANGLE_FAN);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("blue");
      rect(pos.x, pos.y, this.width, this.height);
      }
}

