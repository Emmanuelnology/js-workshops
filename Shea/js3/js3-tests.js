var TestRunner = require('../testRunner');
testSuite = new TestRunner.Suite();

// Setup goes here

exports.minDateableAge = function(minDateableAge) {
  testSuite.groupName = 'Minimum Dateable age';
  try {
    testSuite.assertEqual({
      compare: minDateableAge(22), 
      to: 18, 
      name: '22 year old could date an 18 year old'
    });

    testSuite.assertEqual({
      compare: minDateableAge(56), 
      to: 35, 
      name: '56 year old could date an 35 year old'
    });
  }
  catch(e) {
    testSuite.handleError(e);
  } 
  
};

exports.hasFever = function(hasFever) {
  testSuite.groupName = 'Has fever';
  try {
    testSuite.assertEqual({
      compare: hasFever(37.4), 
      to: false, 
      name: 'Under 37.5 doesn\'t have fever'
    });

    testSuite.assertEqual({
      compare: hasFever(37.5), 
      to: true, 
      name: '37.5 has a fever'
    });

    testSuite.assertEqual({
      compare: hasFever(37.6), 
      to: true, 
      name: 'Over 37.5 has a fever'
    });
  }
  catch(e) {
    testSuite.handleError(e);
  } 
  
};

exports.calcTVHeight = function(calcTVHeight) {
  testSuite.groupName = 'TV Height';
  try {
    testSuite.assertEqual({
      compare: calcTVHeight(16), 
      to: 9, 
      name: '16 wide == 9 tall'
    });

    testSuite.assertEqual({
      compare: calcTVHeight(32), 
      to: 18, 
      name: '32 wide == 18 tall'
    });
  }
  catch(e) {
    testSuite.handleError(e);
  } 
  
};

exports.couldDate = function(couldDate) {
  testSuite.groupName = 'Could date';
  try {
    testSuite.assertEqual({
      compare: couldDate(18,22), 
      to: true, 
      name: '18 year old could date a 22 year old'
    });

    testSuite.assertEqual({
      compare: couldDate(18,22), 
      to: true, 
      name: '22 year old could date a 18 year old'
    });

    testSuite.assertEqual({
      compare: couldDate(22,22), 
      to: true, 
      name: '22 year old could date a 22 year old'
    });

    testSuite.assertEqual({
      compare: couldDate(34,56), 
      to: false, 
      name: '34 year old could not date a 56 year old'
    });

    testSuite.assertEqual({
      compare: couldDate(56,34), 
      to: false, 
      name: '56 year old could not date a 34 year old'
    });
  }
  catch(e) {
    testSuite.handleError(e);
  } 
  
};

exports.colorDarken = function(colorDarken) {
  testSuite.groupName = 'Color darken';
  try {
    testSuite.assertEqual({
      compare: colorDarken([60,60,60],10), 
      to: [50,50,50], 
      name: 'Basic reduction from each index'
    });

    testSuite.assertEqual({
      compare: colorDarken([9,1,9],10), 
      to: [0,0,0], 
      name: 'Never go below 0'
    });

    testSuite.assertEqual({
      compare: colorDarken([9,11,10],8), 
      to: [1,3,2], 
      name: 'Reduce by a number that is not 10'
    });

    testSuite.assertEqual({
      compare: colorDarken([60,5,60],6), 
      to: [54,0,54], 
      name: 'Middle index does not reduce below 0 when low number'
    });
  }
  catch(e) {
    testSuite.handleError(e);
  } 
  
};

exports.summary = function() {
  testSuite.getSummary();
};

