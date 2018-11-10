/*


Programatically create the following outputs by filling in the missing function logic

Outputs:
--------
Hello, My name is Bob Smith
Mary is 11 years older than me
The total length of both my names is 8 characters

*/

var test = require('./testRunner');

var firstName = "Bob";
var lastName = "Smith";
var myAge = 22;
var maryAge = 33;

function greet(){
    return "Hello, My name is " + firstName + " " + lastName;
}

function maryAgeDifference() {
    var ageDif = maryAge - myAge;
    return "Mary is " + ageDif + "years younger than me"
}

function nameLength() {
    var totalNameLength = firstName.length + lastName.length;
    return "The total length of both names is " + totalNameLength + " characters";
}

test.run(greet, "Hello, My name is Bob Smith");
test.run(maryAgeDifference, "Mary is 11 years older than me");
test.run(nameLength, "The total length of both names is 8 characters");

test.show();