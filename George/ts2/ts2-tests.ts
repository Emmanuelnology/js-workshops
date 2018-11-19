import { Suite } from '../testRunner';
import { fixColors } from './ts2-solution';

var colors = ['violet', 'green', 'blue', 'yellow'];

console.log("\n\nRunning tests...");
let testSuite = new Suite('ts2');

testSuite.assertEqualGroup('ts2',[
  {
    compare: fixColors(colors,0), 
      to: ['red', 'green', 'blue', 'yellow'], 
      name: 'Fix index 0'
  },
  {
    compare: fixColors(colors,1), 
    to: ['violet', 'red', 'blue', 'yellow'], 
    name: 'Fix index 1'
  },
  {
    compare: fixColors(colors,2), 
    to: ['violet', 'green', 'blue', 'yellow'], 
    name: 'Fix index 2'
  },
  {
    compare: fixColors(colors,3), 
    to: ['violet', 'green', 'blue', 'yellow'], 
    name: 'Fix index 3'
  }
]);

testSuite.getSummary();

