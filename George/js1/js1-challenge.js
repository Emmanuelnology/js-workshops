/*


Programatically create the following outputs by filling in the missing function logic

Outputs:
--------
Hello, My name is Bob Smith
Mary is 11 years older than me
The total length of both names is 8 characters

*/

var test = require("./js1-tests");

var firstName = "Bob";
var lastName = "Smith";
var myAge = 22;
var maryAge = 33;

function greet(){
  return "Hello, My name is " + firstName + " " + lastName;
}

function maryAgeDifference() {
  return "Mary is " + (maryAge - myAge) + " years older than me";
}

function nameLength() {
  return "The total length of both names is " + (firstName.length + lastName.length) + " characters";
}

console.log("\n\nRunning tests...");
test.greet(greet);
test.maryAgeDifference(maryAgeDifference);
test.nameLength(nameLength);
test.summary();