/*


Programatically create the following outputs by filling in the missing function logic

Outputs:
--------
Hello, My name is Bob Smith
Mary is 11 years older than me
The total length of both names is 8 characters

*/

const firstName:string = "Bob";
const lastName:string = "Smith";
const myAge:number = 22;
const maryAge:number = 33;

export function greet():string {
  return "Hello, My name is " + firstName + " " + lastName;
}

export function maryAgeDifference():string {
  const ageDifference:number = maryAge - myAge;
  return "Mary is " + ageDifference + " years older than me";
}

export function nameLength():string {
  const totalLength:number = firstName.length + lastName.length;
  return "The total length of both names is " + totalLength + " characters";
}
