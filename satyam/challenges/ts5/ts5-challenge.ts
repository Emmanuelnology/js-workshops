import { Person, people } from './ts5-data';
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

export function getActiveUsers(people:Person[]) {
  let activeUsers:Person[] = [];
  for (let person of people) {
    if (person.isActive) activeUsers.push(person);
  }
  return activeUsers;  
}

export function findMatchingEyeColours(people:Person[], sourcePerson:Person){
  let matchingEyeColors:string[] = [];
  if(sourcePerson != undefined && ('eyeColor' in sourcePerson)){
    for (let person of people) {
      if(person.eyeColor == sourcePerson.eyeColor && person.id != sourcePerson.id) {
        matchingEyeColors.push(person.name);
      }
    }
  }
  return matchingEyeColors;
}

export function getEmailAddress(people:Person[], id:number){
  for(let person of people){
    if(person.id== id) return person.email;
  }
}

export function getActiveUsersWithInvalidEmail(people:Person[]) {
  let invalidMails:Person[] = [];
  let activeUsers = getActiveUsers(people);
  for (let person of activeUsers) {
    if('email' in person) {
      if(person.email.indexOf('@')==-1) invalidMails.push(person);
    }
    else invalidMails.push(person);
  }
  return invalidMails;
}

export function addRandomMobileNumbers(people:Person[]){
  for(let person of people){
    person.mobile = randomNumberGenerator();
  }
  return people;
}

function randomNumberGenerator() {
  let prefix = "07";
  let first = integerRandomiser(100, 1000);
  let second = integerRandomiser(100000, 1000000);
  return prefix + first + " " + second;
}

function integerRandomiser(min:number, max:number) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
