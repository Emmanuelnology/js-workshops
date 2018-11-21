"use strict";
exports.__esModule = true;
var DamageService = /** @class */ (function () {
    function DamageService() {
        this.getDamage = function (firepower) {
            return Math.floor(Math.random() * firepower);
        };
    }
    return DamageService;
}());
var Mock_DamageService = /** @class */ (function () {
    function Mock_DamageService() {
        this.getDamage = function (firepower) {
            return firepower;
        };
    }
    return Mock_DamageService;
}());
var Character = /** @class */ (function () {
    function Character(name, primaryKey, secondaryKey, damageService) {
        if (primaryKey === void 0) { primaryKey = "s"; }
        if (secondaryKey === void 0) { secondaryKey = "a"; }
        if (damageService === void 0) { damageService = new DamageService; }
        this.name = name;
        this.primaryKey = primaryKey;
        this.secondaryKey = secondaryKey;
        this.damageService = damageService;
        this.activeKey = "a";
        this.health = 100;
        this.activeKey = primaryKey;
    }
    ;
    Character.prototype.takeHit = function (firePower) {
        if (!this.isDead()) {
            this.health -= this.damageService.getDamage(firePower);
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
    Character.prototype.isHealthy = function () {
        return this.health > 30;
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
exports.Character = Character;
