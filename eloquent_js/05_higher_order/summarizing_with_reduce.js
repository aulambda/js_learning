function reduce(array, combine, start) { // declares a function that takes three parameters, an array, a function that combines things and and index to start at
    var current = start; // defines a variable that is ewual to the value of the start parameter
    for (var i = 0; i < array.length; i++) //iterates through the indexes of the array parameter
        current = combine(current, array[i]); // sets the value of current to the return of calling the function passed in as combine with current and the current index of the array as parameters.
    return current; // returns the value of current after that loop has completed
}

console.log(reduce([1,2,3,4], function(a, b) { // calls the reduce function with an array, and an anonymous function which adds the two values passed in as parameters
        return a + b; // returns the combination of 'current' and 'array[i]
}, 0)); // starts at the zeroth index of array
    
