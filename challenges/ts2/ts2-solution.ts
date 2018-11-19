function isPrimary(color:string):boolean {
    return (color == "red") || (color == "yellow") || (color == "blue");
}

export function fixColors(colorArray:string[], index:number):string[] {
    let clonedArray = colorArray.slice(0);
    if(!isPrimary(clonedArray[index])) {
      clonedArray[index] = "red";
    }
    return clonedArray;
}
