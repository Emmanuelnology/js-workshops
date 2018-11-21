class Game {
  public damageAmount:number = 10;
}

class Character {
  public health:number = 100;
  private isDead = ():boolean => this.health <=0;
  public takeHit = (firepower:number) => {
    if(!this.isDead()) this.health -= firepower;
  }
  public shootAt = (target:Character, firepower:number) => target.takeHit(firepower)
  public resetHealth = () => this.health = 100;
}