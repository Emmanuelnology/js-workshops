"use strict";
/*


Programatically create the following outputs by filling in the missing function logic

Outputs:
--------
Hello, My name is Bob Smith
Mary is 11 years older than me
The total length of both names is 8 characters

*/
exports.__esModule = true;
var firstName = "Bob";
var lastName = "Smith";
var myAge = 22;
var maryAge = 33;
// export function greet():string {
//   return "Hello, My name is "+firstName+" "+lastName;
// ... your code here
// }
exports.greet = function () { return "Hello, My name is " + firstName + " " + lastName; };
// export function maryAgeDifference():string{
//   const ageDiff:number = maryAge - myAge;
//   return "Mary is "+ageDiff+" years older than me";
//  ... your code here
// }
exports.maryAgeDifference = function () {
    var ageDiff = maryAge - myAge;
    return "Mary is " + ageDiff + " years older than me";
    // ... your code here
};
exports.nameLength = function () {
    var lengthOfNames = firstName.length + lastName.length;
    return "The total length of both names is " + lengthOfNames + " characters";
    // ... your code here
};
