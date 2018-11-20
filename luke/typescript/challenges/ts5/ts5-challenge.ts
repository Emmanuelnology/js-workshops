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

export function getActiveUsers(people:Person[]) {
  let activeUsers:Person[] =[] ;
  for(let person of people){
    if(person.isActive) activeUsers.push(person);}
  return activeUsers ; //change this line (and add others)
}

export function findMatchingEyeColours(people:Person[]) {
  let colorEye:Person[]=[];
  for (let person of people){
  if (person.eyeColor == ) colorEye.push(person);}
  return []; //change this line (and add others)
}

export function getEmailAddress(){



  return ''; //change this line (and add others)
}

export function getActiveUsersWithInvalidEmail(people){
  let activeInvalidEmail = []
  let activeUsersArray = getActiveUsers(people)
  return people; //change this line (and add others)
}

export let addRandomMobileNumbers = (people) =>{
  return people; //change this line (and add others)
}
