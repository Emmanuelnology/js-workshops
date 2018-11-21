class Game {
  public damageAmount:number = 10;
  public isActive:boolean = true;
}

class Character {
  public health:number = 100;
  public isHealthy = (): boolean => this.health >= 30;
  public isDead = ():boolean => this.health <=0;
  public takeHit = (firepower:number) => {
    if(!this.isDead()) this.health -= firepower;
  }
  public shootAt = (target:Character, firepower:number) => target.takeHit(firepower);
  public resetHealth = () => this.health = 100;
}