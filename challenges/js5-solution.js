/*

JS3 Challenge 1: Objects and Iteration

Create 5 functions that:
Returns an object that has an array of active users
Take a person object and will return the names of all people who have matching eye colors
Takes an ID and returns an email address
Finds all active users with an invalid email address
Programatically add a random mobile phone number to each record (formatted '07XXX XXXXXX')

*/

var test = require("./js5-solution.tests");

function getActiveUsers(people) {
  var activeUsers = [];
  for(personIndex = 0; personIndex < people.length; personIndex++){
    var person = people[personIndex];
    if (person.isActive) activeUsers.push(person);
  }
  return activeUsers;  
}

function findMatchingEyeColours(people, sourcePerson){ // takes person object
 var matches=[];
 if(sourcePerson != undefined && sourcePerson.hasOwnProperty('eyeColor')){
  for(personIndex = 0; personIndex < people.length; personIndex++){
      var person = people[personIndex];
      if(person.eyeColor == sourcePerson.eyeColor && person.id != sourcePerson.id){
          matches.push(person.name);
      }
    }
  }
    return matches;
}

function getEmailAddress(people, id){
  for(personIndex = 0; personIndex < people.length; personIndex++){
      var person = people[personIndex];
      if(person.id==id){
          return person.email;
      }
    }
}

function getActiveUsersWithInvalidEmail(people) {
    var activeUsers = getActiveUsers(people);
    var invalidPeople = [];
    for(personIndex = 0; personIndex < activeUsers.length; personIndex++){
      var person = activeUsers[personIndex];
      if (person.hasOwnProperty('email')){
        if(!person.email.includes('@')) invalidPeople.push(person);
      }
      else invalidPeople.push(person);
    }
    return invalidPeople;
}

function addRandomMobileNumbers(people){
  for(personIndex = 0; personIndex < people.length; personIndex++){
      people[personIndex].mobileNumber=generateRandomMobileNumber();
  }
  return people;
}

function generateRandomMobileNumber() {
  var prefix="07";
  var firstBit=getRandomInteger(100, 1000);
  var secondBit=getRandomInteger(100000, 1000000);
  return prefix + firstBit + " " + secondBit;
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

test.getActiveUsers(getActiveUsers);
test.findMatchingEyeColours(findMatchingEyeColours);
test.getEmailAddress(getEmailAddress);
test.getActiveUsersWithInvalidEmail(getActiveUsersWithInvalidEmail);
test.addRandomMobileNumbers(addRandomMobileNumbers);
test.summary();