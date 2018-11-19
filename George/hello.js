var count = 0;
count = 'a';
var a;
var b;
var c;
var d;
var e = ["Kash", "Dave", "Bob"];
var f = ["Jeremy", 5];
var Colour;
(function (Colour) {
    Colour[Colour["Red"] = 12] = "Red";
    Colour[Colour["Blue"] = 23] = "Blue";
    Colour[Colour["Green"] = 32] = "Green";
})(Colour || (Colour = {}));
;
console.log(Colour);
console.log(Colour.Red);
