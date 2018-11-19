var count;
count = "a";
var count2 = 5;
count2 = "a";
var a;
var b;
var c;
var d;
var e = ["Kash", "Dave", "Bob"];
var f = ["Jeremy", 5];
var Color;
(function (Color) {
    Color[Color["Red"] = 12] = "Red";
    Color[Color["Blue"] = 23] = "Blue";
    Color[Color["Green"] = 32] = "Green";
})(Color || (Color = {}));
;
console.log(Color.Red);
