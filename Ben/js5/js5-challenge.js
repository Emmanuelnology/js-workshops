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

var test = require("./js5-tests");

function getActiveUsers(people) {
  var activeArray = [];
  for (var person = 0; person < people.length; person++) {
    if (people[person].isActive) {
      activeArray.push(people[person]);
    }
  }
  return activeArray;
}

function findMatchingEyeColours(people, sourcePerson){ 
  var matchingArray = [];
  if (sourcePerson != undefined && sourcePerson.hasOwnProperty("eyeColor")) {
    var requiredColour = sourcePerson.eyeColor;
    for (var person = 0; person < people.length; person++) {
      if (people[person].eyeColor === requiredColour && people[person].id != sourcePerson.id) {
        matchingArray.push(people[person].name);
      }
    }
  }
  return matchingArray;
}

function getEmailAddress(people, id){
  for (var person = 0; person < people.length; person++) {
    if (parseInt(people[person].id) === id) {
      return people[person].email;
    }
  }
}

function getActiveUsersWithInvalidEmail(people) {
  var activeUsers = getActiveUsers(people);
  var invalidEmail = [];
  for (var person = 0; person < activeUsers.length; person++) {
    if (activeUsers[person].hasOwnProperty("email")) {
      if (activeUsers[person].email.indexOf("@") < 1) {
        invalidEmail.push(activeUsers[person]);
      }
    }
    else invalidEmail.push(activeUsers[person]);
  }
  return invalidEmail;
}

function randomThreeDigitNumber(min,max) {
  var number = Math.floor(Math.random() * (max - min) ) + min;
  if (number < 10) {
    number = "00" + number;
  }
  else if (number < 100) {
    number = "0" + number;
  }
  return number;
}

function addRandomMobileNumbers(people){
  for (var person = 0; person < people.length; person++) {
    people[person].mobileNumber = "07" + randomThreeDigitNumber(0,999) + " " + randomThreeDigitNumber(0,999) + randomThreeDigitNumber(0,999);
    
  }
  return people;
}

console.log("\n\nRunning tests...");
test.getActiveUsers(getActiveUsers);
test.findMatchingEyeColours(findMatchingEyeColours);
test.getEmailAddress(getEmailAddress);
test.getActiveUsersWithInvalidEmail(getActiveUsersWithInvalidEmail);
test.addRandomMobileNumbers(addRandomMobileNumbers);
test.summary();