var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Game = /** @class */ (function () {
    function Game() {
        this.damageAmount = 10;
        this.isActive = true;
    }
    return Game;
}());
var RandomiserService = /** @class */ (function () {
    function RandomiserService() {
        this.randomElement = function (items) {
            return items[Math.floor(Math.random() * items.length)];
        };
    }
    return RandomiserService;
}());
var Mock_RandomiserService = /** @class */ (function (_super) {
    __extends(Mock_RandomiserService, _super);
    function Mock_RandomiserService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.randomElement = function (items) {
            return items[0];
        };
        return _this;
    }
    return Mock_RandomiserService;
}(RandomiserService));
var Character = /** @class */ (function () {
    function Character(keys, randomiserService) {
        if (keys === void 0) { keys = ['a', 's', 'd']; }
        if (randomiserService === void 0) { randomiserService = new RandomiserService; }
        this.keys = keys;
        this.randomiserService = randomiserService;
        this.health = 100;
        this.streak = 0;
        this.activeKey = keys[0];
    }
    Character.prototype.shootAt = function (target, firepower, key) {
        if (key == this.activeKey) {
            target.takeHit(firepower);
            this.streak++;
        }
        else {
            this.takeHit(firepower);
            this.streak = 0;
        }
        this.swapKeys();
    };
    Character.prototype.isMyKey = function (key) {
        return (this.keys.indexOf(key) != -1);
    };
    Character.prototype.swapKeys = function () {
        this.activeKey = this.randomiserService.randomElement(this.keys);
    };
    Character.prototype.getHealthColor = function () {
        var healthRatio = this.health / 100;
        var color = {
            red: 255 - (255 * healthRatio),
            green: (255 * healthRatio),
            blue: 0
        };
        return "rgb(" + color.red + "," + color.green + "," + color.blue + ")";
    };
    Character.prototype.isHealthy = function () {
        return this.health >= 30;
    };
    Character.prototype.takeHit = function (firepower) {
        if (!this.isDead()) {
            this.health -= firepower;
        }
    };
    Character.prototype.isDead = function () {
        return this.health <= 0;
    };
    Character.prototype.resetHealth = function () {
        this.health = 100;
    };
    return Character;
}());
