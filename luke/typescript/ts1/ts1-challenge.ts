/*


Programatically create the following outputs by filling in the missing function logic

Outputs:
--------
Hello, My name is Bob Smith
Mary is 11 years older than me
The total length of both names is 8 characters

*/

var firstName = "Bob";
var lastName = "Smith";
var myAge = 22;
var maryAge = 33;

export function greet(){
  return "Hello, My name is "+firstName+" "+lastName;
  // ... your code here
}

export function maryAgeDifference() {
  let ageDiff = maryAge - myAge;
  return "Mary is "+ageDiff+" years older than me"
// ... your code here
}

export function nameLength() {
  let lengthOfNames = firstName.length+lastName.length

  return "The total length of both names is "+lengthOfNames+" characters"
// ... your code here
}
