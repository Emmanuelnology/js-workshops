 class Game {
    damageAmount:number = 10;
    isActive:boolean = true;
}

class Character {
    public health:number = 100;
    public shootAt(target:Character, firepower:number) {
        target.takeHit(2);
    }
    public takeHit(firepower) {
        if (!this.isDead()) {
            this.health -= firepower;
        }
    }
    public isDead() {
        return this.health <= 0;
        
    }
    public resetHealth() {
        this.health = 100;
    }

    public isHealthy() {
        return this.health >= 100;
    }
}

