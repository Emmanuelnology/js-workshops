var count = 5;
var count2 = 5;
count2 = "a";
//core types
var a;
var b;
var c;
var d;
// main four types in typescript
var e = ["kash", "George", "Craig"];
var f = ["kash", 5]; // this is classed as sloppy code
// both are set to arrays (example arrays after)
var Color;
(function (Color) {
    Color[Color["Red"] = 12] = "Red";
    Color[Color["Blue"] = 23] = "Blue";
    Color[Color["Green"] = 32] = "Green";
})(Color || (Color = {}));
console.log(Color.Red);
//Arrow functions
// all these functions do the same thing, just wrtitten differently
function log(message) {
    console.log(message);
}
;
log("Hello World");
var log2 = function (message) {
    console.log(message);
};
var log3 = function (message) { return console.log(message); };
log("hello world");
