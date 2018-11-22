var Game = /** @class */ (function () {
    function Game() {
        this.damageAmount = 10;
        this.isActive = true;
    }
    return Game;
}());
var Character = /** @class */ (function () {
    function Character() {
        this.health = 100;
    }
    Character.prototype.takeHit = function (firepower) {
        if (!this.isDead()) {
            this.health -= firepower;
        }
    };
    Character.prototype.shootAt = function (target, firepower) {
        target.takeHit(firepower);
    };
    Character.prototype.isDead = function () {
        return this.health <= 0;
    };
    Character.prototype.isHealthy = function () {
        return this.health >= 30;
    };
    Character.prototype.resetHealth = function () {
        this.health = 100;
    };
    return Character;
}());
