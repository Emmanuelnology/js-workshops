var colorsList=["violet","green","blue","yellow"];

function makePrimary(array,index) {
    if ( (array[index]) !== ("blue" || "yellow" || "red") ) {
        array[index] = "red";
    }
    return array;
}

console.log (makePrimary(colorsList,1));