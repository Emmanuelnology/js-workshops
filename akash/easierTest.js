var colors = ['violet', 'green', 'blue', 'yellow'];

function replace(array, index) {
    if (array[index] != 'red' || array[index] != 'blue'  || array[index] != 'yellow') {
        array[index] = 'red';
        return array;
    }   
}   

console.log(replace(colors, 1));
