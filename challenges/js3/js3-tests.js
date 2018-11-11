var TestRunner = require('../testRunner');
testSuite = new TestRunner.Suite();

var people=[ //name, age, height, isVegetarian
  ['Bob', 12, 110, true],
  ['Harigon', 63, 150, true],
  ['Thomas', 18, 121, false],
  ['Sarah', 17, 119, false],
  ['Lucy', 78, 140, true],
  ['Dave', 93, 210, false],
  ['Doris', 94, 80, true],
];

exports.isVegetarian = function(isVegetarian) {
  testSuite.groupName = 'is Vegetarian';
  try {
    testSuite.assertEqual({
      compare: isVegetarian(0), 
      to: true, 
      name: 'Bob is vegetarian'
    });

    testSuite.assertEqual({
      compare: isVegetarian(2), 
      to: false, 
      name: 'Thomas is not vegetarian'
    });

    testSuite.assertEqual({
      compare: isVegetarian(5), 
      to: false, 
      name: 'Dave is not vegetarian'
    });
  }
  catch(e) {
    testSuite.handleError(e);
  } 
  
};

exports.canFitOnANameCard = function(canFitOnANameCard) {
  testSuite.groupName = 'Can fit on name card';
  try {
    testSuite.assertEqual({
      compare: canFitOnANameCard(0), 
      to: true, 
      name: 'Bob can fit on a name card'
    });

    testSuite.assertEqual({
      compare: canFitOnANameCard(1), 
      to: false, 
      name: 'Harigon cannot fit on a name card'
    });

    testSuite.assertEqual({
      compare: canFitOnANameCard(2), 
      to: true, 
      name: 'Thomas can fit on a name card'
    });

  }
  catch(e) {
    testSuite.handleError(e);
  } 
  
};

exports.getLifeExpectancy = function(getLifeExpectancy) {
  testSuite.groupName = 'Can fit on name card';
  try {
    testSuite.assertEqual({
      compare: getLifeExpectancy(0), 
      to: 90, 
      name: 'Bob will live for 90 years'
    });

    testSuite.assertEqual({
      compare: getLifeExpectancy(3), 
      to: 95, 
      name: 'Thomas will live for 95 years'
    });

  }
  catch(e) {
    testSuite.handleError(e);
  } 
  
};

exports.yearsRemaining = function(yearsRemaining) {
  testSuite.groupName = 'Years remaining';
  try {
    testSuite.assertEqual({
      compare: yearsRemaining(0), 
      to: 78, 
      name: 'Bob will live for 78 years'
    });

    testSuite.assertEqual({
      compare: yearsRemaining(3), 
      to: 78, 
      name: 'Sarah will live for 78 years'
    });

    testSuite.assertEqual({
      compare: yearsRemaining(5), 
      to: 2, 
      name: 'Dave will live for 2 years'
    });

    testSuite.assertEqual({
      compare: yearsRemaining(6), 
      to: -4, 
      name: 'Doris will live for -4 years'
    });

  }
  catch(e) {
    testSuite.handleError(e);
  } 
  
};

exports.canRideOnARollercoaster = function(canRideOnARollercoaster) {
  testSuite.groupName = 'Can ride on a rollercoaster';
  try {
    testSuite.assertEqual({
      compare: canRideOnARollercoaster(1), 
      to: true, 
      name: 'Harigon can ride a rollercoaster'
    });

    testSuite.assertEqual({
      compare: canRideOnARollercoaster(2), 
      to: true, 
      name: 'Thomas can ride a rollercoaster'
    });

    testSuite.assertEqual({
      compare: canRideOnARollercoaster(3), 
      to: false, 
      name: 'Sarah is too short for a rollercoaster'
    });


  }
  catch(e) {
    testSuite.handleError(e);
  } 
  
};

exports.canBuyBeer = function(canBuyBeer) {
  testSuite.groupName = 'Can buy beer';
  try {
    testSuite.assertEqual({
      compare: canBuyBeer(2), 
      to: true, 
      name: 'Thomas can buy beer'
    });

    testSuite.assertEqual({
      compare: canBuyBeer(3), 
      to: false, 
      name: 'Sarah cannot buy beer'
    });

    testSuite.assertEqual({
      compare: canBuyBeer(5), 
      to: true, 
      name: 'Dave can buy beer'
    });


  }
  catch(e) {
    testSuite.handleError(e);
  } 
  
};

exports.getSummary = function(getSummary) {
  testSuite.groupName = 'Summary';
  try {
    testSuite.assertEqual({
      compare: getSummary(0), 
      to: "Bob is a vegetarian, is 110cm tall and has 78 years to live", 
      name: 'Bob'
    });

    testSuite.assertEqual({
      compare: getSummary(2), 
      to: "Thomas likes meat, is 121cm tall and has 77 years to live", 
      name: 'Thomas'
    });

    testSuite.assertEqual({
      compare: getSummary(6), 
      to: "Doris is a vegetarian, is 80cm tall and should be dead", 
      name: 'Doris'
    });


  }
  catch(e) {
    testSuite.handleError(e);
  } 
  
};


exports.summary = function() {
  testSuite.getSummary();
};

/*

test.run(getSummary, "Bob is a vegetarian, is 110cm tall and has 78 years to live", 0);
test.run(getSummary, "Thomas likes meat, is 121cm tall and has 72 years to live", 2);
test.run(getSummary, "Doris is a vegetarian, is 80cm tall and should be dead", 6);

test.show();
*/