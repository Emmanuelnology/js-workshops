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

  
  
  function active() {
    var  index = 0;
    var activePeople = [];
    var count = 0;
    while (index < people.length) {
      if (people[index].isActive) {
        activePeople.push(people[index].name);
        count++ ;
      }
      index++
    }
    console.log('They are ' + count + ' active people.');
    return activePeople;
  }

  console.log(active());

  function sameColor(position) {
    var  index = 0;
    var colorPrincipal = people[position].eyeColor;
    var numberEye =[];
    while (index < people.length) {
      if (people[index].eyeColor === colorPrincipal) {
        numberEye.push(people[index].name);      
      }
      index++
    }
    return numberEye;
  }
  console.log(sameColor(3));

  function emailId() {
    var  index = 0;
    var emails =[];
    while (index < people.length) {
      if (people[index].id) {
        emails.push(people[index].email);      
      }
      index++
    }
    return emails;
  }
  console.log(emailId());

  function errorEmail() {
    var  index = 0;
    var invalidName =[];
    while (index < people.length) {
      if (people[index].isActive) {
        if (people[index].email === "laverneandrewsatintrawear.com" || people[index].email === "ingridtownsendatjasper.com") {
        invalidName.push(people[index].name);
        }    
      }
      index++
    }
    return invalidName;
  }
  console.log(errorEmail());

  function randomPhone() {
    var  index = 0;
    while (index < people.length) {
      var i = 0;
      while (i < 11) {
        var number =[0, 7];
        number.push(Math.floor(Math.random() * (10 - 0 + 1)) + 0);
        i++    
      }
      index++
    }
    return number;
  }
  console.log(randomPhone());


