var people = [ //name, age, height, isvegetarian
    ['Bob', 12, 110, true],
    ['Harigon', 63, 150, true],
    ['Thomas', 23, 121, false],
    ['Sarah', 13, 119, false],
    ['Lucy', 78, 140, true],
    ['Dave', 93, 210, false],
    ['Doris', 94, 80, true],
]

function isVegetarian(index) {
    return people[index][3]
}

function nameTag(index) {
    return people[index][0].length >= 6
}

function yearsLeft(index) {
    var lifeExpectancy = 95
    if (isVegetarian(index)) {
        lifeExpectancy = 90
    }

    return lifeExpectancy - people[index][1]
}

function rollercoasterHeight(index) {
    return people[index][2] >= 120
}

function deadAlready(index) {
    return (yearsLeft(index)) < 0;
}

function pintReady(index) {
    return people[index][1] >= 18
}


console.log(isVegetarian(6));
console.log(nameTag(6));
console.log(yearsLeft(6));
console.log(rollercoasterHeight(6));
console.log(deadAlready(6));
console.log(pintReady(6));

