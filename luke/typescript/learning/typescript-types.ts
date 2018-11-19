let count = 5;

let count2:any = 5;
count2 = "a";

//core types

let a: string;
let b: boolean;
let c: number;
let d: any;
// main four types in typescript

let e: string[] = ["kash", "George", "Craig"];
let f: any[] = ["kash", 5]; // this is classed as sloppy code
// both are set to arrays (example arrays after)

enum Color { Red = 12, Blue = 23, Green = 32}

console.log(Color.Red);


//Arrow functions
// all these functions do the same thing, just wrtitten differently

function log (message){

console.log(message);
};

log("Hello World");



let log2 = (message) => {
  console.log(message);
}

let log3 = (message) => console.log(message); 

log("hello world")