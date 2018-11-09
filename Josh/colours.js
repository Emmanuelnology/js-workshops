var colorArr = ["violet", "green", "blue", "yellow"] //array of variable values

function colorArg(array, index) { // function name (parameter and parameter - defined below)
    if(array[index]!="yellow" && array[index]!= "red" && array[index]!= "blue"){ //if defined point in array is NOT RYB
        array[index]='red'; //change value to red        
    }
   return array; //otherwise just return array as is
}

console.log(colorArg(colorArr, 1)); //function name (defined paramaters)
