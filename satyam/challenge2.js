var name = "Craig";
var numberOfPets = 5;
var totalTests = 0;
var successfulTests = 0;

function test(expression, expectedResults, testName) {
    totalTests++;
    var testResult="Fail"

    if(expression === expectedResults) {
        successfulTests++;
        testResult="Pass"
    }
    console.log("Test '" + testName + "': " + testResult);
}

function showResults() {
    console.log("Sucessfully ran " + successfulTests + "/" + totalTests + " tests");
}

// test(name=='Craig', true, 'Name is Craig')

test(numberOfPets==8, false, "Number of pets is 8");
test(numberOfPets==5, true, "Number of pets is 5");
test(numberOfPets=='5', true, "Number of pets is '5'");
// test(numberOfPets !== 5, true, 'Number of pets is 5 (strict)');
// test(numberOfPets !== '', false, 'Number of pets is '5' (strict)');
// test(numberOfPets == '', true, 'Number of pets is not 8');
// test(numberOfPets == '', true, 'Number of pets is not 'fish'');
// test(numberOfPets == '', false, 'Number of pets is not 5 (strict)');
// test(numberOfPets == '', true, 'Number of pets is not '5' (strict)');
// test(numberOfPets == '', true, 'Number of pets is not 8 (strict)');
// test(numberOfPets == '', true, 'Number of pets is greater than 4');
// test(numberOfPets == '', true, 'Number of pets is greater than '4'');
// test(numberOfPets == '', false, 'Number of pets is greater than 5');
// test(numberOfPets == '', false, 'Number of pets is greater than 6');
// test(numberOfPets == '', false, 'Number of pets is less than 4');
// test(numberOfPets == '', false, 'Number of pets is less than 5');
// test(numberOfPets == '', true, 'Number of pets is less than 6');
// test(numberOfPets == '', true, 'Number of pets is less than '6'');
// test(numberOfPets == '', true, 'Number of pets is greater than or equal to 4');
// test(numberOfPets == '', true, 'Number of pets is greater than or equal to 5');
// test(numberOfPets == '', false, 'Number of pets is greater than or equal to 6');
// test(numberOfPets == '', false, 'Number of pets is less than or equal to 4');
// test(numberOfPets == '', true, 'Number of pets is less than or equal to 5');
// test(numberOfPets == '', true, 'Number of pets is less than or equal to 6');

test(name.length == 5, true, "Name has 5 characters");
test(name != "Craig" && name != "Steve", true, 'Name is not Craig or Steve');
// test(name == 'Craig', true, 'Name is Aaran or Steve');
// test(name == 'Craig', true, 'Name is Craig and X is 5');
// test(name == 'Craig', true, 'Name has between 4 and 6 characters (inclusive)');
// test(name == 'Craig', false, 'Name is not between 4 and 6 characters (inclusive using the not operator)');
// test(name == 'Craig', false, 'Name is Craig and X is an even number');

showResults();