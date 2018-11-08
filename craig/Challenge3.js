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

Life expectancy of a Vegetarian: 90
Life expectancy of a Meat Eater: 95
Minimum height to ride on a rollercoaster: 1.2m
Name tag length ( Up to 6 characters)

*/

var people=[ //name, age, height, isvegetarian
    ['Bob', 23, 119,false],
    ['Jimothy', 91, 140,true]
];

function isVegetarian(personID) {
    return getVegetarian(personID);
}

function preciousYearsRemaining(personID){
    var lifeExpectancy = getLifeExpectancy(personID);
    var age = getAge(personID);
    return lifeExpectancy - age;
}

function canFitOnANameCard(personID){
    var name = getName(personID);
    return (name.length <= 6);
}

function canRideOnARollercoaster(personID){
    var height = getHeight(personID);
    return (height >= 120);
}

function getLifeExpectancy(personID) {
    var lifeExpectancy = 95;
    if(isVegetarian(personID)){
        lifeExpectancy = 90;
    }

    return lifeExpectancy;
}

function getVegetarian(personID) {
    return  people[personID][3];
}

function getHeight(personID) {
    return  people[personID][2];
}

function getAge(personID) {
    return  people[personID][1];
}

function getName(personID) {
    return  people[personID][0];
}

function shouldBeDead(personID){
    return (preciousYearsRemaining(personID)<0);
}


function canBuyBeer(personID) {
    var age=getAge(personID);
    return (age >=18);
}

function showSummary(personID) {
    var name = getName(personID);
    var height = getHeight(personID);
    var veg = getVegetarian(personID);
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
        )
    }

