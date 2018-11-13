import { Suite } from '../testRunner';
import { people } from './ts5-data';
import { 
  getActiveUsers,
  findMatchingEyeColours,
  getEmailAddress,
  getActiveUsersWithInvalidEmail,
  addRandomMobileNumbers
} from "./ts5-solution";

console.log("\n\nRunning tests...");
let testSuite = new Suite('ts4');

testSuite.assertEqualGroup('Get active users',
[
  {
    compare: getActiveUsers(people).length,
    to: 3, 
    name: 'Returns 3 users'
  },
  {
    compare: getActiveUsers(people)[0].name, 
    to: 'Estrada Nolan',  
    name: 'First result is Estrada'
  },
  {
    compare: getActiveUsers(people)[1].name, 
    to: 'Laverne Andrews',
    name: 'Second result is Laverne'
  }
]);

testSuite.assertEqualGroup('Get matching eye colours',
[
  {
    compare: findMatchingEyeColours(people, people[0]).length,
    to: 1, 
    name: 'Returns 1 users'
  },
  {
    compare: findMatchingEyeColours(people, people[0])[0], 
    to: 'Laverne Andrews',
    name: 'Matching eye color is only Laverne'
  },
  {
    compare: findMatchingEyeColours(people, people[5])[0], 
    to: undefined,  
    name: 'Eye color: Invalid person shows undefined'
  },
  {
    compare: findMatchingEyeColours(people, people[4])[0], 
    to: 'Hull Woodward',
    name: 'Matching eye color is only Hull'
  },
  {
    compare: findMatchingEyeColours(people, people[1]), 
    to: [],  
    name: 'No eyeColor in source person returns blank array'
  }
]);

testSuite.assertEqualGroup('Get email address',
[
  {
    compare: getEmailAddress(people, 2321), 
    to: 'mariastanley@eyeris.com', 
    name: 'Maria email address returns successfully'
  },
  {
    compare: getEmailAddress(people, 5151), 
    to: undefined, 
    name: 'Unknown ID returns undefined'
  },
  {
    compare: getEmailAddress(people, 4138), 
    to: undefined, 
    name: 'User without email address returns undefined'
  }
]);

testSuite.assertEqualGroup('Get active users with invalid email',
[
  {
    compare: getActiveUsersWithInvalidEmail(people).length, 
    to: 2, 
    name: '2 total users returned'
  },
  {
    compare: getActiveUsersWithInvalidEmail(people)[0].name, 
    to: 'Laverne Andrews', 
    name: 'Laverne has inactive email address'
  },
  {
    compare: getActiveUsersWithInvalidEmail(people)[1].name, 
    to: 'Maria Stanley', 
    name: 'Maria has inactive email address'
  }
]);

let regex = new RegExp(/^(07\d{3}\s\d{6}$)/);
testSuite.groupName="Mobile numbers";

for (let person of addRandomMobileNumbers(people)) {
  testSuite.assertRegex({
    name: person.name + " mobile",
    string: person.mobile,
    regex: regex
  })
}


  testSuite.getSummary();