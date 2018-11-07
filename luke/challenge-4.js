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
-- years before they die :number
-- Whether they can ride on a rollercoaster :boolean
-- Should already be dead :boolean
-- Can buy beer in the UK :boolean
-- Show a friendly summary of the person :multi-line string on the console

Life expectancy of a man: 90
Life expectancy of a woman: 95
Minimum height to ride on a rollercoaster: 1.2m
Name tag length ( Up to 6 characters) */

var people= //name, age, height, veggie
[
  ["bob", 12, 110, true],
  ["Harigon", 63, 150, true],
  ["Thomas", 23, 121, false],
  ["Sarah", 13 ,119, false],
  ["Lucy", 78, 140, true],
  ["Dave", 93, 210, false],
  ["Doris", 94, 80, true]
];

// function getLifeExp(index){}
function isVeggie(index){
  return people[index][3];
  }
  console.log(isVeggie(1))

function longName(index){
  return people[index][0].length > 6;
}
console.log(longName(1))

function life(index){
  var lifeExpectany = 95;
  if (isVeggie(index)){
    lifeExpectany = 90;
  }
  var age = people[index][1]
  return lifeExpectany -age
}

console.log(life(1))

function height(index){
  return people[index][2] <= 120;
}

console.log(height(1))

function shouldBeDead(index){
  var lifeExpectany = 95
  var age = people[index][1]
    if (isVeggie(index)){
    lifeExpectany = 90;
  }
  return lifeExpectany - age < 0
}

console.log(shouldBeDead(1))

function beer(index){
return people[index][1] > 18;
}

console.log(beer(1))

