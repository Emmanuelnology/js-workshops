import { Suite } from '../testRunner';
import { minDateableAge, hasFever, calcTVHeight, couldDate, colorDarken } from './ts3-challenge';

console.log("\n\nRunning tests...");
let testSuite = new Suite('ts3');
testSuite.assertEqualGroup('Minimum Dateable age',
[
  {
    compare: minDateableAge(22), 
    to: 18, 
    name: '22 year old could date an 18 year old'
  },{
    compare: minDateableAge(56), 
    to: 35, 
    name: '56 year old could date an 35 year old'
  }
]);

testSuite.assertEqualGroup('Has fever',[
  {
    compare: hasFever(37.4), 
    to: false, 
    name: 'Under 37.5 doesn\'t have fever'
  },
  {
    compare: hasFever(37.5), 
    to: true, 
    name: '37.5 has a fever'
  },
  {
    compare: hasFever(37.6), 
    to: true, 
    name: 'Over 37.5 has a fever'
  }
]);

testSuite.assertEqualGroup('TV Height',[
  {
    compare: calcTVHeight(16), 
    to: 9, 
    name: '16 wide == 9 tall'
  }
  ,{
    compare: calcTVHeight(32), 
    to: 18, 
    name: '32 wide == 18 tall'
  }
]);

testSuite.assertEqualGroup('Could date',[
  {
    compare: couldDate(18,22), 
    to: true, 
    name: '18 year old could date a 22 year old'
  },
  {
    compare: couldDate(18,22), 
    to: true, 
    name: '22 year old could date a 18 year old'
  },
  {
    compare: couldDate(22,22), 
    to: true, 
    name: '22 year old could date a 22 year old'
  },
  {
    compare: couldDate(34,56), 
    to: false, 
    name: '34 year old could not date a 56 year old'
  },
  {
    compare: couldDate(34,56), 
    to: false, 
    name: '56 year old could not date a 34 year old'
  }
]);

testSuite.assertEqualGroup('Could date',[
  {
    compare: colorDarken({ red:60 ,green:60 ,blue:60 }, 10), 
    to: [50,50,50], 
    name: 'Basic reduction from each index'
  },
  {
    compare: colorDarken({ red:9 ,green:1 ,blue:9 }, 10), 
    to: [0,0,0], 
    name: 'Never go below 0'
  },
  {
    compare: colorDarken({ red:9 ,green:11 ,blue:10 }, 8), 
    to: [1,3,2], 
    name: 'Reduce by a number that is not 10'
  },
  {
    compare: colorDarken({ red:60 ,green:5 ,blue:60 }, 6), 
    to: [54,0,54], 
    name: 'Middle index does not reduce below 0 when low number'
  }
])

testSuite.getSummary();
