/*

JS3 Challenge 1: Objects and Iteration

Create 4 functions that:
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

function listActive () {
  var countActive = 0;
  for (var i = 0; i < people.length; i++) {
    if (people[i].isActive) {
      countActive++;
      console.log (people[i].name);
    }
  }
  console.log("Number of active users :" + countActive);
}

function eyeColorMatches (personObject) {
  for (var i=0; i < people.length; i++) {
    if (people[i].eyeColor === personObject.eyeColor && people[i] !== personObject) {
      console.log (people[i].name)
    }
  }
}

function emailAddress (personID) {
  var i=0;
  while (i < people.length && people[i].id !== personID) {
    i++;
  }
  if (i < people.length) {
    console.log (people[i].email);
  }
  else {
    console.log ("No person has this ID");
  }
}

function activeWithInvalidEmail () {
  for (var i = 0; i < people.length; i++) {
    if (people[i].isActive && people[i].email.indexOf("@") < 1) {
      console.log (people[i].name);
    }
  }
}

function addRandomMobileNumber () {
  for (var i = 0; i < people.length; i++) {
    people[i].mobile = "07";
    for (var j = 2; j < 5; j++) {
      people[i].mobile = people[i].mobile + Math.floor(Math.random() * 10);
    }
    people[i].mobile = people[i].mobile + " ";
    for (var j = 6; j < 12; j++) {
      people[i].mobile = people[i].mobile + Math.floor(Math.random() * 10);
    }
    console.log (people[i].mobile);
  }
}

listActive();
eyeColorMatches(people[4]);
emailAddress ("856");
activeWithInvalidEmail ();
addRandomMobileNumber ();
