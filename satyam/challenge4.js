var people = [ //name, age, height, isvegetarian
    ['Bob', 12, 110, true],
    ['Harigon', 63, 150, true],
    ['Thomas', 23, 121, false],
    ['Sarah', 13, 119, false],
    ['Lucy', 78, 140, true],
    ['Dave', 93, 210, false],
    ['Doris', 94, 80, true],
]

function isVegeratian(personID) {
    return people[personID][3];
}

function nameTagLength(personID) {
    return (people[personID][0].length > 6);
}

function yearsBeforeDeath(personID) {
    var lifeExpectancy = 95;
    if (isVegeratian(personID)){
        lifeExpectancy = 90;
    }
    
    var age = people[personID][1];
    return lifeExpectancy - age;
}

function canRideRollercoaster(personID) {
    var height = people[personID][2];
    return (height >= 120);
}

function alreadyDead(personID) {
    return (yearsBeforeDeath(personID)) < 0;
}

function pintReady(personID) {
    return (people[personID][1] >= 18);
}

function friendlySummary() {
    
    console.log()
}

console.log(isVegeratian(0))

console.log(nameTagLength(4))

console.log(yearsBeforeDeath(1))

console.log(canRideRollercoaster(6))

console.log(alreadyDead(6))

console.log(pintReady(6))
