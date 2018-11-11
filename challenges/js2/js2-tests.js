var TestRunner = require("../testRunner");
testSuite = new TestRunner.Suite();

var colors = ['violet', 'green', 'blue', 'yellow'];

exports.fixColors = function(fixColors) {
  testSuite.groupName = 'Fix colors';
  try {
    testSuite.assertEqual({
      compare: fixColors(colors,0), 
      to: ['red', 'green', 'blue', 'yellow'], 
      name: 'Fix index 0'
    });

    testSuite.assertEqual({
      compare: fixColors(colors,1), 
      to: ['violet', 'red', 'blue', 'yellow'], 
      name: 'Fix index 1'
    });

    testSuite.assertEqual({
      compare: fixColors(colors,2), 
      to: ['violet', 'green', 'blue', 'yellow'], 
      name: 'Fix index 2'
    });

    testSuite.assertEqual({
      compare: fixColors(colors,3), 
      to: ['violet', 'green', 'blue', 'yellow'], 
      name: 'Fix index 3'
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

// Tests below
test.run(fixColors, ['red', 'green', 'blue', 'yellow'], [colors,0]);
test.run(fixColors, ['violet', 'red', 'blue', 'yellow'], [colors,1]);
test.run(fixColors, ['violet', 'green', 'blue', 'yellow'], [colors,2]);
test.run(fixColors, ['violet', 'green', 'blue', 'yellow'], [colors,3]);

*/