/* 

Typescript Algorithm Challenge 

Import Liz and the interface from the data file

Create a function which will traverse all of the data and find the names of any descendant provided
Create a function that will return a person object by name
Create a function that takes two parameters (person and a search string) and outputs names of all the descendants of the search string 
Count the number of times a function is run to return the search

*/


import { liz, Person } from "./data";
let loops = 0;

function findByName(head:Person, name:string):Person {
  loops++;
  if(!("children" in head)) return {} as Person;
  for (let person of head.children) {
    if(person.name == name) return person;
    let result = findByName(person, name);
    if(result) if( result.name == name ) return result;
  }
  return undefined;
}

function findDescendants(head:Person) {
  loops++;
  let matches:string[] = [];
  if(head) if("children" in head){
    for (let person of head.children) {
      matches.push(person.name);
      matches = matches.concat(findDescendants(person));
    }
}
  return matches;
}

function search(person:Person, text:string){
  let startPerson:Person = findByName(person, text);
  return findDescendants(startPerson);
}

console.log(search(liz, 'Charles'));
console.log("Count: " + loops);

//Tests find descendants
// liz
// liz.children[0]
// Dont forget negatives