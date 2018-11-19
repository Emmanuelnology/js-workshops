interface person {
  firstName:string
  lastName:string
  likesCheese?: boolean
}

const bob:person = {
  firstName: "Bob",
  lastName: "Smith"
}

const derek:person = {
  firstName: "Derek",
  lastName: "Cathead"
}

let people:person[] = [bob,derek];

for(let index = 0; index < people.length; index++) {
  console.log(people[index].firstName);
}

for (const person of people) {
  console.log(person.firstName)
}

for (const personIndex in people){
  console.log(personIndex + ":" + people[personIndex].firstName)
}