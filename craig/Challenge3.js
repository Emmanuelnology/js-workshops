/*
Create a multi-dimensional-array containing attributes for 7 people:

Name | Age | Height (cm) | Vegetarian
Bob | 12 | 110 | true
Harigon | 63 | 150 | true
Thomas | 23 | 121 | false
Sarah | 13 | 119 | false
Lucy | 78 | 140 | true
Dave | 93 | 210 | false
Doris | 94 | 80 | true

Functions

-- Whether they are vegetarian :boolean
-- Whether their name is too long to write on a name tag :boolean
-- Life expectancy
-- years before they die :number
-- Whether they can ride on a rollercoaster :boolean
-- Should already be dead :boolean
-- Can buy beer in the UK :boolean
-- Show a friendly summary of the person :multi-line string on the console

Life expectancy of a Vegetarian: 90
Life expectancy of a Meat Eater: 95
Minimum height to ride on a rollercoaster: 1.2m
Name tag length ( Up to 6 characters)

*/

function test(actual, expected, name){
  console.log(name + " - " + expected + ":" + actual);
}

var people=[ //name, age, height, isvegetarian
    ['Bob', 12, 110, true],
    ['Harigon', 63, 150, true],
    ['Thomas', 23, 121, false],
    ['Sarah', 13, 119, false],
    ['Lucy', 78, 140, true],
    ['Dave', 93, 210, false],
    ['Doris', 94, 80, true],
];


function isVegetarian(personID) {
    return people[personID][3];
}

test(isVegetarian(0), true, "isVegetarian (0)");
test(isVegetarian(2), false, "isVegetarian (2)");
test(isVegetarian(5), false, "isVegetarian (5)");

function canFitOnANameCard(personID){
  var name = people[personID][0];
  return (name.length <= 6);
}

test(canFitOnANameCard(0), true, "canFitOnANameCard (0)");
test(canFitOnANameCard(1), false, "canFitOnANameCard (1)");
test(canFitOnANameCard(2), true, "canFitOnANameCard (2)");

function getLifeExpectancy(personID) {
  var lifeExpectancy = 95;
  if(isVegetarian(personID)){
      lifeExpectancy = 90;
  }

  return lifeExpectancy;
}

test(getLifeExpectancy(0), 90, "getLifeExpectancy (0)");
test(getLifeExpectancy(3), 95, "getLifeExpectancy (3)");

function yearsRemaining(personID){
    var lifeExpectancy = getLifeExpectancy(personID);
    var age = people[personID][1];
    return lifeExpectancy - age;
}

test(yearsRemaining(0), 78, "yearsRemaining (0)");
test(yearsRemaining(3), 82, "yearsRemaining (3)");
test(yearsRemaining(5), 2, "yearsRemaining (6)");
test(yearsRemaining(6), -4, "yearsRemaining (7)");


function canRideOnARollercoaster(personID){
    var height = people[personID][2];
    return (height >= 120);
}

function canBuyBeer(personID) {
    var age=people[personID][1];
    return (age >=18);
}

function showSummary(personID) {
    var name = people[personID][0];
    var height = people[personID][1];
    var veg = isVegetarian(personID);
    var vegetarianMessage = "likes meat";
    
    if(veg) {
         vegetarianMessage = "is a vegetarian";
    }

    var deadMessage = "and has " + preciousYearsRemaining(personID) + " years to live";
    
    if(shouldBeDead(personID)){
        deadMessage = "should be dead";
    }

    console.log(
        name + " " + vegetarianMessage + ", he is "+height+"cm tall, and " + deadMessage
        );
    }

