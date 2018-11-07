var coloar = ['violet', 'green', 'blue', 'yellow'];

function change(arr, index) {
    if (arr[index] != 'red' || arr[index] != 'yellow' || arr[index] != 'blue') {
        arr[index] = 'red';
    }
    return arr
}

console.log(change(coloar, 1));