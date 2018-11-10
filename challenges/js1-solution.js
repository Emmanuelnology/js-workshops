var test = require('./testRunner');

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

test.run(greet, "Hello, My name is Bob Smith");
test.run(maryAgeDifference, "Mary is 11 years older than me");
test.run(nameLength, "The total length of both names is 8 characters");
