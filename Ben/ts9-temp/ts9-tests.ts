import { Suite } from '../testRunner';
import { House, Car, Bedroom, LargeRoom, Bathroom } from "./ts9-challenge";

console.log("\n\nRunning tests...");
let testSuite = new Suite('ts9');

let house = new House();
house.addRoom(new Bedroom('Guest'));

testSuite.assertEqualGroup('Add Room',
[
  {
    compare: house.rooms.length, 
    to: 1, 
    name: 'Can add a room to the house'
  },
  {
    compare: house.rooms[0].name, 
    to: 'Guest', 
    name: 'Added room has name'
  }
]);

house.addRoom(new LargeRoom('Master'));
house.addRoom(new Bedroom('Kids'));
house.addRoom(new Bedroom('Spare'));

testSuite.assertEqualGroup('Add more rooms',
[
  {
    compare: house.rooms.length, 
    to: 4, 
    name: 'Can more rooms to the house'
  }
]);

house.removeRoom('Kids');

testSuite.assertEqualGroup('Remove Room',
[
  {
    compare: house.rooms.length, 
    to: 3, 
    name: 'Can remove a room'
  },
  {
    compare: house.rooms[0].name, 
    to: 'Guest', 
    name: 'Guest room at index 0'
  },
  {
    compare: house.rooms[1].name, 
    to: 'Master', 
    name: 'Master room at index 1'
  },{
    compare: house.rooms[2].name, 
    to: 'Spare', 
    name: 'Spare room at index 2'
  }
]);

house.addRoom(new Bathroom('Main'));

testSuite.assertEqualGroup('Room Types',
[
  {
    compare: house.rooms[0] instanceof Bedroom, 
    to: true, 
    name: 'Guest room is a bedroom'
  },
  {
    compare: house.rooms[1] instanceof LargeRoom, 
    to: true, 
    name: 'Master room is a large room'
  },{
    compare: house.rooms[2] instanceof Bedroom, 
    to: true, 
    name: 'Spare room is a bedroom'
  },{
    compare: house.rooms[3] instanceof Bathroom, 
    to: true, 
    name: 'Main bathroom is a bathroom'
  }
]);

house.addCar(new Car('WD12 YES'));

testSuite.assertEqualGroup('Add car',
[
  {
    compare: house.cars.length, 
    to: 1, 
    name: 'Can add a car to the house'
  },
  {
    compare: house.cars[0].registration, 
    to: 'WD12 YES', 
    name: 'Added car has registration'
  }
]);

house.addCar(new Car('WD66TER'));

testSuite.assertEqualGroup('Add another car',
[
  {
    compare: house.cars.length, 
    to: 2, 
    name: 'Can remove a car from the house'
  },
  {
    compare: house.cars[1].registration, 
    to: 'WD66TER', 
    name: 'Added car has registration'
  }
]);

house.removeCar('WD12 YES');

testSuite.assertEqualGroup('Remove car',
[
  {
    compare: house.cars.length, 
    to: 1, 
    name: 'Can remove a car from the house'
  },
  {
    compare: house.cars[0].registration, 
    to: 'WD66TER', 
    name: 'Remaining car has registration'
  },
  {
    compare: house.cars[0].isLocked(), 
    to: true, 
    name: 'Remaining car is locked'
  },
]);

house.cars[0].toggleLock();

testSuite.assertEqualGroup('Car can unlock',
[
  {
    compare: house.cars[0].isLocked(), 
    to: false, 
    name: 'Can unlock car'
  }
]);

house.cars[0].toggleLock();

testSuite.assertEqualGroup('Car can relock',
[
  {
    compare: house.cars[0].isLocked(), 
    to: true, 
    name: 'Can relock car'
  }
]);

testSuite.getSummary();
