class Game {
  constructor(){

  }


  play(){
    player.body.collide(ground1.body)
    frames++;
    ground1.body.x -= 10;
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    console.log("You Score is " + player.score);
  }
}
