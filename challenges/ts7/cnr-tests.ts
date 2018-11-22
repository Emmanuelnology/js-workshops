import { Suite } from '../testRunner';


console.log("\n\nRunning tests...");
let testSuite = new Suite('Suite Name');

testSuite.assertEqualGroup('Example test group',[
  {
    compare: 1,
    to: 1, 
    name: '1 equals 1'
  }
]);

testSuite.getSummary();