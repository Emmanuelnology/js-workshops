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


function isVeggie(index){
  return people[index][3];
  }
  console.log(isVeggie(0))

function longName(index){
  return people[index][0].length > 6;
}
console.log(longName(0))

function life(index){
  var lifeExpectany = 95;
  if (isVeggie(index)){
    lifeExpectany = 90;
  }

  var age = people[index][1]
  return lifeExpectany -age
}

console.log(life(2))