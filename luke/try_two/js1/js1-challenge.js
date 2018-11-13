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
return "Hello, My name is " + firstName + " " + lastName
}

function maryAgeDifference() {
var ageDiff = maryAge - myAge 
return "Mary is " + ageDiff + " years older than me"
}

function nameLength() {
lengthName = firstName.length + lastName.length
return "The total length of both names is " + lengthName + " characters"
}

console.log("\n\nRunning tests...");
test.greet(greet);
test.maryAgeDifference(maryAgeDifference);
test.nameLength(nameLength);
test.summary();

console.log(greet)
console.log(maryAgeDifference)
console.log(nameLength)