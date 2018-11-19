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

export const getActiveUsers = (people:Person[]) => {
  let activeUsers:Person[] = [];
  for (const person of people) {
    if(person.isActive === true) activeUsers.push(person);
  }
  return activeUsers;
}

export const findMatchingEyeColours = (people:Person[], comparison:Person) => {
  let matches:string[] = [];
  if(comparison != undefined && ('eyeColor' in comparison)){
    for (let person of people) {
      if (person.eyeColor === comparison.eyeColor && person.id != comparison.id) {
        matches.push(person.name);
      }
    }
  }
  return matches;
}

export const getEmailAddress = (people:Person[], id:number) => {
  for (const person of people) {
    if (person.id === id) return person.email;
  }
}

export const getActiveUsersWithInvalidEmail = (people:Person[]) => {
  let invalidUsers:Person[] = [];
  let activeUsers:Person[] = getActiveUsers(people);
  for (let person of activeUsers) {
    if (person.hasOwnProperty("email") != true) invalidUsers.push(person)
    else if (person.email.indexOf('@')==-1) invalidUsers.push(person);
  }
  return invalidUsers;
}

const generateRandomNumber = (min:number, max:number) => 
  Math.floor(Math.random() * (max - min) ) + min;
  
const generateMobileNumber = () => {
  let areaCode = "07";
  let first = generateRandomNumber(100, 1000);
  let second = generateRandomNumber(10000, 1000000);
  return areaCode + first + " " + second;
}

export function addRandomMobileNumbers(people:Person[]):Person[]{
  for(let person of people){
    person.mobile = generateMobileNumber();
  }
  return people;
}