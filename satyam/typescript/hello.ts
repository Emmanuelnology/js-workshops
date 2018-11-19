interface Person {
    firstName:string,
    lastName:string,
    likesCheese?:boolean
}

const bob:Person = { 
    firstName: "Bobbinho",
    lastName: "Smith"
}

const derek:Person = { 
    firstName: "Derek D Dawg",
    lastName: "Catinho"
}

export const greet = (person1:Person, person2:Person) :string => {
    person1.likesCheese;
    return "Hello, My name is " + person1.firstName + " " + person2.lastName;
} 

// console.log(greet(bob, derek));

let people:Person[] = [bob, derek];

for (let index = 0; index < people.length; index++) {
    console.log(people[index].firstName);
}

console.log('\n');

for (let person of people) {
    console.log(person.lastName);
}

console.log('\n');

for (let personIndex in people) {
    console.log(people[personIndex].firstName);
}