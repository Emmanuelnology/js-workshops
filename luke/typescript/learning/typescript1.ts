// function logToConsole (message){

// console.log(message);
// };

// let helloMessage:string = "hello world";

// logToConsole(helloMessage);

var number = 1;
//var is for the entire fucntion
let anotherNumber = 2;
//let is specific for the part of the function it's declared in
const myName = "ben"; 
// const is for constant and should never change

function doSomething(){
  let index:number = 0;
  for ( index = 0; index < 5 ; index++){
    console.log(index);
  }
  console.log("final Number: " + index);
}

doSomething();