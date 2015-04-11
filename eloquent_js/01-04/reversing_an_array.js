function reverseArray(array) {
    var newArray = [];
    for (i = array.length - 1; i >=0; i--)
        newArray.push(array[i]);
    return newArray;
}


function reverseArrayInPlace(array) {
    var hold = 0
    for(i = 0; i < Math.floor(array.length / 2); i++) {
        hold = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = hold;



    }
    return array;
}
console.log(reverseArray(["a", "b", "c", "d", "e"]));
console.log(reverseArrayInPlace(["a", "b", "c", "d", "e"]));
