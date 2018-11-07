/*

Craig has 5 pets, create a test Runner to test the conditional logic.
Create a function called test that takes three arguments,  an expression,  a boolean and the name for the test. The function should test the expression against the boolean and display the result of the test clearly in the console.

Create another function called showResults. this function should summarise the number of total tests run and the total number of successful tests clearly in the console.

test(name=='Craig', true, 'name is Craig');
showResults();

Output:

Test 'name is Craig': Pass

Successfully ran 1/1 tests


Tests to run (where x is the number of pets):

X is 8, 5, '5'
X is 5, '5' (strict)
X is not 8, 'fish'
X is not 5, '5', 8 (strict)
X is greater than 4, '4', 5, 6
X is less than 4, 5, 6, '6'
X is greater than or equal to 4, 5, 6
X is less than or equal to 4, 5, 6

Name has 5 characters
Name is not Craig or Steve
Name is not Aaran or Steve
Name is Craig and X is 5
Name has between 4 and 6 characters (inclusive)
Name is not between 4 and 6 characters (inclusive using the not operator)
Name is Craig and x is an even number


Craig/5 - 31
Katherine/5 - 26
Katherine/2 - 15
Lucy/5 - 28
Lucy/12 - 17
Steve/5 - 29
Steve/6 - 20

*/

var name = 'Craig';
var numberOfPets = 5;
var successfulTests = 0;
var totalTests = 0;

function convertToPassFail(expression) {
    var outcome = "Fail";
    if (expression){
        successfulTests++;
        outcome = "Pass";
    }
    return outcome;
}

function test(expression, expectedOutcome, testName) {
    var outcome = convertToPassFail(expression === expectedOutcome);
    totalTests++;
    console.log("Test '" + testName + "': " + outcome);
}

function showResults() {
    console.log("Successfully ran " + successfulTests + "/" + totalTests + " tests");
}

test(numberOfPets == 8, false, "Number of pets is 8");
test(numberOfPets == 5, true, "Number of pets is 5");
test(numberOfPets == '5', true, "Number of pets is '5'");

test(numberOfPets === 5, true, "Number of pets is 5 (strict)");
test(numberOfPets === '5', false, "Number of pets is '5' (strict)");

test(numberOfPets != 8, true, "Number of pets is not 8");
test(numberOfPets != 'fish', true, "Number of pets is not 'fish'");

test(numberOfPets !== 5, false, "Number of pets is not 5 (strict)");
test(numberOfPets !== '5', true, "Number of pets is not '5' (strict)");
test(numberOfPets !== 8, true, "Number of pets is not 8 (strict)");

test(numberOfPets > 4, true, "Number of pets is greater than 4");
test(numberOfPets > '4', true, "Number of pets is greater than '4'");
test(numberOfPets > 5, false, "Number of pets is greater than 5");
test(numberOfPets > 6, false, "Number of pets is greater than 6");

test(numberOfPets < 4, false, "Number of pets is less than 4");
test(numberOfPets < 5, false, "Number of pets is less than 5");
test(numberOfPets < 6, true, "Number of pets is less than 6");
test(numberOfPets < '6', true, "Number of pets is less than '6'");

test(numberOfPets >= 4, true, "Number of pets is greater than or equal to 4");
test(numberOfPets >= 5, true, "Number of pets is greater than or equal to 5");
test(numberOfPets >= 6, false, "Number of pets is greater than or equal to 6");

test(numberOfPets <= 4, false, "Number of pets is less than or equal to 4");
test(numberOfPets <= 5, true, "Number of pets is less than or equal to 5");
test(numberOfPets <= 6, true, "Number of pets is less than or equal to 6");

test(name.length == 5, true, "Name has 5 characters");
test(name == "Craig" || name == "Steve", true, "Name is not Craig or Steve");
test(name != "Aaran" && name != "Steve", true, "Name is not Aaran or Steve");
test(name == "Craig" && numberOfPets == 5, true, "Name is Craig and X is 5");
test(name.length >= 4 && name.length <= 6, true, "Name has between 4 and 6 characters (inclusive)");
test(!(name.length >= 4 && name.length <= 6), false, "Name is not between 4 and 6 characters (inclusive using the not operator)");
test(name == "Craig" && (numberOfPets % 2) == 0, false, "Name is Craig and x is an even number");

showResults();