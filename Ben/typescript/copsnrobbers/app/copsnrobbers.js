var Game = /** @class */ (function () {
    function Game() {
        this.damageAmount = 10;
    }
    return Game;
}());
var Character = /** @class */ (function () {
    function Character() {
        var _this = this;
        this.health = 100;
        this.isDead = function () { return _this.health <= 0; };
        this.takeHit = function (firepower) {
            if (!_this.isDead())
                _this.health -= firepower;
        };
        this.shootAt = function (target, firepower) { return target.takeHit(firepower); };
        this.resetHealth = function () { return _this.health = 100; };
    }
    return Character;
}());
