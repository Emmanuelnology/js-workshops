

// JS3 Challenge 1: Objects and Iteration

// Create 4 functions that:
// Print a list of active users, with a summary of the total count of active users
// Take a person object and will return the names of all people who have matching eye colors
// Takes an ID and returns an email address
// Finds all active users with an invalid email address
// Programatically add a random mobile phone number to each record (formatted '07XXX XXXXXX')




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

  lookUpProfile(true, "isActive");
function active( Z, prop)
  vfor (var x = 0; x < people.length; x++){
    if (people[x].isActive === Z) {
        if (people[x].hasOwnProperty(prop)) {
            return people[x][prop];
        } else {
            return "No such property";
        }
    }
}
return "No such contact";

