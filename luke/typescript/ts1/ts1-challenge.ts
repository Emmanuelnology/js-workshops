/*


Programatically create the following outputs by filling in the missing function logic

Outputs:
--------
Hello, My name is Bob Smith
Mary is 11 years older than me
The total length of both names is 8 characters

*/

const firstName = "Bob";
const lastName = "Smith";
const myAge = 22;
const maryAge = 33;

// export function greet():string {

//   return "Hello, My name is "+firstName+" "+lastName;
// ... your code here
// }

export let greet = ():string => 
{return "Hello, My name is "+firstName+" "+lastName; }



// export function maryAgeDifference():string{

//   const ageDiff:number = maryAge - myAge;

//   return "Mary is "+ageDiff+" years older than me";
//  ... your code here
// }

export let maryAgeDifference =():string => {

  const ageDiff:number = maryAge - myAge;

  return "Mary is "+ageDiff+" years older than me";
// ... your code here
}

export let nameLength = ():string => {
  
  const lengthOfNames:number = firstName.length+lastName.length;

  return "The total length of both names is "+lengthOfNames+" characters";
// ... your code here
}
