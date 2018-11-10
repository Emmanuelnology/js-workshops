var test = require('./testRunner');
var data = require('./js5-data');
var people=data.people;

exports.getActiveUsers = function(getActiveUsers) {
  test.setSuiteName('getActiveUsers');
  test.assertEqual({
    compare: getActiveUsers(people).length,
    to: 2, 
    name: 'Returns 2 users'
  });
  
  test.assertEqual({
    compare: getActiveUsers(people)[0].name, 
    to: 'Estrada Nolan',  
    name: 'First result is Estrada'
  });
  
  test.assertEqual({
    compare: getActiveUsers(people)[1].name, 
    to: 'Laverne Andrews',
    name: 'Second result is Laverne'
  });
}

exports.findMatchingEyeColours = function(findMatchingEyeColours) {
  test.setSuiteName('findMatchingEyeColours');

  test.assertEqual({
    compare: findMatchingEyeColours(people, people[0]).length,
    to: 1, 
    name: 'Returns 1 users'
  });
  
  test.assertEqual({
    compare: findMatchingEyeColours(people, people[0])[0], 
    to: 'Laverne Andrews',
    name: 'Matching eye color is only Laverne'
  });
  
  test.assertEqual({
    compare: findMatchingEyeColours(people, people[5])[0], 
    to: undefined,  
    name: 'Eye color: Invalid person shows undefined'
  });
  
  test.assertEqual({
    compare: findMatchingEyeColours(people, people[4])[0], 
    to: 'Hull Woodward',
    name: 'Matching eye color is only Hull'
  });
  
  test.assertEqual({
    compare: findMatchingEyeColours(people, people[1]), 
    to: [],  
    name: 'Matching eye color: no eyeColor in source person returns blank array'
  });
}

exports.getEmailAddress = function(getEmailAddress) {
  test.setSuiteName('getEmailAddress');
 
  test.assertEqual({
    compare: getEmailAddress(people, 2321), 
    to: 'mariastanley@eyeris.com', 
    name: 'Maria email address returns successfully'
  });
  
  test.assertEqual({
    compare: getEmailAddress(people, 5151), 
    to: undefined, 
    name: 'Unknown ID returns undefined'
  });
  
  test.assertEqual({
    compare: getEmailAddress(people, 4138), 
    to: undefined, 
    name: 'User without email address returns undefined'
  });

}

exports.summary = function() {
  test.getSummary();
}