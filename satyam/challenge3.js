var colorArr = ["violet", "green", "blue", "yellow"]
var pColor = ["red", "yellow", "blue"]

function test2(colorArr, index) {

    if(!(colorArr[index] == 'red' || colorArr[index] == 'blue' || colorArr[index] == 'yellow')){
        colorArr[index] = 'red';
    }
}


test2(colorArr,1);
// test2(colorArr,0);
// test2(colorArr,2);
console.log(colorArr);



