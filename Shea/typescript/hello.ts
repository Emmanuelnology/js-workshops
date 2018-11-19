interface Person {
    firstName:string;
    lastName: string;
    likesCheese?: boolean;
}

const bob:Person = {
    firstName: "Bob",
    lastName: "Smith"
}

const derek:Person = {
    firstName: "Derek",
    lastName: "Cathead"
}

export const greet = (person1:Person, person2:Person):string => {
    return "Hello, My name is " + person1.firstName + " " + person2.lastName;
}

console.log(greet(bob, derek));

let people:Person[] = [bob, derek];

for (let index = 0; index < people.length; index++) {
    console.log(people[index].firstName);
}

for (let personIndex in people) {
    console.log(people[personIndex].firstName);
}