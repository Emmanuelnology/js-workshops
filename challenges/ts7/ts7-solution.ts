class HealthCalculator {
  getDamage = (firepower) => {
    return Math.floor(Math.random()*firepower);
  }
}

class Mock_HealthCalculator {
  getDamage = (firepower) => {
    return firepower;
  }
}

class Character {
  public activeKey:string = "a";
  public health:number = 100;
  private deadFunction:Function;

  constructor ( public name:string, private primaryKey:string = "s", private secondaryKey:string = "a", protected healthCalc:HealthCalculator = new HealthCalculator){
    this.activeKey = primaryKey;
  };
  
  private takeHit(firePower) {
    if (!this.isDead()) {
      this.health-=this.healthCalc.getDamage(firePower);
      if (this.isDead()) this.die();
    }
  }
  
  private die() {
    this.deadFunction();
  }
  
  public whenDead(func:Function) {
    this.deadFunction=func;
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

