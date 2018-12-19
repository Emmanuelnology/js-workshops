

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
//need to create a function that searches the names of the children of liz
export function findByName(head:Person, name:string):Person {
  loops++;
  if(!("children" in head)) return {} as Person;
  for (let Person of head.children) {
    if(Person.name===name) return Person;
    let results = findByName(Person, name)
    if(results) if (results.name == name) return results
  }
 return undefined
}

export function findDescendants() {
 
}

export function search(person:Person, search:string){
  let searchPerson = findByName(person, search);
  return searchPerson
}

console.log("Count: " + loops);