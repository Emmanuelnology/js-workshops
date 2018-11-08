var tvWidth = 90;

function minimumDateableAge(age) {
    return  age / 2 + 7;
}

function couldDate(age) {
    var age = 23;
    if (minimumDateableAge(age)){
    
    }
}

function hasFever(temp) {
    if (temp > 36 && temp < 38) {
            return "Normal af";
        }
    return "Fever af";
}


function calcTVHeight(width) {
    var width = tvWidth;
    return width/16 * 9;
}

console.log('No lower than ' + minimumDateableAge(24))

console.log(couldDate(0))

console.log(hasFever(35))

console.log('The height is ' + calcTVHeight(0) + 'cm')
