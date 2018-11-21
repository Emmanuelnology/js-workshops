class Game {
    damageAmount:number = 10;
    isActive:boolean = true;
}
class Character {
    public health:number = 100;
    public takeHit(firepower:number) {
        if(!this.isDead()){
            this.health -= firepower; 
        }
    }
    public shootAt(target:Character, firepower:number) {
        target.takeHit(firepower);
    }
    public isHealthy() {
        return this.health >= 20;
    }
    public isDead() {
        return this.health <= 0;
    }
    public resetHealth() {
        this.health = 100;
    }
}
