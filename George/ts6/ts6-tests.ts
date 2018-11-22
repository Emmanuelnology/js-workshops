import { Suite } from '../testRunner';
import { liz } from "./data";

import { 
  search,
  findDescendants,
  findByName
} from "./ts6-solution";

console.log("\n\nRunning tests...");
let testSuite = new Suite('ts6 - Arrays');

testSuite.assertEqualGroup('Find by name',
[
  {
    compare: findByName(liz,'Charles'),
    to: liz.children[0], 
    name: 'Charles'
  },
  {
    compare: findByName(liz,'William'),
    to: liz.children[0].children[0], 
    name: 'William'
  },
  {
    compare: findByName(liz,'Andrew'),
    to: liz.children[2], 
    name: 'Andrew'
  },
  {
    compare: findByName(liz,'Anne'),
    to: liz.children[1], 
    name: 'Anne'
  },
  {
    compare: findByName(liz,'Harry'),
    to: liz.children[0].children[1], 
    name: 'Harry'
  }

]);

testSuite.assertEqualGroup('Find Descendants',
[
  {
    compare: findDescendants(liz.children[0]),
    to: [ 'William', 'George', 'Charlotte', 'Louis', 'Harry' ], 
    name: 'Charles'
  },
  {
    compare: findDescendants(liz.children[0].children[0]),
    to: [ 'George','Charlotte', 'Louis' ], 
    name: 'William'
  },
  {
    compare: findDescendants(liz.children[2]),
    to: ["Beatrice","Eugenie"], 
    name: 'Andrew'
  },
  {
    compare: findDescendants(liz.children[1]),
    to: ["Peter","Savannah","Isla","Zara","Mia","Lena"], 
    name: 'Anne'
  },
  {
    compare: findDescendants(liz.children[0].children[1]),
    to: [], 
    name: 'Harry'
  }

]);

testSuite.assertEqualGroup('Search',
[
  {
    compare: search(liz,'Charles'),
    to: [ 'William', 'George', 'Charlotte', 'Louis', 'Harry' ], 
    name: 'Charles'
  },
  {
    compare: search(liz,'William'),
    to: [ 'George','Charlotte', 'Louis' ], 
    name: 'William'
  },
  {
    compare: search(liz,'Andrew'),
    to: ["Beatrice","Eugenie"], 
    name: 'Andrew'
  },
  {
    compare: search(liz,'Anne'),
    to: ["Peter","Savannah","Isla","Zara","Mia","Lena"], 
    name: 'Anne'
  },
  {
    compare: search(liz,'Harry'),
    to: [], 
    name: 'Harry'
  }

]);

testSuite.getSummary();
