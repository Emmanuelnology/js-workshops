/*


Programatically create the following outputs by filling in the missing function logic

Outputs:
--------
Hello, My name is Bob Smith
Mary is 11 years older than me
The total length of both my names is 8 characters

*/

var firstName = "Bob";
var lastName = "Smith";
var myAge = 22;
var maryAge = 33;

export let greet = ():string => {
  return 'Hello, My name is '+firstName+' '+lastName;
}

export const maryAgeDifference = ():string => {
  const ageDiff:number = maryAge - myAge;
  return 'Mary is '+ageDiff+' years older than me';
}

export let nameLength = ():string => {
  const namLength:number = firstName.length + lastName.length;
  return 'The total length of both names is '+namLength+ ' characters';
}
