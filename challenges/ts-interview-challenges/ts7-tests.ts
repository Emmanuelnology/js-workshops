import { Suite } from '../testRunner';
import { 
  missingNumberInSequence, 
  findDuplicate, 
  removeDuplicates,
  findMultipleDuplicates, 
  findLargestAndSmallest
} from "./ts7";

console.log("\n\nRunning tests...");
let testSuite = new Suite('ts7 - Arrays');

testSuite.assertEqualGroup('Missing number in sequence',
[
  {
    compare: missingNumberInSequence([1,2,4,5,6,7,8,9,10]),
    to: [3], 
    name: 'Missing number in 1-10 (Ordered)'
  },
  {
    compare: missingNumberInSequence([1,2,3,4,5,6,7,9,10]),
    to: [8],  
    name: 'Missing number in 1-10 (Ordered)'
  },
  {
    compare: missingNumberInSequence([1,6,8,2,4,5,7,9,10]),
    to: [3],  
    name: 'Missing number in 1-10 (Unordered)'
  },
  {
    compare: missingNumberInSequence([256, 255, 253]),
    to: [254],  
    name: 'Missing number in 253-256 (Unordered)'
  }
  ,
  {
    compare: missingNumberInSequence([1,2,4,6]),
    to: [3,5],  
    name: 'Missing multiple numbers in 1-6 (Non-consectutive)'
  }
  ,
  {
    compare: missingNumberInSequence([1,2,6]),
    to: [3,4,5],  
    name: 'Missing multiple numbers in 1-6 (Consectutive)'
  }
  ,
  {
    compare: missingNumberInSequence([1,2,3]),
    to: [],  
    name: 'No missing numbers'
  }
  ,
  {
    compare: missingNumberInSequence([-1,-2,-4]),
    to: [-3],  
    name: 'Minus numbers'
  }
]);
testSuite.assertEqualGroup('Duplicate in sequence',
[
  {
    compare: findDuplicate([1,2,3,4,5,6,7,8,9,10]),
    to: undefined, 
    name: 'No duplicates'
  },
  {
    compare: findDuplicate([1,2,3,4,5,6,6,7,8,9,10]),
    to: 6, 
    name: 'Concecutive duplicate 6'
  },
  {
    compare: findDuplicate([1,2,9,3,4,5,6,7,8,9,10]),
    to: 9, 
    name: 'Duplicate 9, out of sequence'
  }
]);

testSuite.assertEqualGroup('Remove Duplicates',
[
  {
    compare: removeDuplicates([1,2,3,4,5,6,7,8,9,10]),
    to: [1,2,3,4,5,6,7,8,9,10], 
    name: 'No duplicates'
  },
  {
    compare: removeDuplicates([1,2,3,4,5,6,7,8,9,10]),
    to: [1,2,3,4,5,6,7,8,9,10], 
    name: 'Remove Concecutive duplicate 6'
  },
  {
    compare: removeDuplicates([1,2,9,3,4,5,6,7,8,9]),
    to: [1,2,9,3,4,5,6,7,8], 
    name: 'Remove Duplicate 9, out of sequence'
  }
]);

testSuite.assertEqualGroup('Multiple Duplicates in sequence',
[
  {
    compare: findMultipleDuplicates([1,2,3,4,5,6,7,8,9,10]),
    to: [], 
    name: 'No duplicates'
  },
  {
    compare: findMultipleDuplicates([1,2,3,4,5,6,6,7,8,9,10]),
    to: [6], 
    name: 'Concecutive duplicate 6'
  },
  {
    compare: findMultipleDuplicates([1,2,9,3,4,5,6,7,8,9,10]),
    to: [9], 
    name: 'Duplicate 9, out of sequence'
  },
  {
    compare: findMultipleDuplicates([1,2,9,3,4,5,6,7,6,8,9,10]),
    to: [6,9], 
    name: 'Multiple duplicates'
  }
]);

testSuite.assertEqualGroup('Largest and Smallest in integer array',
[
  {
    compare: findLargestAndSmallest([1,2,3,4,5,6,7,8,9,10]),
    to: {
      smallest:1,
      largest:10
    }, 
    name: 'Sorted array'
  },
  {
    compare: findLargestAndSmallest([4,5,6,79]),
    to: {
      smallest:4,
      largest:79
    }, 
    name: 'Sorted array with gaps in numbers'
  },
  {
    compare: findLargestAndSmallest([4,1,5,6,79,5]),
    to: {
      smallest:1,
      largest:79
    }, 
    name: 'Unsorted array with gaps in numbers'
  }
]);
testSuite.getSummary();