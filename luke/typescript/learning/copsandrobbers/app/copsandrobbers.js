var Character = /** @class */ (function () {
    function Character() {
        this.health = 100;
    }
    Character.prototype.takeHit = function (firePower) {
        if (!this.isDead())
            this.health -= firePower;
    };
    Character.prototype.shootAt = function (target, firePower) {
        target.takeHit(firePower);
    };
    Character.prototype.isDead = function () {
        return this.health <= 0;
    };
    ;
    Character.prototype.resetHealth = function () {
        return this.health = 100;
    };
    Character.prototype.isHealthy = function () {
        return this.health >= 30;
    };
    return Character;
}());
var Game = /** @class */ (function () {
    function Game() {
        this.damageAmount = 10;
        this.isActive = true;
    }
    return Game;
}());
