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

export const findByName = (startingPerson:Person, name:string):Person => {
  counter++;
  if (startingPerson.name === name) return startingPerson;
  else if (!("children" in startingPerson)) return undefined;
  for (const child of startingPerson.children) {
    let found:Person = findByName(child,name);
    if (found != undefined) return found;
  }
}

export const findDescendants = (person:Person):string[] => {
  counter++;
  let descendants:string[] = [];
  if ("children" in person) {
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
