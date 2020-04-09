class Player extends BaseClass{
  constructor(x,y){
    super(x,y,50,50);
    this.body = createSprite(x,y,20,20);
    
    this.distance = 0;
    
    World.add(world, this.body);
  }
  display(){
    if (keyCode === 32 && jumpcharge === 1){
      this.body.position.y += -200;
      jumpcharge = 0;
      keyCode = 0;
      console.log(keyCode)
    }
   // console.log(keyCode)
   // if(displayWidth/8>)
    this.body.position.y -= -5;
    //console.log(this.body.position.y)
    //this.body.collide(ground)
    
  }
}
