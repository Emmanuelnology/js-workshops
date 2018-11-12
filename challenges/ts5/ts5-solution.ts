import {Person} from './ts5-data';

export function getActiveUsers(people:Person[]) {
  let activeUsers:Person[] = [];
  for (let person of people){
    if (person.isActive) activeUsers.push(person);
  }
  return activeUsers;  
}

export function findMatchingEyeColours(people:Person[], sourcePerson:Person){ // takes person object
  let matches:string[]=[];
  if(sourcePerson != undefined && ('eyeColor' in sourcePerson)){
    for(let person of people)
    if(person.eyeColor == sourcePerson.eyeColor && person.id != sourcePerson.id){
      matches.push(person.name);
    }
  }
  return matches;
}

export function getEmailAddress(people:Person[], id:number){
  for(let person of people){
    if(person.id==id) return person.email;
  }
}

export function getActiveUsersWithInvalidEmail(people:Person[]) {
  let invalidPeople:Person[] = [];
  let activeUsers=getActiveUsers(people);
  for(let person of activeUsers){
    if ('email' in person) {
      if(person.email.indexOf('@')==-1) invalidPeople.push(person);
    }
    else invalidPeople.push(person);
  }
  return invalidPeople;
}

export function addRandomMobileNumbers(people:Person[]){
  for(let person of people){
    person.mobile = generateRandomMobileNumber();
  }
  return people;
}

function generateRandomMobileNumber() {
  let prefix = "07";
  let first = getRandomInteger(100, 1000);
  let second = getRandomInteger(100000, 1000000);
  return prefix + first + " " + second;
}

function getRandomInteger(min:number, max:number) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
