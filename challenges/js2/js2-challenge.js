/*
Create a multi-dimensional-array containing attributes for 7 people:

Name | Age | Height (cm) | Vegetarian
Bob | 12 | 110 | true
Harigon | 63 | 150 | true
Thomas | 23 | 121 | false
Sarah | 13 | 119 | false
Lucy | 78 | 140 | true
Dave | 93 | 210 | false
Doris | 94 | 80 | true

Functions should take a single parameter which is the index of the person and return the result rather than log to the console.

-- Whether they are vegetarian :boolean
-- Whether their name is too long to write on a name tag :boolean
-- Life expectancy : years
-- years before they die :number
-- Whether they can ride on a rollercoaster :boolean
-- Should already be dead :boolean
-- Can buy beer in the UK :boolean
-- Show a friendly summary of the person :string

Life expectancy of a Vegetarian: 90
Life expectancy of a Meat Eater: 95
Minimum height to ride on a rollercoaster: 1.2m
Name tag length ( Up to 6 characters)

Use the test function to test your results

*/

var test = require('../testRunner');

// Insert your code here

// Tests below
test.run(isVegetarian, true, 0);
test.run(isVegetarian, false, 2);
test.run(isVegetarian, false, 5);
test.run(canFitOnANameCard, true, 0);
test.run(canFitOnANameCard, false, 1);
test.run(canFitOnANameCard, true, 2);
test.run(getLifeExpectancy, 90, 0);
test.run(getLifeExpectancy, 95, 3);
test.run(yearsRemaining, 78, 0);
test.run(yearsRemaining, 82, 3);
test.run(yearsRemaining, 2, 5);
test.run(yearsRemaining, -4, 6);
test.run(canRideOnARollercoaster, true, 1);
test.run(canRideOnARollercoaster, true, 2);
test.run(canRideOnARollercoaster, false, 3);
test.run(canBuyBeer, true, 2);
test.run(canBuyBeer, false, 3);
test.run(canBuyBeer, true, 5);
test.run(getSummary, "Bob is a vegetarian, is 110cm tall and has 78 years to live", 0);
test.run(getSummary, "Thomas likes meat, is 121cm tall and has 72 years to live", 2);
test.run(getSummary, "Doris is a vegetarian, is 80cm tall and should be dead", 6);

test.show();