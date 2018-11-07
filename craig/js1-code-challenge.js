/*

Take 4 inputs as variable declarations: First Name, Last Name, Your Age and My Age and create the four calculated outputs as below:

Hello, My name is Craig Livings
I am 11 years older than you
The total length of both names is 12

*/


var firstName = "Craig";
var lastName = "Livings";
var nologistAge = 22;
var craigAge = 33;

var ageDifference = craigAge - nologistAge;

var totalLength = firstName.length + lastName.length;

console.log(`Hello, My name is ${firstName} ${lastName}`);
console.log("I am " + ageDifference + " years older than you");
console.log("The total length of both names is " + totalLength);
