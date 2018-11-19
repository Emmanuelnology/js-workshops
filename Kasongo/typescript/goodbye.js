var count = 5;
count = "a";
var a;
var b;
var c;
var d;
var e = ["Dave", "Liu"];
var f = ["Carole", 4, "David"];
var Color;
(function (Color) {
    Color[Color["Red"] = 12] = "Red";
    Color[Color["Blue"] = 23] = "Blue";
    Color[Color["Green"] = 32] = "Green";
})(Color || (Color = {}));
;
console.log(Color.Red);
function log(message) {
    console.log(message);
}
log("Hello World");
