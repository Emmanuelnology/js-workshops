import { Suite } from '../testRunner';
import { greet, maryAgeDifference, nameLength } from './ts1-solution';

console.log("\n\nRunning tests...");
let testSuite = new Suite('ts1');

testSuite.assertEqualGroup('ts1',[
  {
    compare: greet(), 
    to: "Hello, My name is Bob Smith", 
    name: 'Insert first and last name'
  },
  {
    compare: maryAgeDifference(), 
    to: "Mary is 11 years older than me", 
    name: 'Calculate difference'
  },
  {
    compare: nameLength(), 
    to: "The total length of both names is 8 characters", 
    name: 'Dynamically calculate name length'
  }
]);

testSuite.getSummary();

