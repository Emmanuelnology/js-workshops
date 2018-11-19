function log(message) {
    console.log(message);
}

let log2 = (message) => {
    console.log(message);
}

let log3 = (message) => console.log(message);


interface Person {
    firstName:string,
    lastName:string,
    likesCheese?:boolean
}

const bob:Person = {
    firstName: "Bob",
    lastName: "Smith"
}

const derek:Person = {
    firstName: "Derek",
    lastName: "Cathead"
}

const greet = (person:Person):string => {
    return "Hello, My name is " + person.firstName + " " + person.lastName;
}

console.log(greet(bob));


let people:Person[] = [bob,derek];

for (let index:number=0; index<people.length; index++) {
    console.log(people[index].firstName);
}

console.log("\n");

for (const person of people) {
    console.log(person.firstName);
}

console.log("\n");

for (const personIndex in people) {
    console.log(personIndex +": " + people[personIndex].firstName);
}