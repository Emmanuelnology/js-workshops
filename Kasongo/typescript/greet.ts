interface Person {
    firstName:string,
    lastName:string
    likeCheese?:boolean
}


const bob:Person = {
    firstName: "Bob",
    lastName: "Smith"
}

const derek:Person = {
    firstName: "Derek",
    lastName: "Woff"
}

export const greet = (person1:Person, person2:Person):string => {
    return "Hello, My name is " + bob.firstName +" "+ bob.lastName;
}

console.log(greet(bob, derek));

let people:Person[] = [bob,derek];

for (let index= 0; index<5; index++) {
    console.log(people[index].firstName);
}
console.log('\n');

for (const person of people) {
    console.log(person.firstName);
}
console.log('\n');

for (const personIndex in people) {
    console.log(people[personIndex].firstName);
}