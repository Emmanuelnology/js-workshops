import { Suite } from '../testRunner';
import { people } from './ts4-data';
import { 
  isVegetarian, 
  canFitOnANameCard, 
  getLifeExpectancy, 
  yearsRemaining, 
  canRideOnARollercoaster, 
  canBuyBeer, 
  getSummary 
} from "./ts4-solution";

console.log("\n\nRunning tests...");
let testSuite = new Suite('ts4');

testSuite.assertEqualGroup('Is Vegetarian',
[
  {
    compare: isVegetarian(people[0]), 
    to: true, 
    name: 'Bob is vegetarian'
  },
  {
    compare: isVegetarian(people[1]), 
    to: true, 
    name: 'Thomas is not vegetarian'
  },
  {
    compare: isVegetarian(people[5]), 
    to: false, 
    name: 'Dave is not vegetarian'
  }
]);

testSuite.assertEqualGroup('Can fit on name card',
[
  {
    compare: canFitOnANameCard(people[0]), 
    to: true, 
    name: 'Bob can fit on a name card'
  },
  {
    compare: canFitOnANameCard(people[1]), 
    to: false, 
    name: 'Harigon cannot fit on a name card'
  },
  {
    compare: canFitOnANameCard(people[2]), 
    to: true, 
    name: 'Thomas can fit on a name card'
  }
]);

testSuite.assertEqualGroup('Life expectancy',
[
  {
    compare: getLifeExpectancy(people[0]), 
    to: 90, 
    name: '90 total years'
  },
  {
    compare: getLifeExpectancy(people[1]), 
    to: 90, 
    name: '90 total years'
  },
  {
    compare: getLifeExpectancy(people[2]), 
    to: 95, 
    name: '95 total years'
  }
]);

testSuite.assertEqualGroup('Years remaining',
[
  {
    compare: yearsRemaining(people[0]), 
    to: 78, 
    name: 'Bob will live for 78 years'
  },
  {
    compare: yearsRemaining(people[3]), 
    to: 78, 
    name: 'Sarah will live for 78 years'
  },
  {
    compare: yearsRemaining(people[5]), 
    to: 2, 
    name: 'Dave will live for 2 years'
  },
  {
    compare: yearsRemaining(people[6]), 
    to: -4, 
    name: 'Doris will live for -4 years'
  }
]);

testSuite.assertEqualGroup('Can ride on a rollercoaster',
[
  {
    compare: canRideOnARollercoaster(people[1]), 
    to: true, 
    name: 'Harigon can ride a rollercoaster'
  },
  {
    compare: canRideOnARollercoaster(people[2]), 
    to: true, 
    name: 'Thomas can ride a rollercoaster'
  },
  {
    compare: canRideOnARollercoaster(people[3]), 
    to: false, 
    name: 'Sarah is too short for a rollercoaster'
  }
]);

testSuite.assertEqualGroup('Can buy beer',
[
  {
    compare: canBuyBeer(people[2]), 
    to: true, 
    name: 'Thomas can buy beer'
  },
  {
    compare: canBuyBeer(people[3]), 
    to: false, 
    name: 'Sarah cannot buy beer'
  },
  {
    compare: canBuyBeer(people[5]), 
    to: true, 
    name: 'Dave can buy beer'
  }
]);

testSuite.assertEqualGroup('Summary',
[
  {
    compare: getSummary(people[0]), 
    to: "Bob is a vegetarian, is 110cm tall and has 78 years to live", 
    name: 'Bob'
  },
  {
    compare: getSummary(people[2]), 
    to: "Thomas likes meat, is 121cm tall and has 77 years to live", 
    name: 'Thomas'
  },
  {
    compare: getSummary(people[6]), 
    to: "Doris is a vegetarian, is 80cm tall and should be dead", 
    name: 'Doris'
  }
]);

testSuite.getSummary();
