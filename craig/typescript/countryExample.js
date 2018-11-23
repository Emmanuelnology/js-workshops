var Currency = /** @class */ (function () {
    function Currency(value, countryCode) {
        this.countryCode = countryCode;
        this.map = {
            uk: {
                symbol: "£",
                atStart: true,
                seperator: ".",
                decimalPlaces: 2
            },
            us: {
                symbol: "$",
                atStart: true,
                seperator: ".",
                decimalPlaces: 2
            },
            fr: {
                symbol: "€",
                atStart: false,
                seperator: ",",
                decimalPlaces: 2
            }
        };
        this.numberWithCommas = function (number) {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        };
        this.displayValue = value;
    }
    Currency.prototype.addSymbol = function (value) {
        if (this.map[this.countryCode].atStart) {
            return this.map[this.countryCode].symbol + value;
        }
        else {
            return value + this.map[this.countryCode].symbol;
        }
    };
    Currency.prototype.addDecimal = function (value, decimalPlaces) {
        var index = value.toString().length - decimalPlaces;
        var string = value.toString();
        var decimalSymbol = this.map[this.countryCode].seperator;
        if (index > 0) {
            return string.substr(0, index) + decimalSymbol + string.substr(index, string.length);
        }
        else {
            return "0" + decimalSymbol + this.paddingLeft("0".repeat(decimalPlaces), string);
        }
    };
    Currency.prototype.paddingLeft = function (pad, str) {
        if (typeof str === 'undefined')
            return pad;
        return (pad + str).slice(-pad.length);
    };
    Currency.prototype.get = function () {
        this.displayValue = this.addDecimal(this.displayValue, this.map[this.countryCode].decimalPlaces);
        this.displayValue = this.addSymbol(this.displayValue);
        return this.displayValue;
    };
    return Currency;
}());
var smUKPrice = new Currency(9, 'uk');
console.log(smUKPrice.get());
var mdUKPrice = new Currency(99, 'us');
console.log(mdUKPrice.get());
var lgUKPrice = new Currency(999, 'uk');
console.log(lgUKPrice.get());
var frPrice = new Currency(999, 'fr');
console.log(frPrice.get());
