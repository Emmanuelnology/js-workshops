/* 

Typescript Algorithm Challenge 

Import Liz and the interface from the data file

Create a function which will traverse all of the data and find the names of any descendant provided
Create a function that will return a person object by name
Create a function that takes two parameters (person and a search string) and outputs names of all the descendants of the search string 
Count the number of times a function is run to return the search

*/

import { Person, liz} from "./data"

export const findByName = (main:Person, name:string):Person => {
  if (main.name === name) return main;
  else if (!(main.hasOwnProperty("children"))) return undefined;
  else {
    for (const child of main.children) {
      let value:Person = findByName(child,name);
      if (value != undefined) if (value.name === name) return value;
    }
  }
}

export const findDescendants = (person:Person):string[] => {
  let descendants:string[] = [];
  return descendants;
}

export function search(b,c){
  
}
