 class Character {
  public health:number = 100;
  public takeHit (firePower){
    if(!this.isDead())
    this.health -=firePower;
  }
public shootAt(target:Character, firePower:number){
  target.takeHit(firePower);
}
  public  isDead(){
    return this.health <= 0;
    
  };

  public resetHealth() {
    return this.health = 100;
  }

  public isHealthy(){
    return this.health >= 30
  }
}

 class Game {
  public damageAmount:number = 10;
  public isActive:boolean = true

}

