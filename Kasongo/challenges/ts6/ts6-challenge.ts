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

export let findByName = (head:Person, name:string):Person  => {
    loops++;
    if (!('children' in head)) return {} as Person;
    for (let person of head.children) {
        if (person.name == name) return person;
        let result = findByName(person, name);
        if (result) if (result.name == name) return result;
    }
    return undefined; 
}
export let findDescendants = (head:Person) => {
    loops++;
    let descendant:string[] = [];
    if (head) if ('children' in head)
        for (let person of head.children ) {
            descendant.push(person.name);
            descendant = descendant.concat(findDescendants(person));   
    }
    return descendant;
}

export let search = (person:Person, research:string) => {
    let allDescandant = findByName(person, research);
    return findDescendants(allDescandant);  
}

console.log(search(liz, 'William'));
console.log('Count: '+loops);
