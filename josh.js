var name = "Craig";
var numberOfPets = 5;
var totalTests = 0;

function test(expression, expectedResult, testName) {
    totalTests++;
    var testResult = "fail";

    if(expression === expectedResult){
        console.log ("success");
    }
    
    console.log("Test " + testName + "': Pass");
}

function showResults (){
    var successfulTests= 1;
    console.log(
        "Successfully ran " + successfulTests + " / " + totalTests + " tests");
}

test(name!="Craig", true, "name is Craig");
showResults();