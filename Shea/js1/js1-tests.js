var TestRunner = require('../testRunner');
testSuite = new TestRunner.Suite();

var firstName = "Bob";
var lastName = "Smith";
var myAge = 22;
var maryAge = 33;

exports.greet = function(greet) {
  testSuite.groupName = 'Greeting';
  try {
    testSuite.assertEqual({
      compare: greet(), 
      to: "Hello, My name is Bob Smith", 
      name: 'Insert first and last name'
    });
  }
  catch(e) {
    testSuite.handleError(e);
  } 
  
};

exports.maryAgeDifference = function(maryAgeDifference) {
  testSuite.groupName = 'Age';
  try {
    testSuite.assertEqual({
      compare:maryAgeDifference() , 
      to: "Mary is 11 years older than me", 
      name: 'Calculate difference'
    });
  }
  catch(e) {
    testSuite.handleError(e);
  } 
  
};

exports.nameLength = function(nameLength) {
  testSuite.groupName = 'Name Length';
  try {
    testSuite.assertEqual({
      compare:nameLength() , 
      to: "The total length of both names is 8 characters", 
      name: 'Dynamically calculate name length'
    });
  }
  catch(e) {
    testSuite.handleError(e);
  } 
  
};


exports.summary = function() {
  testSuite.getSummary();
};