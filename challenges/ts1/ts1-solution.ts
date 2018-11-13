let firstName = "Bob";
let lastName = "Smith";
let myAge = 22;
let maryAge = 33;

export function greet(){
  return "Hello, My name is " + firstName + " " + lastName;
}

export function maryAgeDifference() {
    var ageDifference = maryAge - myAge;
    return "Mary is " + ageDifference + " years older than me";
}

export function nameLength() {
  var totalLength = firstName.length + lastName.length;
  return "The total length of both names is " + totalLength + " characters";
}
