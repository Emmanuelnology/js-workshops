var total = 0;
var success = 0;

function test(func, expectedResult, parameter1){
  if (typeof parameter1 === 'undefined') { parameter1 = ''; }
  var actualResult;
  if (Array.isArray(parameter1)) { 
     actualResult = func.apply(this,parameter1); }
    else {
   actualResult = func(parameter1);
    }

  var description =func.name + "(" + parameter1 + ")";
  var friendlyResult = 'Fail';
  
  if(JSON.stringify(expectedResult) === JSON.stringify(actualResult) ){
    friendlyResult = 'Pass';
    success++;
  }
  else {
    console.log("Fail result:", actualResult);
  }
  total++;
  console.log(friendlyResult + " - " + description);

}

function getSummary() {
  console.log("Ran " + success + "/" + total + " tests successfully");
}

module.exports = {
  show: getSummary,
  run: test
};