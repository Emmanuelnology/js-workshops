var firstName = "George";
var lastname = "Webster";
var myAge = 23;
var yourAge =23;

console.log("Hello " + firstName + " " + lastname);
console.log("You are " + yourAge + " years old!");
if(yourAge > myAge){
    console.log("You are " + (yourAge - myAge) + " years older than me!");
}
else if (yourAge < myAge){
    console.log("I am " + (myAge - yourAge) + " years older than you!");
}
else{
    console.log("We are the same age!");
}

console.log("The total length of your name is: " + (firstName.length + lastname.length) + ".\nFirst name = " + firstName.length + " characters. \nLast name = " + lastname.length + " characters.");