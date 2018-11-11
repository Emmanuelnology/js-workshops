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
  return people; //change this line (and add others)
}

function findMatchingEyeColours(people, sourcePerson){ // takes person object
  return []; //change this line (and add others)
}

function getEmailAddress(people, id){
  return ''; //change this line (and add others)
}

function getActiveUsersWithInvalidEmail(people) {
  return people; //change this line (and add others)
}

function addRandomMobileNumbers(people){
  return people; //change this line (and add others)
}

console.log("\n\nRunning tests...");
test.getActiveUsers(getActiveUsers);
test.findMatchingEyeColours(findMatchingEyeColours);
test.getEmailAddress(getEmailAddress);
test.getActiveUsersWithInvalidEmail(getActiveUsersWithInvalidEmail);
test.addRandomMobileNumbers(addRandomMobileNumbers);
test.summary();