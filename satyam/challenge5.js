var tvWidth = 90;

function minimumDateableAge(age) {
    return  'A ' + age + ' year old could date someone no lower than ' + (age / 2 + 7);
}

function hasFever(temp) {
    if (temp > 36.1 && temp < 37.2) {
            return temp + ' degrees is normal af';
        }
    return temp + ' degrees is fever af';
}

function calcTVHeight(width) {
    var width = tvWidth;
    return 'The height is ' + (width/16 * 9) + 'cm';
}

function couldDate(age1, age2) {
    if (age1 == age2) return 'A ' + age1 + ' year old could date a ' + age2 + ' year old'
    var ageSort = [age1,age2].sort();
    var lowerAge = ageSort[0];
    var minAge = minimumDateableAge(ageSort[1]);
    return lowerAge >= minAge;
}

console.log(minimumDateableAge(23))

console.log(hasFever(36.0))

console.log(calcTVHeight(0))

console.log(couldDate(22, 18))

