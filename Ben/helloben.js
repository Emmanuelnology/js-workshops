var sum = 10 + 10;
var difference = 45 - 33;
var product = 4.4  * 10;
var quotient = 66 / 33;
var myDecimal = 5.7;
var remainder = 8 % 3;
sum++;
difference--;
sum -= 3;
myDecimal *= 3;
var x = 21;
x += Math.pow(x,2) + product;
var firstName = "Ben";
var lastName = "Tomaney";
var myStr1 = "FirstLine\n\t\\SecondLine\n\"Third\"Line";
var myStr2 = "First part and " + "second part.";
myStr2 += " And a";
var extra = " third part.";
myStr2 += extra;
var firstNameLength = firstName.length;
var firstNameSecondLetter = firstName[1];
var lastNameThirdLastLetter = lastName[lastName.length - 3];
function wordBlanks(myNoun, myAdjective, myVerb) {
    var result = "The " + myAdjective + " " + myNoun + " " + myVerb + ".";
    return result;
}

console.log('addition =', 5 + 6);
console.log('sum =', sum);
console.log('difference =', difference);
console.log('product =', product);
console.log('quotient =', quotient);
console.log('myDecimal =', myDecimal);
console.log('remainder =', remainder);
console.log('x =', x);
console.log(myStr1);
console.log(myStr2);
console.log('first name length =', firstNameLength);
console.log('second letter of first name =', firstNameSecondLetter);
console.log('third last letter of last name =', lastNameThirdLastLetter);
console.log(wordBlanks("cat", "fat", "slept"));
