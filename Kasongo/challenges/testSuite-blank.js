var TestRunner = require('./testRunner');
testSuite = new TestRunner.Suite();

// Setup goes here

exports.testFunction = function(testFunction) {
  testSuite.groupName = 'Test Group';
  try {
    testSuite.assertEqual({
      compare: val1, 
      to: 'Test output', 
      name: 'Test case'
    });
  }
  catch(e) {
    testSuite.handleError(e);
  } 
  
};


exports.summary = function() {
  testSuite.getSummary();
};