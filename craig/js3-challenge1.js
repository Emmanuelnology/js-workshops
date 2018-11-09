/*

JS3 Challenge 1: Objects and Iteration

Create 5 functions that:
Print a list of active users, with a summary of the total count of active users
Take a person object and will return the names of all people who have matching eye colors
Takes an ID and returns an email address
Finds all active users with an invalid email address
Programatically add a random mobile phone number to each record (formatted '07XXX XXXXXX')

*/


var people = [
    {
      "id": "293",
      "isActive": false,
      "eyeColor": "brown",
      "name": "Ingrid Townsend",
      "company": "JASPER",
      "email": "ingridtownsendatjasper.com",
      "address": "690 Charles Place, Santel, Northern Mariana Islands, 3791"
    },
    {
      "id": "581",
      "isActive": true,
      "eyeColor": "blue",
      "name": "Estrada Nolan",
      "company": "FIBRODYNE",
      "email": "estradanolan@fibrodyne.com",
      "address": "317 Seeley Street, Cade, Maryland, 3976"
    },
    {
      "id": "29",
      "isActive": true,
      "eyeColor": "brown",
      "name": "Laverne Andrews",
      "company": "INTRAWEAR",
      "email": "laverneandrewsatintrawear.com",
      "address": "760 Provost Street, Valle, Alaska, 4628"
    },
    {
      "id": "856",
      "isActive": false,
      "eyeColor": "green",
      "name": "Hull Woodward",
      "company": "SENMAO",
      "email": "hullwoodward@senmao.com",
      "address": "452 Union Avenue, Hachita, Palau, 9166"
    },
    {
      "id": "2321",
      "isActive": false,
      "eyeColor": "green",
      "name": "Maria Stanley",
      "company": "EYERIS",
      "email": "mariastanley@eyeris.com",
      "address": "350 Remsen Avenue, Abrams, Ohio, 6355"
    }
  ];

  function printActiveUsers() {
      var count = 0;
      for(personIndex = 0; personIndex < people.length; personIndex++){
        var person = people[personIndex];
        if (person.isActive) {
            console.log(person.name);
            count++;
        }
      }
      console.log(count + " active users found");
  }

  function printActiveUsersV2() {
    var activeUsers=getActiveUsers();
    console.log(activeUsers);
    console.log(activeUsers.length + " active users found");
}

  function getActiveUsers() {
    var activeUsers = [];
    for(personIndex = 0; personIndex < people.length; personIndex++){
      var person = people[personIndex];
      if (person.isActive) activeUsers.push(person);
    }
    return activeUsers;  
  }

  function findMatchingEyeColours(sourcePerson){ // takes person object
   var matches=[];
    for(personIndex = 0; personIndex < people.length; personIndex++){
        var person = people[personIndex];
        if(person.eyeColor == sourcePerson.eyeColor && person.id != sourcePerson.id){
            matches.push(person.name);
        }
      }
      return matches;
  }

  function getEmailAddress(id){
    for(personIndex = 0; personIndex < people.length; personIndex++){
        var person = people[personIndex];
        if(person.id==id){
            return person.email;
        }
      }
  }

  function getActiveUsersWithInvalidEmail() {
      var activeUsers=getActiveUsers();
      var invalidPeople=[];
      for(personIndex = 0; personIndex < activeUsers.length; personIndex++){
        var person = activeUsers[personIndex];
        if(!person.email.includes('@')) {
            invalidPeople.push(person);
        }
      }
      return invalidPeople;
  }

  function addRandomMobileNumbers(){
    for(personIndex = 0; personIndex < people.length; personIndex++){
        people[personIndex].mobileNumber=generateRandomMobileNumber();
    }
  }

  function generateRandomMobileNumber() {
    var prefix="07";
    var firstBit=getRandomInteger(100,1000);
    var secondBit=getRandomInteger(100000,1000000);
    return prefix + firstBit + " " + secondBit;
  }

  function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

// printActiveUsersV2();
// console.log(findMatchingEyeColours(people[0]));
// console.log(getEmailAddress(2321));
// console.log(getActiveUsersWithInvalidEmail());
//addRandomMobileNumbers();
//console.log(people);