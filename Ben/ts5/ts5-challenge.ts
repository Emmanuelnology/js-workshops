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

export const getActiveUsers = (people:Person[]):Person[] => {
  let activeUsers:Person[] = [];
  for (const person of people) {
    if (person.isActive) activeUsers.push(person);
  }
  return activeUsers;
}

export const findMatchingEyeColours = (people:Person[], eyePerson:Person):string[] => { 
  let matchingNames:string[] = [];
  if (eyePerson != undefined && "eyeColor" in eyePerson) {
    for (const person of people) {
      if (person.id != eyePerson.id && person.eyeColor === eyePerson.eyeColor) {
        matchingNames.push(person.name);
      }
    }
  }
  return matchingNames;
}

export const getEmailAddress = (people:Person[], id:number):string => {
  for (const person of people) {
    if (person.id === id) return person.email;
  }
}

export const getActiveUsersWithInvalidEmail = (people:Person[]):Person[] => {
  let activeWithInvalidEmail:Person[] = [];
  const activeUsers:Person[] = getActiveUsers(people);
  for (const person of activeUsers) {
    if ("email" in person) {
      if (person.email.indexOf("@") == -1) {
        activeWithInvalidEmail.push(person);
      }
    }
    else activeWithInvalidEmail.push(person);
  }
  return activeWithInvalidEmail;
}

const randomThreeDigitNumber = (min:number, max:number):string => {
  let unpadded:number = Math.floor(Math.random() * (max - min)) + min;
  return (unpadded < 10) ? "00" + unpadded : (unpadded < 100) ? "0" + unpadded : unpadded.toString();
}

export let addRandomMobileNumbers = (people:Person[]):Person[] => {
  for (const person of people) {
    person.mobile = "07" + randomThreeDigitNumber(0,100) + " " + randomThreeDigitNumber(0,100) + randomThreeDigitNumber(0,100);
  }
  return people;
}
