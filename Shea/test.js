var name = "Craig";
var numberOfPets = 5;
var totalTests = 0;

function test(expression, expectedResults, testName) {
    totalTests++;
    var testResult = "Fail"; 
    if (expression === expectedResults) {
        testResult = "Pass";        
    } 
    console.log("Test" + testName + testResult);
}


test(numberOfPets == 8, false, ' "Number of pets is 8":');
test(numberOfPets == 5, true, ' "Number of pets is 5":');
test(numberOfPets == '5', true, " 'Number of pets is '5'':");
test(numberOfPets === 5, true, " 'Number of pets is 5 (strict)':");
test(numberOfPets === '5', false, " 'Number of pets is '5' (strict)':");
test(numberOfPets != 8, true, " 'Number of pets is not 8':");
test(numberOfPets != 'fish', true, " 'Number of pets is not 'fish'':");
test(numberOfPets !== 5, false, " 'Number of pets is not 5':");
test(numberOfPets !== '5', true, " 'Number of pets is not '5'':");
test(numberOfPets !== 8, false, " 'Number of pets is not 8':");
test(numberOfPets > 4, true, " 'Number of pets is greater than 4':");
test(numberOfPets > '4', true, " 'Number of pets is greater than '4'':");
test(numberOfPets > 5, false, " 'Number of pets is greater than 5':");
test(numberOfPets > 6, false, " 'Number of pets is greater than 6':");
test(numberOfPets < 4, false, " 'Number of pets is less than 4':");
test(numberOfPets < 5, false, " 'Number of pets is less than 5':");
test(numberOfPets < 6, true, " 'Number of pets is less than 6':");
test(numberOfPets < '6', true, " 'Number of pets is less than '6':");
test(numberOfPets >= 4, true, " 'Number of pets is greater than or equal to 4':");
test(numberOfPets >= 5, true, " 'Number of pets is greater than or equal to 5':");
test(numberOfPets >= 6, false, " 'Number of pets is greater than or equal to 6':");
test(numberOfPets <= 4, false, " 'Number of pets is less than or equal to 4':");
test(numberOfPets <= 5, true, " 'Number of pets is less than or equal to 5':");
test(numberOfPets <= 6, true, " 'Number of pets is less than or equal to 6':");
test(name.length == 5, true, " 'Name has 5 characters':");
test(name != "Craig" && name != "Steve", false, " 'Name is not Craig or Steve':");
test(name != "Aaran" || name != "Steve", true, " 'Name is not Aaran or Steve':");
test(name == "Craig" && numberOfPets == 5, true, " 'Name is Craig and number of pets is 5':");
test(name.length >=4 && name.length <= 6, true, " 'Name is between 4 and 6 characters (inclusive)':");
test(!(name.length >=4 && name.length <= 6, false, " 'Name is not between 4 and 6 characters':"));
test(name == "Craig" && numberOfPets % 2 == 0, false, " 'Name is Craig and number of pets is an even number':");




function showResults() {
    var successfulTests = 3;
    console.log("Successfully ran " + successfulTests + "/" + totalTests + " tests")
}

showResults();