var colors = ['violet', 'green', 'blue', 'yellow'];
var primary = ['blue', 'red', 'yellow']

function replace(array, index) {
    if (array[index] == 'red' || array[index] == 'blue'  || array[index] == 'yellow') {
        console.log("no changes");
    }
    else {
        array[index] = 'red';
        console.log(array);
    }
}

replace(colors, 1);