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
-- Show a friendly summary of the people :multi-line string on the console

Life expectancy of a vegetarian: 90
Life expectancy of a meat eater: 95
Minimum height to ride on a rollercoaster: 1.2m
Name tag length ( Up to 6 characters)

*/

var people =[ /*  ['name', age, height, veggie] */
    ['Bob', 12, 110, true],
    ['Harigon', 63, 150, true],
    ['Thomas', 23, 121, false],
    ['Sarah', 13, 119, false],
    ['Lucy', 78, 140, true],
    ['Dave', 93, 210, false],
    ['Doris', 94, 80, true]
];

function isVeggie(people, x) {
    if (people[x][3] == true) {
        return true;
    } else {
        return false;
    }
}

function isLong(people, x) {
    if (people[x][0].length <= 6) {
        return true;
    } else {
        return false;
    }
}

function survive(people, x) {
    if (isVeggie(people, x) == true) {
        var years = (90 - people[x][1]);
        return years;
    } else {
        var years = (95 - people[x][1]);
        return years;
    }
}

function height(people, x) {
    if (people[x][2] >= 120) {
        return true;
    } else {
        return false;
    }
}

function dead(people, x) {
    if (survive(people, x) <= 0) {
        return 'dead';
    } else {
        return 'alive';
    }
}

function beer(people, x) {
    if (people[x][1] >= 18) {
        return 'Can drink';
    } else {
        return 'Cannot drink';
    }
}

function summary(people, x) {
    console.log(people[x][0]);
    console.log(people[x][1]);
    console.log(people[x][2]);
    console.log(people[x][3]);
}

console.log(
    "Is Vegetarian: " + isVeggie(people,0) + "\n" +
    "Is Long: " + isLong(people,0) + "\n" +
    "Survive: " + survive(people,0) + "\n" +
    "Height: " + height(people,0) + "\n" +
    "Dead: " + dead(people,0) + "\n" +
    "Beer: " + beer(people,0)
);
summary(people,0);