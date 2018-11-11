var TestRunner = require('../testRunner');
testSuite = new TestRunner.Suite();

var data = require('./js5-data');
var people = data.people;

exports.getActiveUsers = function(getActiveUsers) {
  testSuite.groupName='getActiveUsers';
  try{
    testSuite.assertEqual({
      compare: getActiveUsers(people).length,
      to: 3, 
      name: 'Returns 3 users'
    });
    
    testSuite.assertEqual({
      compare: getActiveUsers(people)[0].name, 
      to: 'Estrada Nolan',  
      name: 'First result is Estrada'
    });
    
    testSuite.assertEqual({
      compare: getActiveUsers(people)[1].name, 
      to: 'Laverne Andrews',
      name: 'Second result is Laverne'
    });
  }
  catch(e) {
    testSuite.handleError(e);
  }
};

exports.findMatchingEyeColours = function(findMatchingEyeColours) {
  try{
    testSuite.groupName='findMatchingEyeColours';
    
    testSuite.assertEqual({
      compare: findMatchingEyeColours(people, people[0]).length,
      to: 1, 
      name: 'Returns 1 users'
    });
    
    testSuite.assertEqual({
      compare: findMatchingEyeColours(people, people[0])[0], 
      to: 'Laverne Andrews',
      name: 'Matching eye color is only Laverne'
    });
    
    testSuite.assertEqual({
      compare: findMatchingEyeColours(people, people[5])[0], 
      to: undefined,  
      name: 'Eye color: Invalid person shows undefined'
    });
    
    testSuite.assertEqual({
      compare: findMatchingEyeColours(people, people[4])[0], 
      to: 'Hull Woodward',
      name: 'Matching eye color is only Hull'
    });
    
    testSuite.assertEqual({
      compare: findMatchingEyeColours(people, people[1]), 
      to: [],  
      name: 'No eyeColor in source person returns blank array'
    });
  }
  
  catch(e) {
    testSuite.handleError(e);
  }
};

exports.getEmailAddress = function(getEmailAddress) {
  
  testSuite.groupName='getEmailAddress';
  try{
    testSuite.assertEqual({
      compare: getEmailAddress(people, 2321), 
      to: 'mariastanley@eyeris.com', 
      name: 'Maria email address returns successfully'
    });
    
    testSuite.assertEqual({
      compare: getEmailAddress(people, 5151), 
      to: undefined, 
      name: 'Unknown ID returns undefined'
    });
    
    testSuite.assertEqual({
      compare: getEmailAddress(people, 4138), 
      to: undefined, 
      name: 'User without email address returns undefined'
    });
  }
  catch(e) {
    testSuite.handleError(e);
  }
};

exports.getActiveUsersWithInvalidEmail = function(getActiveUsersWithInvalidEmail) {
  testSuite.groupName='getActiveUsersWithInvalidEmail';
  try {
    testSuite.assertEqual({
      compare: getActiveUsersWithInvalidEmail(people).length, 
      to: 2, 
      name: '2 total users returned'
    });
    
    testSuite.assertEqual({
      compare: getActiveUsersWithInvalidEmail(people)[0].name, 
      to: 'Laverne Andrews', 
      name: 'Laverne has inactive email address'
    });
    
    testSuite.assertEqual({
      compare: getActiveUsersWithInvalidEmail(people)[1].name, 
      to: 'Maria Stanley', 
      name: 'Maria has inactive email address'
    });
  }
  catch(e) {
    testSuite.handleError(e);
  }
};

exports.addRandomMobileNumbers = function(addRandomMobileNumbers) {
  testSuite.groupName = 'addRandomMobileNumbers';
  try {
    for(index=0; index<people.length; index++){
      mobile=addRandomMobileNumbers(people)[index].mobileNumber;
      testSuite.assertRegex({
        string: mobile, 
        regex: new RegExp(/^(07\d{3}\s\d{6}$)/), 
        name: 'Valid mobile number (' + mobile + ') at index: '+index
      });
    }
  }
  catch(e) {
    testSuite.handleError(e);
  } 
  
}


exports.summary = function() {
  testSuite.getSummary();
};