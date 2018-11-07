var firstName = "Ben";
var lastName = "Tomaney";
var myAge = 22;
var yourAge = 11;

console.log('Hello, my name is',firstName + " " + lastName + ".");

if (yourAge - myAge > 0) {
    console.log('You are',yourAge - myAge,'years older than me.');
};

if (yourAge - myAge < 0) {
    console.log('I am',myAge - yourAge,'years older than you.');
};

if (yourAge-myAge == 0) {
    console.log('We are the same age.');
};

console.log('The total length of both names is',firstName.length + lastName.length,'characters.')