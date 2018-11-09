var pets = 5;
var name = "Craig";
var success = 0;
var tests = 0;

function test(expression, expectedOutcome, nameOfTest) {
    tests++;
    if(expression == expectedOutcome){
        success++;
        console.log(`Test ${nameOfTest}: pass`);
    }
    else
        console.log(`Test ${nameOfTest}: fail`);
}

function showResults(){
    console.log(`Successfully ran ${success}/${tests} tests`);
}


test(pets == 8, false, "'Number of pets is 8'");
test(pets == 5, true, "'Number of pets is 5'");
test(pets == '5', true, "'Number of pets is '5''");

test(pets === 5, true, "'Number of pets is 5 (strict)'");
test(pets === '5', false, "'Number of pets is equal to '5'(strict)'");

test(pets != 8, true, "'Number of pets is not 8'");
test(pets != 'fish', true, "'Number of pets is not 'fish'");
test(pets !== 5, false, "'Number of pets is not 5(strict)'");
test(pets !== '5', true, "'Number of pets is not '5'(strict)'");
test(pets !==  8, true, "'Number of pets is not 8(strict)'");

test(pets > 4, true, "'Number of pets is greater than 4'");
test(pets > '4', true, "'Number of pets is greater than '4''");
test(pets > 5, false, "'Number of pets is greater than 5'");
test(pets > 6, false, "'Number of pets is greater than 6'");

test(pets < 4, false, "'Number of pets is less than 4'");
test(pets < 5, false, "'Number of pets is less than 5'");
test(pets < 6, true, "'Number of pets is less than 6'");
test(pets < '6', true, "'Number of pets is less than '6''");

test(pets >= 4, true, "'Number of pets is greater than or equal to 4'");
test(pets >= 5, true, "'Number of pets is greater than or equal to 5'");
test(pets >= 6, false, "'Number of pets is greater than or equal to 6'");

test(pets <= 4, false, "'Number of pets is less than or equal to to 4'");
test(pets <= 5, true, "'Number of pets is less than or equal to to 5'");
test(pets <= 6, true, "'Number of pets is less than or equal to to 6'");

test(name.length == 5, true, "'Name has 5 characters'");

test(name != 'Craig' || name != 'Steve', true, "'Name is not Craig or Steve'");
test(name != 'Aaran' || name != 'Steve', true, "'Name is not Aaran or Steve'");

test(name == 'Craig' && pets == 5, true, "'Name is Craig and X is 5'");

test(name.length >= 4 && name.length <= 6, true, "'Name has between 4 and 6 characters (inclusive)'");
test(name.length < 4 && name.length > 6, false, "'Name is not between 4 and 6 characters (inclusive using the not operator)'");

test(name == 'Craig' && pets % 2 == 0, false, "'Name is Craig and x is an even number'");

showResults();