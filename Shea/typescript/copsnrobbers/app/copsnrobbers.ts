class Game {
    damageAmount:number = 10;
    isActive:boolean = true;
}

class Character {
    public health:number = 100;
    public takeHit(firepower){
        if(!this.isDead()){
        this.health-=firepower;
        }
    }

    public shootAt(target, firepower:number) {
        target.takeHit(firepower)
    }

    public isDead() {
        return this.health <= 0;
    }

    public isHealthy() {
        return this.health >= 30;
    }

    public resetHealth() {
        this.health = 100;
    }

}