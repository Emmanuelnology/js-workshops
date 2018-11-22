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


export function getActiveUsers(people) {
  let returnArray = [];
  for (let index = 0; index < people.length; index++) {
    if (people[index].isActive)
      returnArray.push(people[index]);
  }
  return returnArray;
}
export function findMatchingEyeColours(people2, person){
  let testEyeColour = person.eyeColor
  let returnArray = [];
  for (let index = 0; index < people2.length; index++) {
    if (people2[index].eyeColor == testEyeColour && people2[index] != person)
      returnArray.push(people2[index].name);
  }
  return returnArray;
}

export function getEmailAddress(people, id) {
  for(let index = 0; index < people.length; index++){
    if(people[index].id == id)
      return people[index].email;
  }
  return undefined;
}

export function getActiveUsersWithInvalidEmail(people) {
  let returnArray = [];
  for(let index = 0; index < people.length; index++){
    if(people[index].email == undefined || people[index].email.indexOf('@') == -1){
      if(people[index].isActive == true)
        returnArray.push(people[index]);
    }
  }
  return returnArray;
}

export function addRandomMobileNumbers(people) {
  for(let index = 0; index < people.length; index++){
    addNumber(people[index]);
  }
  return people;
}

function addNumber(person){
  let rand="07"
  for(let i = 0; i < 10; i++){
    rand = rand + Math.floor((Math.random() * 10));
  }
  let split = rand.split("");
  split.splice(5,1, " ");
  let randomMobileNumber = split.join("");
  person.mobile = randomMobileNumber;
}
