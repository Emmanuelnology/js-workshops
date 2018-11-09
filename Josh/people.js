var people = [ //name, age, height, isvegetarian
    ["Bob", 12, 110, true],
    ["Harigon", 63, 150, true],
    ["Thomas", 23, 121, false],
    ["Sarah", 13, 119, false],
    ["Lucy", 78, 140, true],
    ["Dave", 93, 210, false],
    ["Doris", 94, 80, true]
]

function isVegetarian(personId){
    return people[personId][3]; //within people array look at position
}

// console.log(isVegetarian(2));

function nameTag(nameId){
    return (people[nameId][0].length >= 6);
}  

// console.log(nameTag(1));

function yearsLeft(personId){
    var lifeExp = 95;
    if (isVegetarian (personId)){
        lifeExp = 90;
    }

    var age = people[personId][1];
    return lifeExp - age;
}

function getLifeExp(personId){
    var lifeExp = 95;
    if (isVegetarian (personId)){
        lifeExp = 90;
    }
    return
}

// console.log(yearsLeft(0));

function rollerCoaster(height){
    var rollerCoasterHeight = 120;
    return  (people[height][2] >= rollerCoasterHeight)}

// console.log(rollerCoaster(0))

function shouldBeDead (personId){
    var lifeExp = 95;
    if (isVegetarian (personId)){
        lifeExp = 90;
    }
    var age = people[personId][1];
    return lifeExp <= age
}
//  console.log(shouldBeDead (6))