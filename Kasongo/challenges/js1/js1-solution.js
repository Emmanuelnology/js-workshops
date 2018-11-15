var test = require("./js1-tests");

var firstName = "Bob";
var lastName = "Smith";
var myAge = 22;
var maryAge = 33;

function greet(){
  return "Hello, My name is " + firstName + " " + lastName;
}

function maryAgeDifference() {
    var ageDifference = maryAge - myAge;
    return "Mary is " + ageDifference + " years older than me";
}

function nameLength() {
  var totalLength = firstName.length + lastName.length;
  return "The total length of both names is " + totalLength + " characters";
}

console.log("\n\nRunning tests...");
test.greet(greet);
test.maryAgeDifference(maryAgeDifference);
test.nameLength(nameLength);
test.summary();