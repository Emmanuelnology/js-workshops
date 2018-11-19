let count:any = 0;
count = 'a';

let a:string;
let b:number;
let c:boolean;
let d:any;
let e:string[] = ["Kash", "Dave", "Bob"];
let f:any[] = ["Jeremy", 5];
enum Colour{Red = 12, Blue = 23, Green = 32};
// console.log(Colour);
// console.log(Colour.Red);

let anyMessage;

function log(message) {
    console.log(message);
}

log("Hello world");

// tsc hello.ts --watch
// This will auto compile on save

let log2 = (message) => {
    console.log(message);
}

let logBest = (message):string => message;



let greet = (person):string => {
    return "Hello, My name is " + person.firstName + " " + person.lastName + "\n";
}

interface Person {
    firstName:string,
    lastName:string,
    likesCheese?:boolean
}

const bob:Person = {
    firstName: "Bob",
    lastName: "Smith"
}

const george:Person = {
    firstName: "George",
    lastName: "Webster"
}

console.log(greet(bob));
console.log(greet(george));

let people:Person[] = [bob, george];


for(let index = 0; index < people.length; index++) {
    console.log(people[index].firstName);
}

console.log();

//for(iterator of object)
for(const eachPerson of people) {
    console.log(eachPerson.firstName);
}

console.log();

//using IN uses the index of the person. For OF doesn't let us ever reference the index.
for(const personIndex in people) {
    console.log(personIndex + ": " + people[personIndex].firstName);
}
