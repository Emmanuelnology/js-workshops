interface Language {
  gameTitle:string;
  copTitle:string;
  robberTitle:string;
  copInstruction:string;
  robberInstruction:string;
  warningMessage:string;
  robberDead:string;
  copDead:string;
  playAgain:string;
  swapLang:string;
}

class Game {
  public damageAmount:number = 10;
  public isActive:boolean = false;
  public isWelsh:boolean = false;
  public language:Language;
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