/* 

Typescript Algorithm Challenge 

Import Liz and the interface from the data file

Create a function which will traverse all of the data and find the names of any descendant provided
Create a function that will return a person object by name
Create a function that takes two parameters (person and a search string) and outputs names of all the descendants of the search string 
Count the number of times a function is run to return the search

*/
import {liz, Person} from './data';

let count = 0;

export const findByName = (startingPerson:Person, searchName:string):Person => {
    count++;
    if (startingPerson.name === searchName) return startingPerson;
    if (startingPerson.hasOwnProperty('children')) {
        for (const child of startingPerson.children) {
                let recursion = findByName(child, searchName);
                if (recursion != undefined) return recursion;
        } 
    }
    return undefined;
}
export const findDescendants = (prescendant:Person) => {
    count++;
    let descendants:string[] = [];
    if (prescendant.hasOwnProperty('children')) {
        for (let child of prescendant.children) {
            descendants.push(child.name);
            descendants = descendants.concat(findDescendants(child));
        }
    }
    return descendants;
}

export function search(person:Person, searchString:string) { 
  let personObject = findByName(person, searchString);
  return findDescendants(personObject);
}

console.log(search(liz, 'Charles'));
console.log(count);