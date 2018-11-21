/* 

Typescript Algorithm Challenge 

Import Liz and the interface from the data file

Create a function which will traverse all of the data and find the names of any descendant provided
Create a function that will return a person object by name
Create a function that takes two parameters (person and a search string) and outputs names of all the descendants of the search string 
Count the number of times a function is run to return the search

*/
import {liz, Person} from './data';

export const findByName = (startingPerson:Person, searchName:string) => {
    if (startingPerson.name === searchName) return startingPerson;
    if (!("children" in startingPerson)) return undefined;
    for (const child of startingPerson.children) {
            let recursion:Person = findByName(child, searchName);
            if (recursion != undefined) return recursion;
    }
}
export const findDescendants = (prescendant:Person) => {
    let descendants:string[] = [];
    if (prescendant.hasOwnProperty('children')) {
        for (let child of prescendant.children) {
            descendants.push(child.name);
            descendants = descendants.concat(findDescendants(child));
        }
    }
    return descendants;
}

export function search(){
  
}
