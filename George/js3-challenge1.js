/*

JS3 Challenge 1: Objects and Iteration

Create 4 functions that:
Print a list of active users, with a summary of the total count of active users
Take a person object and will return the names of all people who have matching eye colors
Takes an ID and returns an email address
Finds all active users with an invalid email address
Programatically add a random mobile phone number to each record (formatted '07XXX XXXXXX')

*/

function activeUsers(arrayOfPeople) {
  var count = 0;
  for(i=0; i < arrayOfPeople.length; i++){
    if(arrayOfPeople[i].isActive) {
      count++;
      console.log(arrayOfPeople[i].name + " is active.");
    }
  }
  console.log("There are " + count + " active users.");
}

function sameColourEyes(arrayOfPeople, person) {
  for(i=0; i < arrayOfPeople.length; i++) {
    if(arrayOfPeople[i]["eyeColor"] == person["eyeColor"]) {
      console.log(arrayOfPeople[i]["name"] + " also has " + person["eyeColor"] + " eyes.");
    }
  }
}

function getEmailFromId(arrayOfPeople, id) {
  for(i=0; i < arrayOfPeople.length; i++){
    if(arrayOfPeople[i]["id"] == id) {
      console.log("User " + id + " has the email address: " + arrayOfPeople[i]["email"]);
    }
  }
}

function activeUsersWithInvalidEmailAddress(arrayOfPeople) {
  for(i=0; i < arrayOfPeople.length; i++) {
    var email = arrayOfPeople[i]["email"];
    if(arrayOfPeople[i]["isActive"] == true) {
      if(!(email.includes("@"))) {
        console.log("User " + arrayOfPeople[i]["id"] + " is active, however their email is invalid - " + email);
      }
    }
  }
}

function addMobileNumber(arrayOfPeople) {
  for(i=0; i < arrayOfPeople.length; i++) {
    var number = "07";
    for(j = 0; j < 3; j++) {
      number +=  Math.floor((Math.random() * 10));
    }
    number += " ";
    for(j = 0; j < 6; j++) {
      number +=  Math.floor((Math.random() * 10));
    }
    arrayOfPeople[i]["mobile"] = number;
  }
}

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


activeUsers(people);
sameColourEyes(people, people[0]);
getEmailFromId(people, 2321);
activeUsersWithInvalidEmailAddress(people);
addMobileNumber(people);

console.log();
console.log(people);
