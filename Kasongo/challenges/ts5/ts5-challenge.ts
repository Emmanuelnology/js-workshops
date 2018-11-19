/*

JS5: Conditions, data manipulation and working with tests

Create functions that:
Returns an object that has an array of active users
Take a person object and will return the names of all people who have matching eye colors
Takes an ID and returns an email address
Finds all active users with an invalid email address. Returns an array of objects.
Programatically add a random mobile phone number to each record (formatted '07XXX XXXXXX'). Returns the whole people array after modification

Run your tests by running this file. They will all break at first.

*/
import {Person} from './ts5-data';


export let getActiveUsers = (people:Person[]) => {
  let peopleActive = [];
  for (let person of people) {
    if (person.isActive) peopleActive.push(person); {
    }
    return peopleActive;
  }  
  

export let findMatchingEyeColours = (people:Person[], sourcePerson:Person) => {
  let peopleMatching:string[] = [];
  if (sourcePerson != undefined && ('eyeColor' in sourcePerson)) {
    for (let person of people) {
    if (person.eyeColor == sourcePerson.eyeColor && person.id != sourcePerson.id) {
        peopleMatching.push(person.name);
    }
  }
  return peopleMatching; 
}

export let getEmailAddress = (people:any[], id:number) => {
  for (let person of people) {
    if (person.id == id) return person.email;
  }
}

export let getActiveUsersWithInvalidEmail = (people:Person[]) => {
  let invalidUsers:string[] = [];
  let listActive = getActiveUsers(people);
  for (let person of listActive) {
    if ('email' in person) {
      if (person.email.indexOf('@')==-1) invalidUsers.push(person);
    }
    invalidUsers.push(person);

  }
  return invalidUsers; //change this line (and add others)
}

export let addRandomMobileNumbers = (people:Person[]) =>  {
  for (let person of people) {
    person.mobile = generateRandomNumber();
  }
  return people; //change this line (and add others)
}

export let getRandomNumber = (min:number, max:number) => {
  return  Math.floor(Math.random() * (max - min) ) + min;
}

export let generateRandomNumber = ():string => {
  let prefix = '07';
  let firstPart = getRandomNumber(100,1000);
  let secondPart= getRandomNumber(100,10000);
  return prefix + ' ' + firstPart + ' ' +secondPart;
}
