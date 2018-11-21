 class Game {
    damageAmount:number = 10;
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
    private isDead() {
        return this.health <= 0;
        
    }
    public resetHealth() {
        this.health = 100;
    }
}

