var HealthCalculator = /** @class */ (function () {
    function HealthCalculator() {
        this.getDamage = function (firepower) {
            return Math.floor(Math.random() * firepower);
        };
    }
    return HealthCalculator;
}());
var Mock_HealthCalculator = /** @class */ (function () {
    function Mock_HealthCalculator() {
        this.getDamage = function (firepower) {
            return firepower;
        };
    }
    return Mock_HealthCalculator;
}());
var Character = /** @class */ (function () {
    function Character(name, primaryKey, secondaryKey, healthCalc) {
        if (primaryKey === void 0) { primaryKey = "s"; }
        if (secondaryKey === void 0) { secondaryKey = "a"; }
        if (healthCalc === void 0) { healthCalc = new HealthCalculator; }
        this.name = name;
        this.primaryKey = primaryKey;
        this.secondaryKey = secondaryKey;
        this.healthCalc = healthCalc;
        this.activeKey = "a";
        this.health = 100;
        this.activeKey = primaryKey;
    }
    ;
    Character.prototype.takeHit = function (firePower) {
        if (!this.isDead()) {
            this.health -= this.healthCalc.getDamage(firePower);
            if (this.isDead())
                this.die();
        }
    };
    Character.prototype.die = function () {
        this.deadFunction();
    };
    Character.prototype.whenDead = function (func) {
        this.deadFunction = func;
    };
    Character.prototype.shootAt = function (target) {
        target.takeHit(5);
        this.swapKeys();
    };
    Character.prototype.swapKeys = function () {
        this.activeKey = (this.activeKey == this.primaryKey) ? this.secondaryKey : this.primaryKey;
    };
    Character.prototype.isDead = function () {
        return this.health <= 0;
    };
    return Character;
}());
