/*
Create functions that return the following:

minDateableAge(){} // half your age + 7
hasFever(){} //fever or not in celsius
calcTVHeight() {} Given a width on a 16:9 tv, calculate the height
couldDate(){} // two people, could they date (deal with ages either way round)
colorDarken(){} // [red, green, blue] (0-255), darkenAmount - don't let the amount drop below 0

*/

var test = require('./testRunner');


function minDateableAge(age) {
    return age / 2 + 7;
}

function hasFever(temperature) {
    return temperature >= 37.5;
}

function calcTVHeight(width) {
    return width / 16 * 9;
}

function minDateableAge(age) {
    age / 2 + 7;
}

function couldDate(age1, age2) {
    
    if (age1 > age2) {
        return age2 >= (minDateableAge(age1));
    } else if (age2 > age1) {
        return age1 >= (minDateableAge(age2));
    } else {
        return true;
    }
}

function colorDarken([red, green, blue], darkenAmount) {
    var red = [0] - darkenAmount;
    var green = [0] - darkenAmount;
    var blue = [0] - darkenAmount;

    if (red < 0) {
        return red = 0;
    } else if (green < 0) {
        return green = 0;
    } else if (blue = 0) {
        return green = 0;
    } 
    return [red, blue, green];
}

test.run(minDateableAge, 18, 22);
test.run(minDateableAge, 35, 56);
test.run(hasFever, false, 37.4);
test.run(hasFever, true, 37.5);
test.run(hasFever, true, 37.6);
test.run(calcTVHeight, 9, 16);
test.run(calcTVHeight, 18, 32);
test.run(couldDate, true, [18,22]);
test.run(couldDate, true, [22,18]);
test.run(couldDate, true, [22,22]);
test.run(colorDarken, [50,50,50], [[60,60,60],10]);
test.run(colorDarken, [0,0,0], [[9,1,9],10]);
test.run(colorDarken, [1,3,2], [[9,11,10],8]);
test.run(colorDarken, [54,0,54], [[60,5,60],6]);

test.show();