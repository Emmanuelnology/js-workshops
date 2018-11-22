class Game {
  damageAmount:number=10;
  isActive:boolean=true;
}

class RandomiserService {
  randomElement = (items:any[]) => {
    return items[Math.floor(Math.random()*items.length)];
  }
}

class Mock_RandomiserService extends RandomiserService implements RandomiserService{
  randomElement = (items:any[]) => {
    return items[0];
  }
}

class Character {
  public health:number = 100;
  public streak:number = 0;
  public activeKey:string;
  public name:string;
  
  constructor (private keys = ['a','s','d'], private randomiserService:RandomiserService = new RandomiserService){
    this.activeKey = keys[0];
  }

  public shootAt(target:Character, firepower:number, key:string){
    if(key==this.activeKey){
      target.takeHit(firepower);
      this.streak++;
    }
    else {
      this.takeHit(firepower);
      this.streak=0;
    }
    this.swapKeys();
  }

  public isMyKey(key) {
    return (this.keys.indexOf(key)!=-1);
  }

  public swapKeys(){
    this.activeKey = this.randomiserService.randomElement(this.keys);
  }
  
  public getHealthColor(){
    let healthRatio = this.health/100;
    let color = {
      red: 255 - (255 * healthRatio),
      green: (255 * healthRatio),
      blue: 0
    };
    return "rgb("+color.red + "," + color.green + "," + color.blue + ")";
  }
  
  public isHealthy() {
    return this.health >= 30;
  }
  
  public takeHit(firepower:number){
    if(!this.isDead()){
      this.health-=firepower;
    } 
  }
  
  public isDead() {
    return this.health <= 0;
  }
  
  public resetHealth() {
    this.health=100;
  }
}