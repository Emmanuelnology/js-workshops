/*

Arrays, Functions and Conditions

Create a list of colors that contains 4 different colors: violet, green, blue, yellow

Create a function that will take two arguments: an array of colors and an index.
The function will test whether the item at index is not a primary color and if it isn't, replace it with red. The function returns the new array.

Run the function to fix the second item in your color array and output the result to the console.

*/
//    let colours = ["violet", "green", "blue", "yellow"];
//    for(let index = 0; index < 4; index++) {
//        function color (c,index) {
//             if(c[index] != "red"){
//                 c[index] = "red";
//             }
//        }
//        }
//     console.log(color(colours[index]));
var colour = ["violet", "blue", "yellow"];
for (var index = 0; index < 4; index++) {
    function colours(c, index) {
        if (c[index] != "red") {
            c[index] = "red";
            log(c);
        }
    }
}
console.log(colours());
