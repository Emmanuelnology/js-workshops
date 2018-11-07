var numberOfPets = 5;
var name = 'Craig';

var numberOfPassedTests = 0;
var numberOfTests = 0;

function test(expression,expectedBoolean,testName) {
    numberOfTests ++;

    if (expression == expectedBoolean) {
        numberOfPassedTests ++;
        console.log ( 'Test \'' + testName + '\': Pass' );
    }

    else {
        console.log ( 'Test \'' + testName + '\': Fail' );
    }
}

function showResults () {
    console.log ( 'Succesfully ran ' + numberOfPassedTests + "/" + numberOfTests + " tests" );
}

test ( numberOfPets == 8, false, 'Number of pets is 8' );
test ( numberOfPets == 5, true, 'Number of pets is 5' );
test ( numberOfPets == '5', true, 'Number of pets is \'5\'' );
test ( numberOfPets === 5, true, 'Number of pets is 5 (strict)' );
test ( numberOfPets === '5', false, 'Number of pets is \'5\' (strict)' );
test ( numberOfPets != 8, true, 'Number of pets is not 8' );
test ( numberOfPets != 'fish', true, 'Number of pets is not \'fish\'' );
test ( numberOfPets !== 5, false, 'Number of pets is not 5 (strict)' );
test ( numberOfPets !== '5', true, 'Number of pets is not \'5\' (strict)' );
test ( numberOfPets !== 8, true, 'Number of pets is not 8 (strict)' );
test ( numberOfPets > 4, true, 'Number of pets is greater than 4' );
test ( numberOfPets > '4', true, 'Number of pets is greater than \'4\'' );
test ( numberOfPets > 5, false, 'Number of pets is greater than 5' );
test ( numberOfPets > 6, false, 'Number of pets is greater than 6' );
test ( numberOfPets < 4, false, 'Number of pets is less than 4' );
test ( numberOfPets < 5, false, 'Number of pets is less than 5' );
test ( numberOfPets < 6, true, 'Number of pets is less than 6' );
test ( numberOfPets < '6', true, 'Number of pets is less than \'6\'' );
test ( numberOfPets >= 4, true, 'Number of pets is greater than or equal to 4' );
test ( numberOfPets >= 5, true, 'Number of pets is greater than or equal to 5' );
test ( numberOfPets >= 6, false, 'Number of pets is greater than or equal to 6' );
test ( numberOfPets <= 4, false, 'Number of pets is less than or equal to 4' );
test ( numberOfPets <= 5, true, 'Number of pets is less than or equal to 5' );
test ( numberOfPets <= 6, true, 'Number of pets is less than or equal to 6' );
test ( name.length == 5, true, 'Name has 5 characters' );
test ( name != ('Craig' || 'Steve'), false, 'Name is not Craig or Steve' );
test ( name != ('Aaran' || 'Steve'), true, 'Name is not Aaran or Steve' );
test ( name == 'Craig' && numberOfPets == 5, true, 'Name is Craig and number of pets is 5' );
test ( name.length >= 4 && name.length <= 6, true, 'Name has between 4 and 6 characters (inclusive)' );
test ( !(name.length >= 4 && name.length <= 6), false, 'Name is not between 4 and 6 characters (inclusive using the not operator)' );
test ( name == 'Craig' && numberOfPets % 2 == 0, false, 'Name is Craig and number of pets is an even number' );
showResults ();