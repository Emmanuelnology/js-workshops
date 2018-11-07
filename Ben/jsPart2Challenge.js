var numberOfPets = 5;
var name = 'Craig';

var numberOfTests = 0;
var numberOfPassedTests = 0;

function test(expression,boolean,testName) {
    numberOfTests ++;

    if (expression == boolean) {
        numberOfPassedTests ++;
        return 'Test \'' + testName + '\': Pass';
    }

    else {
        return 'Test \'' + testName + '\': Fail';
    }
}

function showResults () {
    return 'Succesfully ran ' + numberOfPassedTests + "/" + numberOfTests + " tests";
}

console.log ( test ( numberOfPets == 8, false, 'Number of pets is 8' ) );
console.log ( test ( numberOfPets == 5, true, 'Number of pets is 5' ) );
console.log ( test ( numberOfPets == '5', true, 'Number of pets is \'5\'' ) );
console.log ( test ( numberOfPets === 5, true, 'Number of pets is 5 (strict)' ) );
console.log ( test ( numberOfPets === '5', false, 'Number of pets is \'5\' (strict)' ) );
console.log ( test ( numberOfPets != 8, true, 'Number of pets is not 8' ) );
console.log ( test ( numberOfPets != 'fish', true, 'Number of pets is not \'fish\'' ) );
console.log ( test ( numberOfPets !== 5, false, 'Number of pets is not 5 (strict)' ) );
console.log ( test ( numberOfPets !== '5', true, 'Number of pets is not \'5\' (strict)' ) );
console.log ( test ( numberOfPets !== 8, true, 'Number of pets is not 8 (strict)' ) );
console.log ( test ( numberOfPets > 4, true, 'Number of pets is greater than 4' ) );
console.log ( test ( numberOfPets > '4', true, 'Number of pets is greater than \'4\'' ) );
console.log ( test ( numberOfPets > 5, false, 'Number of pets is greater than 5' ) );
console.log ( test ( numberOfPets > 6, false, 'Number of pets is greater than 6' ) );
console.log ( test ( numberOfPets < 4, false, 'Number of pets is less than 4' ) );
console.log ( test ( numberOfPets < 5, false, 'Number of pets is less than 5' ) );
console.log ( test ( numberOfPets < 6, true, 'Number of pets is less than 6' ) );
console.log ( test ( numberOfPets < '6', true, 'Number of pets is less than \'6\'' ) );
console.log ( test ( numberOfPets >= 4, true, 'Number of pets is greater than or equal to 4' ) );
console.log ( test ( numberOfPets >= 5, true, 'Number of pets is greater than or equal to 5' ) );
console.log ( test ( numberOfPets >= 6, false, 'Number of pets is greater than or equal to 6' ) );
console.log ( test ( numberOfPets <= 4, false, 'Number of pets is less than or equal to 4' ) );
console.log ( test ( numberOfPets <= 5, true, 'Number of pets is less than or equal to 5' ) );
console.log ( test ( numberOfPets <= 6, true, 'Number of pets is less than or equal to 6' ) );
console.log ( test ( name.length == 5, true, 'Name has 5 characters' ) );
console.log ( test ( name != ('Craig' || 'Steve'), false, 'Name is not Craig or Steve' ) );
console.log ( test ( name != ('Aaran' || 'Steve'), true, 'Name is not Aaran or Steve' ) );
console.log ( test ( name == 'Craig' && numberOfPets == 5, true, 'Name is Craig and number of pets is 5' ) );
console.log ( test ( name.length >= 4 && name.length <= 6, true, 'Name has between 4 and 6 characters (inclusive)' ) );
console.log ( test ( !(name.length >= 4 && name.length <= 6), false, 'Name is not between 4 and 6 characters (inclusive using the not operator)' ) );
console.log ( test ( name == 'Craig' && numberOfPets % 2 == 0, false, 'Name is Craig and number of pets is an even number' ) );
console.log ( showResults () );