/*


Programatically create the following outputs by filling in the missing function logic

Outputs:
--------
Hello, My name is Bob Smith
Mary is 11 years older than me
The total length of both my names is 8 characters

*/

var test = require("./js1-tests");

var firstName = "Bob";
var lastName = "Smith";
var myAge = 22;
var maryAge = 33;

function greet(){
  // ... your code here
  return 'Hello, My name is ' + firstName + ' ' + lastName;
}

function maryAgeDifference() {
// ... your code here
var maryAgeDifference = maryAge - myAge; 
return 'Mary is ' + maryAgeDifference + ' years older than me';
}

function nameLength() {
// ... your code here
var totLength = ((firstName.length) + (lastName.length))
return 'The total length of both names is ' + totLength + ' characters'
}

console.log("\n\nRunning tests...");
test.greet(greet);
test.maryAgeDifference(maryAgeDifference);
test.nameLength(nameLength);
test.summary();