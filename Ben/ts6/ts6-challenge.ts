/* 

Typescript Algorithm Challenge 

Import Liz and the interface from the data file

Create a function which will traverse all of the data and find the names of any descendant provided
Create a function that will return a person object by name
Create a function that takes two parameters (person and a search string) and outputs names of all the descendants of the search string 
Count the number of times a function is run to return the search

*/

import { Person, liz} from "./data"
let counter:number = 0;

export const findByName = (main:Person, name:string):Person => {
  counter++;
  if (main.name === name) return main;
  else if (!(main.hasOwnProperty("children"))) return undefined;
  for (const child of main.children) {
    let value:Person = findByName(child,name);
    if (value != undefined && value.name === name) return value;
  }
}

export const findDescendants = (person:Person):string[] => {
  counter++;
  let descendants:string[] = [];
  if (person.hasOwnProperty("children")) {
    for (const child of person.children) {
      descendants.push(child.name);
      descendants = descendants.concat(findDescendants(child));
    }
  }
  return descendants;
}

export const search = (person:Person, searchString:string) => {
  let startingPerson = findByName(person,searchString);
  return findDescendants(startingPerson);
}
