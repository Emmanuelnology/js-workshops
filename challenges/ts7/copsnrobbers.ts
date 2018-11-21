class DamageService {
  getDamage = (firepower) => {
    return Math.floor(Math.random()*firepower);
  }
}

class Mock_DamageService {
  getDamage = (firepower) => {
    return firepower;
  }
}

export class Character {
  public activeKey:string = "a";
  public health:number = 100;
  
  private deadFunction:Function;

  constructor ( public name:string, private primaryKey:string = "s", private secondaryKey:string = "a", protected damageService:DamageService = new DamageService){
    this.activeKey = primaryKey;
  };
  
  private takeHit(firePower) {
    if (!this.isDead()) {
      this.health-=this.damageService.getDamage(firePower);
      if (this.isDead()) this.die();
    }
  }
  
  private die() {
    this.deadFunction();
  }
  
  public whenDead(func:Function) {
    this.deadFunction=func;
  }
  
  public isHealthy(){
    return this.health > 30;
  }

  public shootAt(target:Character) {
    target.takeHit(5);
    this.swapKeys();
  }
  
  private swapKeys() {
    this.activeKey = (this.activeKey == this.primaryKey) ? this.secondaryKey : this.primaryKey;
  }
  
  private isDead() {
    return this.health <= 0
  }
}

