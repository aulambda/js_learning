var array = [1, 2, 3]; // defines an array of 3 indexes
for (var i = 0; i < array.length; i++) { //iterates through every index of array
    var current = array[i]; // defines a variable containing the current index of array equal to the value of the iterator variable defined above
    console.log(current); //logs the value of 'current' to the consolei
}

function logEach(array) { // declares a function 'logEach' which takes 1 argument
    for (var i = 0; i < array.length; i++) // iterates thorugh every index of array
        console.log(array[i]); // logs the value of the index of the array equal to the iterator variable above
}

function forEach(array, action) { // defines a function which takes two parameters, an array, and another function to be used on each index of thar array
    for (var i = 0; i < array.length; i ++) // iterates through every index of the array
        action(array[i]); // calls the function passed in through that 'action' parameter with the current index of the array 
}

forEach(["Wampeter", "Foma", "Granfalloon"], console.log); // calls the 'forEach' function

var numbers = [1, 2, 3,4, 5], sum = 0; //defines two variables, one array and one number
forEach(numbers, function(number) { // calls the 'forEach' variable with the numbers array defined above as the array variable, and an anonymous function as the second. The 'number' parameter in the anonymous function gets filled by the 'array[i]' from the above declaration of 'forEach'.
    sum += number; // adds the value of the 'number' parameter (which is array[i]) to value of the sum variable and saves the sum variable
});

console.log(sum); // logs the value of the sum variable which has been updates by the forEach function


