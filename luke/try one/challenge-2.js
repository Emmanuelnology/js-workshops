var name = 'Craig';
var numberOfPets = 5;

function test(numberOfPets, boolean, expression) {
if (numberOfPets == boolean){
  console.log(expression)
}
}

test(numberOfPets == 8, false, "1'Test Number of pets is 5': Pass");
test(numberOfPets == 5, true, "2'Test Number of pets is 5': Pass");
test(numberOfPets == '5', true, "3'Test Number of pets is 5': Pass");

function test(numberOfPets, boolean, expression) {
  if (numberOfPets === boolean){
    console.log(expression)
  }
  }
test(numberOfPets === 5, true, "1'Test Number of pets is 5(strict)': Pass");
test(numberOfPets === '5', false, "2'Test Number of pets is 5(strict)': Pass");

// function test(name, boolean, expression) {
//   if (name !== boolean){
//     console.log(expression)
//   }
//   }
// test(name=='Craig', true, "'Test Number of pets is 5': Pass");
// test(name == 8, false, "'Test Number of pets is 8': Pass");
// test(name=='Craig', true, "'Test Number of pets is 5': Pass");
// test(name == 8, false, "'Test Number of pets is 8': Pass");
// test(name=='Craig', true, "'Test Number of pets is 5': Pass");

showResults();


function showResults(){
  console.log('Successfully ran 1/1 tests')
}