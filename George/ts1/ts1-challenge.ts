/*


Programatically create the following outputs by filling in the missing function logic

Outputs:
--------
Hello, My name is Bob Smith
Mary is 11 years older than me
The total length of both my names is 8 characters

*/

let firstName:string = "Bob";
let lastName:string = "Smith";
let myAge:number = 22;
let maryAge:number = 33;

export let greet = ():string => "Hello, My name is " + firstName + " " + lastName;

export let maryAgeDifference= ():string => "Mary is " + (maryAge - myAge) + " years older than me";

export let nameLength = ():string => "The total length of both names is " + (firstName.length + lastName.length) + " characters";
